import combineReducers from 'redux'
import CountReducer from './CountReducer'
import loggedReducer from './loggedReducer'

const AllReducer = combineReducers{
    count: CountReducer,
    logged: loggedReducer,
}

export default AllReducer;