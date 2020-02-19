import { createAction } from "redux-actions";
import { FETCH_VIAJES } from "../../Constants";
import { apiPost } from "../../Api";
import { urlGetViajes } from '../../Api/Urls';


export const getViajes = createAction(FETCH_VIAJES,
     ( obj, cedula) => apiPost(urlGetViajes, obj, cedula)());