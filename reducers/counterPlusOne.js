import { COUNTER_PLUS_ONE } from '../constants/actionTypes'

const initialState = {
    counter: 0
}

export const counterPlusOneReducer = (state = initialState, action) => {
    switch (action.type) {
    case COUNTER_PLUS_ONE:
        return {
            ...state,
            counter: state.counter + 1
        }
    default:
        return state
    }
}
