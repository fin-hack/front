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
    },
    getValues() {
        return getInstance().get(`/users/values?day=${(new Date()).getDate()}`).then(resp => resp.data);
    },
    getChart(count) {
        return getInstance().get(`/users/graph_values?count=${count}`).then(resp => resp.data);
    },
    getLeaderboard() {
        return getInstance().get('users/leaderboard').then(resp => resp.data);
    }
};

export const teamAPI = {
    getTeamData(id) {
        return getInstance().get(`team?id=${id}`).then(resp => resp.data);
    },
    getTasks(id, status) {
        return getInstance().get(`team/tasks?id=${id}&&status=${status}`).then(resp => resp.data);
    },
    getLeaderboard() {
        return getInstance().get('team/leaderboard/').then(resp => resp.data);
    }
};

export const authAPI = {
    login(email, password, mood) {
        return getInstance().post(`auth/login/`, {
            email, password, mood
        })
            .then(resp => {
                setApiKey(resp.data.key);
                return resp.data
            })

    }
};