import React from 'react';
import './App.css';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout

function App() {
  return (
    <div className="App">
      <Header theme="dark" className='header-style'>Header</Header>
      <Content theme="dark" className='content-style'>
        
         

      </Content>
      <Footer theme="dark" className='footer-style'>Footer</Footer>
    </div>
  );
}

export default App;
