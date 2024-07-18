import { Form, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../Redux/rootSlice";
import axios from "axios";

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const res = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
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

  if (!portfolioData || !portfolioData.about) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.about}
      >
        <Form.Item name="lottieURL" label="URL">
          <input placeholder="URL" />
        </Form.Item>
        <Form.Item name="description1" label="Description-1">
          <textarea placeholder="Description-1" />
        </Form.Item>
        <Form.Item name="description2" label="Description-2">
          <textarea placeholder="Description-2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
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

export default AdminAbout;
