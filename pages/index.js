import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req,params }) {
        // const isServer = !!req
        // reduxStore.dispatch(serverRenderClock(isServer))

        return {}
    }

    componentDidMount () {
        // const {dispatch} = this.props
        // this.timer = startClock(dispatch)
    }

    componentWillUnmount () {
        // clearInterval(this.timer)
    }
  
    render () {
        return (
            <div>
                <p className="hello-world">Hello world</p>
            </div>

        )
    }
}

export default connect()(Index)
