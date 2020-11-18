import {listApi} from '../../../services/products'

export function productsList(){
    var dataSource = [];
    listApi().then(res =>{
        // console.log(res);
        dataSource = [];
        res.list.map(item =>{
            dataSource.push(item);
        })
    }).catch(err =>{
        // console.log(err);
    });
    return JSON.parse(dataSource);
}
