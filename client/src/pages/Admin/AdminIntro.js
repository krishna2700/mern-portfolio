import { Form, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../Redux/rootSlice";
import API_URL from "../../config/api";

const AdminIntro = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const res = await axios.post(`${API_URL}/api/portfolio/update-intro`, {
        ...values,
        _id: portfolioData.intro._id,
      });
      dispatch(HideLoading());
      if (res.data.success) {
        message.success("Intro updated successfully");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  if (!portfolioData || !portfolioData.intro) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button type="submit" className="px-10 py-3 bg-primary text-white">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
