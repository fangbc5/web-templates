import axios from 'axios';
export const getUser = () => {
    return axios.get('/user/getUser');
}
