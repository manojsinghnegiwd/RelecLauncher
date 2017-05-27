import * as types from './types';

export function updateApplications (applications) {
	return dispatch => {
		dispatch({
			type: types.UPDATE_APPLICATIONS,
			applications: applications
		})
	}
}