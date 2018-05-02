import _ from 'lodash'

export function orderItems(coll){
    const items = {
        ...coll.notes,
        ...coll.activities,
        ...coll.tasks,
    }

    return _.orderBy(items, 'date', 'desc');
}
