import axios from "axios";

const BASE_URL =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios?orderBy=nome&view=nivelado";

const IBGE_API = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default IBGE_API;
