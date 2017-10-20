import * as axios from 'axios'

import { API_URL, API_NONCE } from '../config'
import { FETCH_MODULES, FETCH_PTY_GROUPS, CREATE_PTY_GROUP, UPDATE_PTY_GROUP } from './types'

axios.defaults.headers.common['X-WP-Nonce'] = API_NONCE;

export function fetchModules(){
    const request = axios.get(`${API_URL}tsu_crm_modules`);

    return {
        type: FETCH_MODULES,
        payload: request
    }
}

export function fetchPropertyGroups(){
    const request = axios.get(`${API_URL}tsu_crm_pty_groups`);

    return {
        type: FETCH_PTY_GROUPS,
        payload: request
    }
}

export function createPropertyGroup(props){
    const request = axios.post(`${API_URL}tsu_crm_pty_groups`, props);

    return {
        type: CREATE_PTY_GROUP,
        payload: request
    }
}

export function updatePropertyGroup(id, props){
    const request = axios.post(`${API_URL}tsu_crm_pty_groups/${id}`, props);

    return {
        type: UPDATE_PTY_GROUP,
        payload: request
    }
}

export function deletePropertyGroup(id, callback) {
    const request = axios
                    .delete(`${API_URL}tsu_crm_pty_groups/${id}`)
                    .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}
