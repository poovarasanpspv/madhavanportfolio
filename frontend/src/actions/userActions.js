import {
    loadUserRequest,
    loadUserSuccess,
    loadUserFail
} from '../slices/authSlice';

import axios from 'axios';

export const loadUser =  async (dispatch) => {

    try {
        dispatch(loadUserRequest())
        
        const { data }  = await axios.get(`/api/v1/myprofile`);
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }

}



