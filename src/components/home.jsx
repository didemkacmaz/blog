import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

class Home extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <a href="#">Deneme</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Home;
