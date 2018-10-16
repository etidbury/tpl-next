import { combineReducers } from 'redux'
import { counterPlusOneReducer } from 'reducers/counterPlusOne'

export const rootReducer = combineReducers({
    counterPlusOneReducer
})

export default rootReducer
