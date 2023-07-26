const initialValue = {
    user: []
}

export const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'LIST_USERS':
            return {...state, user: action.payload};
        case'DELETE_USER':
            return {...state , user: action.payload};
        default:
            return state;
       
    }
}