export default function reducer(state = {
    user: {
        name: null,
        vorname: null,
        geschlecht: null,
        benutzername: null,
        email: null,
        adresse: null,
        postleizahl: null,
        ort: null
    },
}, action){
    switch(action.type){
        case'SET':{
            return {
                ...state,
                user: {...state.user, [action.path]: action.payload}
            }
        }
    }
    return state
}