import { SET_GENDER } from './types'

export const setGenderMale = (data) => dispatch => {
		dispatch({
			type: SET_GENDER,
			gender: 'male'
		})

}

export default setGenderMale
