import Axios from "axios";
import { downLoadFile } from "../Containers/HomeContainer";


export const apiPost = (url, data, cedula) => () => Axios.post(`${url}/${cedula}`, data,
    {}).then(respuesta => {
        downLoadFile(respuesta.data, "text/plain");
        const info = {
            cedula,
            respuesta
        };
        return info;        
    })


