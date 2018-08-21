import { combineReducers } from 'redux'
import catReducer from './category-reducer.js'
import expReducer from './expense-reducer.js'

export default combineReducers({
    catReducer,
    expReducer
})