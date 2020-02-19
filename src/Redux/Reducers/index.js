import { combineReducers } from 'redux';
import { ejecutores } from './Ejecutor';
import { reducer as reduxForm } from 'redux-form';


export default combineReducers({
    ejecutores,
    form: reduxForm,
});