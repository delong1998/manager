import {get, post, del, put} from './auth'

/**
 * 获取数据列表
 * @param {} page 
 */
export function listApi(page = 1){
    return get('/api/v1/admin/products', {page})
}

/**
 * 创建列表记录
 * @param {*} data 
 */
export function creatApi(data) {
    return post('/api/v1/admin/products', {data})
}

/**
 * 更新列表记录
 * @param {*} id 
 * @param {*} data 
 */
export function updateOne(id, data){
    return put(`/api/v1/admin/products/${id}`, data)
}

/**
 * 删除列表记录
 * @param {*} id 
 * @param {*} data 
 */
export function delOne(id, data){
    return del(`/api/v1/admin/products/${id}`)
}