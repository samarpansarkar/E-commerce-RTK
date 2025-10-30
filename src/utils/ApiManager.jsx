import axios from "axios";
const ApiManager = axios.create({
    baseURL: "http://localhost:9999",
    timeout: 3000
})

export default ApiManager