import { combineReducers } from 'redux'
import genderReducer from './genderReducer'

export default combineReducers({
	gender: genderReducer
})
