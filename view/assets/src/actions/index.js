import * as axios from 'axios'

import { API_URL, API_NONCE } from '../config'
import { FETCH_MODULES, FETCH_PTY_GROUPS } from './types'

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
