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
