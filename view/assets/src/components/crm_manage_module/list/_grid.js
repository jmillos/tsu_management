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
    state = {
        loading: true
    }

    constructor(props){
        super(props)

    }

    componentWillUpdate(nextProps, nextState){
        if(this.props.columns !== nextProps.columns){
            this.buildColumns()
        }
    }

    buildColumns(){
        const columnsInTitle = getColumnsInTitle(this.props.columns)
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
            properties,
            size,
            handleFetchRecords,
            moduleId
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
                loading={this.state.loading}
                columns={columns}
                onFetchData={(state, instance) => {
                    // show the loading overlay
                    this.setState({loading: true})

                    const {
                        page,
                        pageSize,
                        sorted
                    } = state

                    let meta_key, orderby, order
                    if( Array.isArray(sorted) && sorted.length > 0 ){
                        if(sorted[0].id === 'titleColumn'){
                            orderby = 'title'
                        }else{
                            const prop = properties[ sorted[0].id ]
                            meta_key = prop && prop.slug
                            orderby = 'meta_value'
                        }

                        order =  sorted[0].desc === true ? 'desc':'asc'
                    }

                    const params = {
                        // page,
                        // per_page: pageSize,
                        meta_key,
                        orderby,
                        order,
                    }

                    console.log('onFetchData', params);

                    handleFetchRecords(moduleId, params, () => {
                        this.setState({loading: false})
                    })

                    // fetch your data
                    /*Axios.post('mysite.com/data', {
                      page: state.page,
                      pageSize: state.pageSize,
                      sorted: state.sorted,
                      filtered: state.filtered
                    })
                      .then((res) => {
                        // Update react-table
                        this.setState({
                          data: res.data.rows,
                          pages: res.data.pages,
                          loading: false
                        })
                    })*/
                }}
                // filterable
            />
        )
    }
}
