import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const Admin = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData ? (
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Admin;
