import { Form, message, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../Redux/rootSlice";
import axios from "axios";

const ExperirnceAbout = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { experience } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const res = await axios.post("/api/portfolio/add-experience", values);
      dispatch(HideLoading());
      if (res.data.success) {
        message.success("Experience updated successfully");
        dispatch(HideLoading());
        setShowAddEditModel(false);
        dispatch(ReloadData(true));
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <div className="flex justify-end p-5">
        <button
          className="bg-primary text-white px-5 py-2"
          onClick={() => setShowAddEditModel(true)}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experience?.map((exp) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-3">
            <h1 className="text-primary text-xl font-bold">{exp.period}</h1>
            <hr />
            <h1>Company: {exp.company}</h1>
            <h1>Role: {exp.title}</h1>
            <h1>Description: {exp.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button className="bg-red-500 text-white px-5 py-2">
                Delete
              </button>
              <button className="bg-primary text-white px-5 py-2">Edit</button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showAddEditModel}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        onCancel={() => {
          setShowAddEditModel(false);
          setSelectedItemForEdit(null);
        }}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="period" label="Period">
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input placeholder="Company" />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input placeholder="Description" />
          </Form.Item>
          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => setShowAddEditModel(false)}
            >
              Cancel
            </button>
            <button type="submit" className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ExperirnceAbout;
