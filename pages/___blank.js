import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

class Blank extends React.Component {
    
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
            ...
            </div>

        )
    }
}

export default connect()(Blank)
