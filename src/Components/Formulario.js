import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import OptionActions from "./OptionActions";
import { Prompt } from 'react-router-dom';
import '../Components/Style.css';
import logo from '../../src/logo.svg';


const validate = values => {
    const error = {};
    if (!values.cc) {
        error.cc = "La cédula es un campo requerido";
    }

    if (values.cc && isNaN(Number(values.cc))) {
        error.cc = "La cédula debe ser un número"
    }
    return error;

};


class Formulario extends Component {


    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    renderField = ({ input, meta, type, label, name, withFocus }) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                {...input}
                type={!type ?
                    "text" :
                    type} ref={withFocus && (txt => this.txt = txt)} />
            {
                meta.touched && meta.error && <span>{meta.error} </span>
            }
        </div>


    );
    render() {

        const { handleSubmit, submitting, pristine, submitSucceeded, onChangeHandlerFile, onChangeHandlerCedula } = this.props;
        return (
            <div className="divFormulario">
                <h2>Formulario para obtener viajes máximos por día</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        withFocus
                        name="cc"
                        component={this.renderField}
                        label="Cédula"
                        onChange={onChangeHandlerCedula}
                    >
                    </Field>
                    <div className="divInputFile">
                        <input type="file" name="file" onChange={onChangeHandlerFile} />
                    </div>

                    <div className="cajaImagenes">
                            <img className="imagen1" src="https://pngimage.net/wp-content/uploads/2018/06/mudanza-png.png" alt="" />
                            <img src={logo} className="App-logo" alt="logo" />

                    </div>



                    <OptionActions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    </OptionActions>
                    <Prompt
                        when={!pristine && !submitSucceeded}
                        message="Se perderán los datos si continúa"
                    ></Prompt>
                </form>
            </div >
        );
    };
}


Formulario.propTypes = {
    handleSubmit:  PropTypes.func.isRequired,
    submitSucceeded: PropTypes.func.isRequired,
    onChangeHandlerFile: PropTypes.func.isRequired,
    onChangeHandlerCedula: PropTypes.func.isRequired,
    cc: PropTypes.string,

};


const FormularioForm = reduxForm({ form: 'Formulario', validate })(Formulario);

export default FormularioForm;