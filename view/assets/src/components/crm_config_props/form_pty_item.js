import _ from 'lodash'
import React, {Component} from 'react'
import { reduxForm, Field, FormSection, formValueSelector } from 'redux-form'
import slug from 'slug'

import * as validators from './../../validators'
import { formFields } from './form_fields'

import MUIAutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'
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
    state = {
        formFieldSelected: null
    }

    constructor(props){
        super(props)

        this.onChangeFieldType = this.onChangeFieldType.bind(this)
        this.autocompleteSlug = this.autocompleteSlug.bind(this)
    }

    componentWillMount(){
        // this.props.initialize( this.preFormatData() )
    }

    getFormFieldType(key){
        key = key || this.props.fieldType
        return formFields.find(i => i.type === key)
    }

    formatPtyGroups(items){
        return _.map(items, item => {
            return { id: item.id, name: item.title }
        })
    }

    renderFieldTypes(){
        return _.map(formFields, (field, key) => {
            return <MenuItem key={key} value={field.type} primaryText={field.label} />
        })
    }

    onChangeFieldType(e, key){
        console.log('e', key);
        this.setState({ formFieldSelected: this.getFormFieldType(key) })
    }

    autocompleteSlug(...params){
        const {
            change,
            titleField,
            slugField
        } = this.props

        if( (typeof titleField === 'string' && titleField.length > 0) && !(typeof slugField === 'string' && slugField.length > 0) ){
            setTimeout(() => {
                change(
                    'slug', 
                    slug(titleField, {
                        replacement: '_',
                        lower: true
                    })
                )
            })
        }
    }

    render() {
        let { formFieldSelected } = this.state
        if(!formFieldSelected){
            formFieldSelected = this.getFormFieldType()
        }

        let BuildComponent = null
        if(formFieldSelected && formFieldSelected.buildComponent){
            BuildComponent = formFieldSelected.buildComponent
        }

        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field
                    name="title"
                    component={TextField}
                    className="mui-text-input"
                    hintText="Etiqueta"
                    floatingLabelText="Etiqueta"
                    validate={validators.required}
                    fullWidth={true}
                    onBlur={this.autocompleteSlug}
                    // onChange={(e, newValue) => this.props.fields.slug.onChange(newValue)}
                />
                <Field
                    name="slug"
                    component={TextField}
                    className="mui-text-input"
                    hintText="Nombre interno"
                    floatingLabelText="Nombre interno"
                    validate={[validators.required, validators.alphaNumeric]}
                    fullWidth={true}
                    onBlur={this.autocompleteSlug}
                />
                <Field
                    name="in_title"
                    component={Toggle}
                    className="mt-2"
                    label="¿Incluir como titulo para el registro?"
                    labelPosition="right"
                />
                <Field
                    name="required"
                    component={Toggle}
                    className="mt-2"
                    label="¿Es requerido?"
                    labelPosition="right"
                />
                <Field
                    name="quick_create"
                    component={Toggle}
                    className="mt-2"
                    label="¿Incluir en el formulario de creación rápida?"
                    labelPosition="right"
                />
                <Field
                    name="excerpt"
                    component={TextField}
                    className="mui-text-input"
                    hintText="Descripción"
                    floatingLabelText="Descripción (opcional)"
                    fullWidth={true}
                />
                <Field
                    name="parent"
                    component={SelectField/*AutoComplete*/}
                    className="mui-text-input"
                    fullWidth={true}
                    hintText="Grupo"
                    floatingLabelText="Grupo"
                    // dataSourceConfig={{text: 'name', value: 'id'}}
                    // dataSource={this.formatPtyGroups(this.props.ptyGroups)}
                    // filter={MUIAutoComplete.fuzzyFilter}
                    validate={validators.required}
                    // openOnFocus
                >
                    {_.map(this.props.ptyGroups, item => {
                        return <MenuItem key={item.id} value={item.id} primaryText={item.title} />
                    })}
                </Field>
                <Field
                    name="field_type"
                    component={SelectField}
                    hintText="Tipo de campo"
                    floatingLabelText="Tipo de campo"
                    fullWidth={true}
                    validate={validators.required}
                    onChange={this.onChangeFieldType}
                >
                    {this.renderFieldTypes()}
                </Field>
                <div className="pl-2">
                    {
                        (() => {
                            if(BuildComponent !== null){
                                return (
                                    <FormSection name="field_type_opts">
                                            <BuildComponent className="mui-text-input" fullWidth={true} />
                                    </FormSection>
                                )
                            }
                        })()
                    }
                </div>
            </form>
        )
    }
}
FormPtyItem = reduxForm({form: 'PtyItemForm'})(FormPtyItem);

export default FormPtyItem
