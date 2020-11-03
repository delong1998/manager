import React from 'react'
import { Form, Card, Input, Button, message } from 'antd'


function Edit(props) {
    const { getFieldDecorator } = props.form;
    const handleSubmit = e =>{
        console.log(e);
        e.preventDefault();
        props.form.validateFields((err,values)=>{
            if(!err){
                console.log('提交');
                console.log(values);
                //此处需要调用接口
            }else {
                message.error('请输入正确的内容');
            }
        })
    }

    return (
        <Card
            title='商品编辑'
        >
            <Form onSubmit={e =>handleSubmit(e)}>
                <Form.Item label='名字'>
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true,
                            message: '名字不能为空！'
                        }]
                    })(
                        <Input placeholder='请输入商品名字'></Input>
                    )
                    }

                </Form.Item>
                <Form.Item label='价格'>
                    {getFieldDecorator('price', {
                        rules: [{
                            required: true,
                            message: '价格不能为空！'
                        }]
                    })(
                        <Input placeholder='请输入商品价格'></Input>
                    )
                    }

                </Form.Item>
                <Form.Item >
                    <Button type='primary' htmlType='submit'>提交</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Form.create({ name: 'productEdit' })(Edit);
