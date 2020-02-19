import { handleActions } from 'redux-actions';
import { FETCH_VIAJES } from '../../Constants';

export const ejecutores = handleActions({
    [FETCH_VIAJES]: (state, action) => [...state, action.payload],
}, []);