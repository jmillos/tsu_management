import React, { Component } from 'react'
import ReactTable from 'react-table'

// Material UI

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
                showPagination={true}
                defaultPageSize={size}
                data={records}
                manual
                columns={[
                ]}
                noDataText='No se encontraron registros'
                // filterable
            />
        )
    }
}
