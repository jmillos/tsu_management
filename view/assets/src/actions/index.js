import * as axios from 'axios'

import { API_URL, API_NONCE } from '../config'
import {
    FETCH_MODULES,
    FETCH_PTY_GROUPS,
    CREATE_PTY_GROUP,
    UPDATE_PTY_GROUP,
    SET_MODE_EDIT,
    SET_MODE_CREATE,
    SET_MODE_CUSTOMIZER,
    SET_DIALOG_OPEN,
    FETCH_PROPERTIES,
    FETCH_PROPERTY,
    CREATE_PTY,
    UPDATE_PTY,
    FETCH_RECORDS,
    FETCH_RECORD,
    CREATE_RECORD,
    UPDATE_RECORD,
    DELETE_RECORD,
    UPDATE_USER,
    FETCH_USER
} from './types'

axios.defaults.headers.common['X-WP-Nonce'] = API_NONCE;

/*------------ Modules ------------*/
export function fetchModules(){
    const request = axios.get(`${API_URL}tsu_crm_modules`);

    return {
        type: FETCH_MODULES,
        payload: request
    }
}

/*------------ Property Group ------------*/
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

/*------------ Property ------------*/
export function fetchProperty(propertyId){
    const request = axios.get(`${API_URL}tsu_crm_pty/${propertyId}`);

    return {
        type: FETCH_PROPERTY,
        payload: request
    }
}

export function fetchProperties(){
    const request = axios.get(`${API_URL}tsu_crm_pty`);

    return {
        type: FETCH_PROPERTIES,
        payload: request
    }
}

export function createProperty(props, callback = null){
    const request = axios.post(`${API_URL}tsu_crm_pty`, props)

    if(callback !== null){
        request.then(callback)
    }

    return {
        type: CREATE_PTY,
        payload: request
    }
}

export function updateProperty(id, props, callback = null){
    const request = axios.post(`${API_URL}tsu_crm_pty/${id}`, props)

    if(callback !== null){
        request.then(callback)
    }

    return {
        type: UPDATE_PTY,
        payload: request
    }
}

/*------------ Record ------------*/
export function fetchRecords(moduleId){
    const request = axios.get(`${API_URL}tsu_crm_record?parent=${moduleId}`);

    return {
        type: FETCH_RECORDS,
        payload: request
    }
}

export function fetchRecord(recordId, parentId){
    const request = axios.get(`${API_URL}tsu_crm_record/${recordId}?parent=${parentId}`);

    return {
        type: FETCH_RECORD,
        payload: request
    }
}

export function createRecord(moduleId, props, callback = null){
    const request = axios.post(`${API_URL}tsu_crm_record?parent=${moduleId}`, props)

    if(callback !== null){
        request.then(callback)
    }

    return {
        type: CREATE_RECORD,
        payload: request
    }
}

export function updateRecord(id, moduleId, props, callback = null){
    const request = axios.post(`${API_URL}tsu_crm_record/${id}?parent=${moduleId}`, props)

    if(callback !== null){
        request.then(callback)
    }

    return {
        type: UPDATE_RECORD,
        payload: request
    }
}

/*------------ User ------------*/
export function fetchUser(userId){
    const request = axios.get(`${API_URL}users/${userId}`);

    return {
        type: FETCH_USER,
        payload: request
    }
}

export function updateUser(id, props, callback){
    return (dispatch, getState) => {
        const state = getState()
        console.log({ ...state.users[id], ...props });
        const request = axios.post(`${API_URL}users/${id}`, { ...state.users[id], ...props })

        if(callback !== null){
            request.then(callback)
        }

        dispatch({
            type: UPDATE_USER,
            payload: request
        })
    }
}

/*------------ UI ------------*/
export function setModeEdit(active){
    return {
        type: SET_MODE_EDIT,
        payload: active
    }
}

export function setModeCreate(active){
    return {
        type: SET_MODE_CREATE,
        payload: active
    }
}

export function setModeCustomizer(active){
    return {
        type: SET_MODE_CUSTOMIZER,
        payload: active
    }
}

export function setDialogOpen(active){
    return {
        type: SET_DIALOG_OPEN,
        payload: active
    }
}
