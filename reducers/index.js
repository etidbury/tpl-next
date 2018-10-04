import { combineReducers } from 'redux'
import { counterPlusOneReducer } from './counterPlusOne'

export const rootReducer = combineReducers({
    counterPlusOneReducer
})

export default rootReducer
