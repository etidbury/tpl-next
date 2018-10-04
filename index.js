const { 
    NODE_ENV , 
    DISABLE_LOGS , 
    USE_SEQUELIZE , 
    LOG_LEVEL, 
    HOST , 
    PORT ,
    FIXTURES ,
    ROUTES_PREFIX
} = process.env

const isProd = NODE_ENV === 'production'

// Disable console logs
if (DISABLE_LOGS) {
    
    const noOp = function(){} // no-op function

    const names = ['log', 'debug', 'info', 'warn', 'error',
        'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time',
        'timeEnd', 'count', 'trace', 'profile', 'profileEnd']

    if (typeof window !== 'undefined'){

        names.forEach((name)=>{
            window.console[name] = noOp
        })
      
    }
    
    if (typeof global.console !== 'undefined'){
        names.forEach((name)=>{
            global.console[name] = noOp
        })
    }
      
}

let _log

if (!DISABLE_LOGS) {
    const pino = require('pino')
    const pretty = pino.pretty()
    pretty.pipe(process.stdout)
    _log = pino({ 
        level: LOG_LEVEL || 'warn' // @ref: http://getpino.io/#/docs/api?id=level-string
    }, pretty)
}

const fastify = require('fastify')({ logger: _log || false })

// Pretty prints all available routes ( fastify.blipp() inside callback to fastify.listen() )
if (!DISABLE_LOGS) {
    fastify.register(require('fastify-blipp'))
}

// https://expressjs.com/en/advanced/best-practice-security.html
fastify.register(require('fastify-helmet'))

// tip: set to {global:false} and use reply.compress() where needed
fastify.register(require('fastify-compress'), { global: true })

fastify.use(require('cors')())

// Next.js
const Next = require('next')
fastify.register(async (fastify, opts) => {

    const app = Next({ dev: !isProd })
    
    await app.prepare()

    if (!isProd) {
        fastify.get('/_next/*', async (req, reply) => {

            await app.handleRequest(req.req, reply.res)
            reply.sent = true
          
        })
    }

    // custom next.js route
    // fastify.get("/b", (req, reply) => {
    //     return app
    //         .render(req.req, reply.res, "/a", req.query)
    //         .then(() => {
    //             reply.sent = true;
    //         });
    // });

    fastify.get('/*', async (req, reply) => {

        await app.handleRequest(req.req, reply.res)
        reply.sent = true
      
    })

    fastify.setNotFoundHandler(async (request, reply) => {
        await app.render404(request.req, reply.res)
        reply.sent = true
    })
})

if (!PORT || !PORT.length) {
    throw new TypeError('Required environment variable not set: PORT')
}

// Start server
fastify.listen(
    PORT,
    HOST || '0.0.0.0',
    async (err, address) => {
        try {
        
            if (err) {
                throw err
            }

            if (fastify.blipp) {
                fastify.blipp()
            }else {
                console.info(`> Ready at ${address}`)
            }

        }catch(err){
            console.error(err)
            // console.trace(err)
            process.exit(1)
        }
    }
    
)
