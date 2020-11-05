import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar} from 'antd';
import Logo from '../Frame/下载.png'
import {adminRoutes} from '../../routes/index'
import {withRouter} from 'react-router-dom'
import {clearToken} from '../../utils/auth'
import './frame.css'


const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route =>route.isShow)

function index(props) {

    const loginOutMenu = (
        <Menu onClick={ p=>{
            if(p.key == 'logout'){
                clearToken();
            }
            props.history.push('/login');
        }}>
            <Menu.Item key='notion'>通知中心</Menu.Item>
            <Menu.Item key='setting'>设置</Menu.Item>
            <Menu.Item key='logout'>退出</Menu.Item>
        </Menu>
    )

    return (
        <Layout>
            <Header className="header" style={{backgroundColor:"#428bca"}}>
                <div className="logo" >
                    <img src={Logo} alt="Logo" height="50px" />
                </div>
                <Dropdown overlay={loginOutMenu}>
                    <div>
                        <Avatar>U</Avatar>
                        <span style={{color:"#fff", marginLeft:"10px"}}>超级管理员</span>
                        <Icon type='down'></Icon>
                    </div>
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {routes.map(route =>{
                            return (
                            <Menu.Item key={route.path} onClick={p =>props.history.push(p.key)}>{route.title}</Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
        </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(index);
