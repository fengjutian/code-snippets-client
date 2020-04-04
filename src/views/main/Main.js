import './Main.css';

import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout

class Main extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className='main-header'>Header</Header>
                    <Layout>
                        <Sider className='main-header'>Sider</Sider>
                        <Content className='main-header'>Content</Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Main;