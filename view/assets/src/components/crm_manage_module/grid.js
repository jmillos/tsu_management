import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactTable from 'react-table'
import moment from 'moment'

// Material UI

import { defaultsReactTable } from '../../config'

moment.locale('es')

export default class ModuleGrid extends Component {
    constructor(props){
        super(props)

    }

    render(){
        const {
            group,
            records,
            size
        } = this.props

        return (
            <ReactTable
                {...defaultsReactTable}
                showPagination={true}
                defaultPageSize={size}
                data={records}
                manual
                columns={[
                    {
                        Header: 'Nombre',
                        // accessor: 'nombre',
                        id: 'fullname',
                        accessor: d => <Link to={`records/${d.id}`}>{`${d.nombre} ${d.apellidos}`}</Link>
                    },
                    {
                        Header: 'Correo Eléctronico',
                        accessor: 'email'
                    },
                    {
                        Header: 'Teléfono/Celular',
                        accessor: 'numero_de_telefono_celular'
                    },
                    {
                        Header: 'Fecha de creación',
                        accessor: 'date',
                        Cell: (cell) => {
                            const date = moment(cell.value).format('LLL')
                            return date
                        },
                    }
                ]}
                noDataText='No se encontraron registros'
                // filterable
            />
        )
    }
}
