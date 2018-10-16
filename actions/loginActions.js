import { actionTypes } from 'constants/actionTypes'
import Client from 'lib/Client'

export default {
    authorise: ({ username, password, dispatch }) => {
        dispatch({ type: actionTypes.LOGIN.REQUEST })
 
        // return Client.post('api/v1/auth', { username, password })
        //     .then(({ data }) => {
        //         dispatch({ type: actionTypes.LOGIN.SUCCESS })
        //     })
        //     .catch(error => {
        //         dispatch({ type: actionTypes.LOGIN.ERROR, error })
        //     })
        //     .then(() => {
        //         dispatch({ type: actionTypes.LOGIN.COMPLETE })
        //     })
    }
}
