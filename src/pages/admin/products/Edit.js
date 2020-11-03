import React from 'react'
import { Form, Card, Input, Button } from 'antd'

function Edit(props) {
    const { getFieldDecorator } = props.form;
    return (
        <Card
            title='商品编辑'
        >
            <Form>
                <Form.Item label='名字'>
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '请输入名字'
                        }]
                    })(
                        <Input placeholder='请输入商品名字'></Input>
                    )
                    }

                </Form.Item>
                <Form.Item label='价格'>
                    <Input placeholder='请输入商品价格'></Input>
                </Form.Item>
                <Form.Item >
                    <Button type='primary'>提交</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Form.create({ name: 'productEdit' })(Edit);
