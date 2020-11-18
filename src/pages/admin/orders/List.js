import React, { Component } from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'
import index from '../dashboard'
import { listApi } from '../../../services/products'

const dataSource = [];
class List extends Component {
    state = {
        dataSource: [],
    }
    componentDidMount() {
        listApi().then(res => {
            console.log(res);
            // console.log(props);
            res.list.map(item =>{
                dataSource.push(item);
            })
        }).catch(err => {
            console.log(err);
        });
        console.log(dataSource);
    }

    text = e => {

    }
    render() {
        console.log(this.props);
        const {dataSource } = this.state;
        const columns = [
            {
                title: '序号',
                key: 'id',
                width: 80,
                align: 'center',
                render: (txt, record, index) => index + 1
            },
            {
                title: '名字',
                dataIndex: 'name'
            },
            {
                title: '简介',
                dataIndex: 'intro'
            },
            {
                title: '价格',
                dataIndex: 'price'
            },
            {
                title: '数量',
                dataIndex: 'num'
            },
            {
                title: '操作',
                render: (txt, record, index) => {
                    return (
                        <div>
                            <Button size='small' type='primary' style={{ marginRight: 10 }} onClick={this.text}>修改</Button>
                            <Popconfirm
                                title='确定删除此项'
                                okText='确认'
                                cancelText='取消'
                                onCancel={() => { console.log('用户取消删除') }}
                                onConfirm={() => {
                                    console.log('用户确认删除')
                                    // 调用删除接口
                                }}

                            >
                                <Button size='small' type='danger' >删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ]
        return (
            <Card title='商品列表' extra={<Button type='primary' size='small' onClick={() => this.props.history.push('/admin/products/edit/')}>新增</Button>}>
                <Table
                    columns={columns}
                    bordered
                    dataSource={dataSource}
                    rowKey='id'
                >

                </Table>
            </Card>
        )
    }
}

export default List
