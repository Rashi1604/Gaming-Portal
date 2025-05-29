import axios from "axios";

const GetRequest=async(url)=>{
    console.log(url)
    let sendResponse;

    await axios.get(url)
    .then(
        (response)=>{
            // console.log(response.data);
            sendResponse=response.data;
        },
        (error)=>{
            console.log(error);
            sendResponse=error;
        }
    )

    return sendResponse;
}
export default GetRequest;