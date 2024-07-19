import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
import ExperirnceAbout from "./ExperirnceAbout";

const Admin = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);

  const tabItems = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro />,
    },
    {
      key: "2",
      label: "Abouts",
      children: <AdminAbout />,
    },
    {
      key: "3",
      label: "Projects",
      children: <p>Projects Content</p>,
    },
    {
      key: "4",
      label: "Experience",
      children: <ExperirnceAbout />,
    },
    {
      key: "5",
      label: "Education",
      children: <p>Education Content</p>,
    },
    {
      key: "6",
      label: "Courses",
      children: <p>Courses Content</p>,
    },
  ];

  return (
    <div>
      <Header />
      {portfolioData ? (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Admin;
