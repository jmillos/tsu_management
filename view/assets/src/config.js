import {
    cyanA400,
    tealA400
} from 'material-ui/styles/colors'

export const API_URL = `${wpApiSettings.root}wp/v2/`
export const API_NONCE = wpApiSettings.nonce
export const CURRENT_USER_ID = wpUserSettings.current_user

export const MUITheme = {
    palette: {
        accent1Color: cyanA400
    },
    zIndex: {
        dialog: 999999,
        layer: 999999,
        popover: 999999
    }
}

/*--------------------- Activity -------------*/
export const resultsCall = [
    { key: 'No answer', label: 'Sin respuesta' },
    { key: 'Busy', label: 'Ocupado' },
    { key: 'Wrong number', label: 'Número equivocado' },
    { key: 'Left live message', label: 'Dejar mensaje en vivo' },
    { key: 'Left voicemail', label: 'Dejar correo de voz' },
    { key: 'Connected', label: 'Conectado' },
]
/*------------------------------------------------------*/

/*--------------------- Labels React Table -------------*/
export const defaultsReactTable = {
    rowsText: 'filas',
    ofText: 'de',
    pageText: 'Página',
    noDataText: 'No se encontraron registros',
    loadingText: 'Cargando...',
    nextText: 'Siguiente',
    previousText: 'Anterior'
}
