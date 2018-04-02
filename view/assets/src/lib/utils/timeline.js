import _ from 'lodash'

export function orderItems(coll){
    const items = {
        ...coll.notes,
        ...coll.activities,
    }

    return _.orderBy(items, 'date', 'desc');
}
