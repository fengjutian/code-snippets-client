import React from 'react';
import './App.css';

import { Layout, Input, Button } from 'antd';
const { Header, Content, Footer } = Layout

class App extends React.Component {
  constructor(props) {
    super(props);
    this.goMainPage = this.goMainPage.bind(this);
  }
  goMainPage() {
    console.log(this.props.history)
    this.props.history.push('/main')
  }
  render() {
    return (
      <div className="App">
        <Header theme="dark" className='header-style'>Header</Header>
        <Content theme="dark" className='content-style'>
          <div>
            <div>
              <span>姓名：</span>
              <Input placeholder='请输入姓名'/>
            </div>
            <div>
              <span>密码：</span>
              <Input type='password' placeholder='请输入密码'/>
            </div>
            <div>
              <Button type="primary" onClick={this.goMainPage}>Submit</Button>
            </div>
          </div>
        </Content>
        <Footer theme="dark" className='footer-style'>Footer</Footer>
      </div>
    );
  }
}

export default App;
