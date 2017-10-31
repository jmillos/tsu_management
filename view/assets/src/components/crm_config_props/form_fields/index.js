import BuildSelectList from './builder/build_select_list'
import BuildTextField from './builder/build_text_field'
import BuildNumberField from './builder/build_number_field'

import SelectList from './select_list'
import TextField from './text_field'
import TextArea from './text_area'
import NumberField from './number_field'
import DatePicker from './date_picker'
import Toggle from './toggle'

/*------------------ List Fields ------------------*/
export const formFields = [
    { type: 'textfield', label: 'Texto de una sola línea', component: TextField, /*buildComponent: BuildTextField*/ },
    { type: 'textarea', label: 'Texto de varias líneas', component: TextArea, /*buildComponent: BuildTextField*/ },
    { type: 'selectfield', label: 'Selección en lista despegable', component: SelectList, buildComponent: BuildSelectList },
    { type: 'number', label: 'Número', component: NumberField, buildComponent: BuildNumberField },
    { type: 'datepicker', label: 'Selector de fecha', component: DatePicker },
    { type: 'toggle', label: 'Casilla de verificación', component: Toggle },
]
