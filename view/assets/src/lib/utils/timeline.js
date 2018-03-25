import _ from 'lodash'

export function orderItems(coll){
    const items = {
        ...coll.notes,
    }

    return _.orderBy(items, 'date', 'desc');
}
