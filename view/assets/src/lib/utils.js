import _ from 'lodash'

export function strToJson(str) {
    try {
      str = eval("(" + str + ")")
    } catch (_error) {}

    return str;
}

export function getAttrsFromElement(el) {
    let props = {}
    _.forEach(el.attributes, function(attr, i) {
      if (attr.nodeName != "class")
        props[attr.nodeName] = strToJson(attr.nodeValue)
    })

    return props
}

export function filterSearch(coll, substr){
    return _.filter(coll, _.flow(
        _.identity,
        _.values,
        _.join,
        _.toLower,
        _.partialRight(_.includes, substr)
    ))

    // return _.filter(coll, item => item.title.toLowerCase().indexOf(substr) > -1)
}
