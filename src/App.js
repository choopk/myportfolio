import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <Layout>
        <Header className="header-color" title="My portfolio" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/"><i className="fa fa-home" aria-hidden="true" /></Link>
            </Navigation>
          </Header>
          <Drawer title="My portfolio">
            <Navigation>
              <Link to="/"><i className="fa fa-home" aria-hidden="true" /></Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
             
            
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
