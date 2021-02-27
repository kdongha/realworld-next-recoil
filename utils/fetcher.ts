import axios from 'axios';

const fetcher = axios.create({
    baseURL : "https://conduit.productionready.io"
})

export default fetcher;