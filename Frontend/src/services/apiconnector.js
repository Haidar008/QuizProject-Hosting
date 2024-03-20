import axios from "axios";

const axiosInstance=axios.create();

async function apiConnector(method,url,headers,params,bodyData){
    const response=await axiosInstance({
        method:`${method}`,
        url:`${url}`,
        headers:(headers)?headers:null,
        params:(params)?params:null,
        data:(bodyData)?bodyData:null
    });
    return response;
}

export default apiConnector;