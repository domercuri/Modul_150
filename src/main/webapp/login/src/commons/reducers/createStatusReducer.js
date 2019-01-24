const defaultState = {
    status: null,
    error: null,
    info: null,
}

export const createStatusReducer = (type, initState = defaultState) =>{
    return(state = initState, action) => {
        switch(action.type){
            case `${type}_PENDING`: return {status: "PENDING"};
            case `${type}_SUCCESS`: return {status: "OK", info: action.payload};
            case `${type}_FAILED`: return {status: "FAILED", error: action.error};
            default: return defaultState;
        }
    }
}