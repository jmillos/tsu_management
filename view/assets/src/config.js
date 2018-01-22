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
