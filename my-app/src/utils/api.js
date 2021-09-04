import * as axios from 'axios';
import {getApiKey, setApiKey} from "./apiKeyManager";

const getInstance = () =>
    axios.create({
        baseURL: 'http://192.168.5.247:8000/',
        headers: {
            'key': getApiKey()
        }
    });

export const usersAPI = {
    getUserData() {
        return getInstance().get('/users/').then(resp => resp.data);
    }
};

export const authAPI = {
    login(username, email, password) {
        /*return getInstance().post(`auth/login/`, {
            username, email, password
        })
            .then(resp => {
                setApiKey(resp.data.key);
                return resp.data
            });*/

        setApiKey('123');

        return {
            key: '123'
        }
    },
};