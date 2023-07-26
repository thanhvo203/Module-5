import { deleteUser, getUsers } from "../../services/userService";


export const listUsers = () => {
    return async(dispatch) => {
        const data = await getUsers();
        dispatch({
            type: 'LIST_USERS',
            payload: data,
        })
    }
}

export const deleteUsers = (id) => {
     return async(dispatch) => {
        await deleteUser(id);
        const data = await getUsers();
        dispatch ({
            type: 'DELETE_USER',
            payload: data,
        })
     }
     
}