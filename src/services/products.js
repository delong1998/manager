import {get, post, del, put} from '../utils/request'

/**
 * 获取数据列表
 * @param {} page 
 */
// export function listApi(page = 1){
//     return get('/api/papers', {page})
// }
export function listApi(){
    return get('/api/papers')
}

/**
 * 创建列表记录
 * @param {*} data 
 */
export function creatApi(data) {
    return post('/api/products', {data})
}

/**
 * 更新列表记录
 * @param {*} id 
 * @param {*} data 
 */
export function updateOne(id, data){
    return put(`/api/products/${id}`, data)
}

/**
 * 删除列表记录
 * @param {*} id 
 * @param {*} data 
 */
export function delOne(id, data){
    return del(`/api/products/${id}`)
}