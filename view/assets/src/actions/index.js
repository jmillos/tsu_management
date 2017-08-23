import * as axios from 'axios'

import { API_URL, API_NONCE } from '../config'
import { FETCH_MODULES } from './types'

axios.defaults.headers.common['X-WP-Nonce'] = API_NONCE;

export function fetchModules(){
    const request = axios.get(`${API_URL}tsu_crm_modules`);

    return {
        type: FETCH_MODULES,
        payload: request
    }
}
