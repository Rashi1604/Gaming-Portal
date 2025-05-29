const reducer=(state=0,action)=>{
    if(action.type==='save')
    {
        return state+action.payload;
    }
    else if(action.type==='fetch')
    {
        return state;
    }
    else
    {
        return state;
    }
}

export {reducer};