import React, { Component } from 'react'
import { Link } from 'react-router'
import ReactTable from 'react-table'
import moment from 'moment'
import _ from 'lodash'

// Material UI

import { defaultsReactTable } from '../../../config'
import { buildTitle, getColumnsInTitle } from '../../../lib/utils'

moment.locale('es')

export default class ModuleGrid extends Component {
    columns = []

    constructor(props){
        super(props)

    }

    componentWillUpdate(nextProps, nextState){
        if(this.props.columns !== nextProps.columns){
            this.buildColumns()
        }
    }

    buildColumns(){
        const columnsInTitle = getColumnsInTitle()
        const titleCol = {
            Header: _.join( _.map(columnsInTitle, _.iteratee('title')), '/' ),
            id: 'titleColumn',
            accessor: record => <Link to={`${this.props.basePathRecord}${record.id}`}>{buildTitle(record, this.props.columns)}</Link>
        }

        const columns = _.map(_.filter(this.props.columns, { in_title: false }), (col, i) => {
            return {
                Header: col.title,
                id: col.id,
                accessor: this.getAccesor(col, i)
            }
        })

        return [
            titleCol,
            ...columns
        ]
    }

    getAccesor(col, i){
        return col.slug
    }

    render(){
        const {
            group,
            records,
            size
        } = this.props

        const columns = this.buildColumns()

        console.log('this.columns', columns);

        return (
            <ReactTable
                {...defaultsReactTable}
                showPagination={true}
                defaultPageSize={size}
                data={records}
                manual
                columns={columns}
                // filterable
            />
        )
    }
}
