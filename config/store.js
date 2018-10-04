import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from 'reducers'

export function initializeStore(initialState = {}) {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        const { createLogger } = require('redux-logger')

        return createStore(
            reducers,
            initialState,
            composeWithDevTools(
                applyMiddleware(
                    thunkMiddleware,
                    createLogger({ collapsed: true })
                )
            )
        )
    }

    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunkMiddleware)
    )
}
