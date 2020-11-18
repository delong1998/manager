import React from 'react'
import {productsList} from '../model/products'


function index() {
    console.log('111');
    console.log(productsList());
    return (
        <div>
            <h1>个人展示页面</h1>
        </div>
    )
}

export default index
