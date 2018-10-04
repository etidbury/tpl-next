import React from 'react'
import { connect } from 'react-redux'

class Demo extends React.Component {

    static async getInitialProps({ reduxStore, req, params, query }) {
        return {}
    }
    async componentDidMount() {
        if (process.env.GOOGLE_ANALYTICS_ID && process.env.GOOGLE_ANALYTICS_ID.length) {
            const ReactGA = require('react-ga')
            
            ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID)
            ReactGA.pageview(window.location.pathname + window.location.search)
        }
    }

    render() {

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps)(Demo)
