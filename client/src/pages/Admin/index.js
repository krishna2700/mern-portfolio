import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import AdminAbout from "./AdminAbout";
import AdminIntro from "./AdminIntro";
import AdminExperience from "./AdminExperience";
import AdminProjects from "./AdminProjects";
import AdminEducation from "./AdminEducation";
import AdminContact from "./AdminContact";

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);

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
      children: <AdminProjects />,
    },
    {
      key: "4",
      label: "Experience",
      children: <AdminExperience />,
    },
    {
      key: "5",
      label: "Education",
      children: <AdminEducation />,
    },
    {
      key: "6",
      label: "Contact",
      children: <AdminContact />,
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
