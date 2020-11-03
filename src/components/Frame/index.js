import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Logo from '../Frame/下载.png'
import {adminRoutes} from '../../routes/index'
import {withRouter} from 'react-router-dom'


const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route =>route.isShow)

function index(props) {
    return (
        <Layout>
            <Header className="header" style={{backgroundColor:"#428bca"}}>
                <div className="logo" >
                    <img src={Logo} alt="Logo" height="50px" />
                </div>
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
