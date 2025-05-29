const saveData=(data)=>{
    //This Method will save Data

    return(dispatch)=>{
        dispatch({
            type:'save',
            payload:data
        })
    }
}
export{saveData};

const sendData=()=>{
    //This Method will Send Data

    return(dispatch)=>{
        dispatch({
            type:'fetch'
        })
    }
}
export{sendData};