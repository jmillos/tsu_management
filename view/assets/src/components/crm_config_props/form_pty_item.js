import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'

import MUIAutoComplete from 'material-ui/AutoComplete'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from 'redux-form-material-ui'

class FormPtyItem extends Component {
    onSubmit(values) {
        // this.props.createPost(values, () => {
        //     this.props.history.push("/");
        // });
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    component={TextField}
                    className="mui-text-input mui-input-wrap"
                    hintText="Etiqueta"
                    floatingLabelText="Etiqueta"
                />
                <Field
                    name="name"
                    component={TextField}
                    className="mui-text-input mui-input-wrap"
                    hintText="Nombre interno"
                    floatingLabelText="Nombre interno"
                />
                <Field
                    name="content"
                    component={TextField}
                    className="mui-text-input mui-input-wrap"
                    hintText="Descripción"
                    floatingLabelText="Descripción"
                />
                <Field
                    name="group"
                    component={AutoComplete}
                    className="mui-text-input"
                    hintText="Grupo"
                    floatingLabelText="Grupo"
                    dataSourceConfig={{text: 'name', value: 'id'}}
                    dataSource={[
                        { id: 1, name: 'Info del Contacto' },
                        { id: 2, name: 'Info sobre redes sociales' },
                        { id: 3, name: 'Info del correo electrónico' },
                    ]}
                    filter={MUIAutoComplete.fuzzyFilter}
                    openOnFocus
                />
            </form>
        )
    }
}

FormPtyItem = reduxForm({form: 'PtyItemForm'})(FormPtyItem);

export default FormPtyItem
