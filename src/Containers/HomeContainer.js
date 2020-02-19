import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../Components/AppFrame';
import { connect } from 'react-redux';
import { getViajes } from '../Redux/Actions/GetViajes';
import { SubmissionError } from 'redux-form';
import Formulario from '../Components/Formulario';
import { saveAs } from 'file-saver';

export const downLoadFile = (data, type) => {
    const blob = new Blob([data], { type: type.toString() });
    window.URL.createObjectURL(blob);
    saveAs(blob, "ViajesMáximos.txt");
}

class HomeContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            cc: null
        }

    }
    onChangeHandlerCedula = event => {
        this.setState({ cc: event.target.value });
    }
    onChangeHandlerFile = event => this.setState({ selectedFile: event.target.files[0] });

    handleSubmit = () => {

        if (this.state.selectedFile === null) {
            alert("Debe ingresar un archivo");
        } else {
            const data = new FormData();
            data.append('file', this.state.selectedFile);
            return this.props.getViajes(data, this.state.cc).then(r => {
                if (r.error) {
                    throw new SubmissionError(r.payload);
                };
            });
        }

    }

    handleOnSubmitSuccess = () => {
        if (this.state.selectedFile !== null) {
            alert("PROCESO CORRECTO");
        }
    }

    renderBody = () => (
        <Formulario
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onChangeHandlerFile={this.onChangeHandlerFile}
            onChangeHandlerCedula={this.onChangeHandlerCedula}
            setSelectedFile={this.setSelectedFile}

        />
    )

    render() {
        return (
            <AppFrame
                header={"Lazy mudanzas"}
                body={this.renderBody()}
            ></AppFrame>
        );
    }
}

HomeContainer.propTypes = {
    getViajes: PropTypes.func.isRequired,

};

const mapDispatchToProps = ({
    getViajes,

});
export default (connect(null, mapDispatchToProps)(HomeContainer));