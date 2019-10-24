import { SET_GENDER } from '../actions/types'

const initialState = {
	user: {

	}
}
export default function(state = initialState, action) {
	switch(action.type) {
		case SET_GENDER:
			return {
				...state,
				items: action.gender
			}
		default:
			return state
	}
}
