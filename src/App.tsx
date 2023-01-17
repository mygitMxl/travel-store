import React from 'react';
import styles from "./App.module.css";
import { Header, Footer,} from "./components";
import { SideMenu } from './components/sideMenu';
import {Carousel} from './components/carousel'
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
