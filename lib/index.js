"use strict";

let ResortingKey = function (arr, by) {
    if (!arr.length) {
        throw new Error('Empty array')
    }
    if (!by) {
        throw new Error('Key has no value.')
    }

    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i][by]] = arr[i]
    }

    Object.size = function (objCount) {
        let size = 0
        let key
        for (key in objCount) {
            if (objCount.hasOwnProperty(key)) {
            size++
            }
        }
        return size
    }
    return {
        result: obj,
        length: Object.size(obj)
    }
}

module.exports = ResortingKey
