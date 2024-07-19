import { Form, message } from "antd";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../Redux/rootSlice";

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      console.log("Resize observed");
    };

    const initializeResizeObserver = () => {
      resizeObserverRef.current = new ResizeObserver(handleResize);

      const formContainer = document.querySelector("#formContainer");
      if (formContainer) {
        resizeObserverRef.current.observe(formContainer);
      }
    };

    initializeResizeObserver();

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      values.skills =
        typeof values.skills === "string"
          ? values.skills
              .split(",")
              .map((skill) => skill.trim())
              .join(", ")
          : values.skills;
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

  const initialValues = {
    ...portfolioData.about,
    skills:
      typeof portfolioData.about.skills === "string"
        ? portfolioData.about.skills
            .split(",")
            .map((skill) => skill.trim())
            .join(", ")
        : portfolioData.about.skills,
  };

  return (
    <div>
      <Form
        id="formContainer"
        onFinish={onFinish}
        layout="vertical"
        initialValues={initialValues}
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
