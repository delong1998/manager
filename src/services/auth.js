import { post } from '../utils/request'

/**
 * 用户登录
 * @param {*} user 
 * username
 * password
 */
export function loginApi(user) {
    return post('/api/login', user);
}
export function registerApi(user){
    return post('/api/register', user);
}