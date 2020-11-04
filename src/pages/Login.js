import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import { Link } from 'react-router-dom';
import {setToken} from '../utils/auth'
import './login.css'

function Login(props) {
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //登陆成功后的跳转页面
                setToken(values.username);
                props.history.push('/admin');
            }
        });
    };

    return (
        <Card
            title="管理后台"
            className="login-form"
        >
            <Form onSubmit={e => handleSubmit(e)} >
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox style={{ marginRight: 50 }}>记住我</Checkbox>)}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Form.create({ name: 'Loginform' })(Login);
