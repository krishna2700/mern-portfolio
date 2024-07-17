import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";

const { TabPane } = Tabs;

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 p-5">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="Abouts" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Projects" key="3">
            <p>Projects Content</p>
          </TabPane>
          <TabPane tab="Experience" key="4">
            <p>Experience Content</p>
          </TabPane>
          <TabPane tab="Education" key="5">
            <p>Education Content</p>
          </TabPane>
          <TabPane tab="Courses" key="6">
            <p>Courses Content</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
