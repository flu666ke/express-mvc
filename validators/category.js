const validator = require('validator')
const _ = require('lodash')
const ValidationError = require('../common/validator/ValidationError')

const categoryFields = [
    'name',
    'parentId'
]

class CategoryValidate {
    add(payload) {
        if (!payload) {
            const error = ValidationError('payload', '"payload" is required!')
            throw error
        }

        if (!payload.name) {
            throw ValidationError('name', '"payload.name" is required!')
        }

        if (payload.parentId && (
            !_.isString(payload.parentId)
            ||
            !validator.isUUID(payload.parentId)
        )) {
            throw ValidationError('parentId', '"payload.parentId" must be an UUID String!')
        }

        return _.pick(payload, categoryFields)
    }

    delete(_id) {

    }

    update(_id) {

    }
}

module.exports = {
    categoryValidate: new CategoryValidate(),
    CategoryValidate,
    categoryFields
} 