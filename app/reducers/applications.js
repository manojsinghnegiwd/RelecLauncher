import * as types from '../actions/types';

const initState = {
	applications: []
};

export default function (state = initState, action) {
	switch(action.type) {
		case types.UPDATE_APPLICATIONS:
			return {...state, applications: action.applications}
		default:
			return state;
	}
}