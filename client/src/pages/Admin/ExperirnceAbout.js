import { Form, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ExperirnceAbout = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { experience } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {experience?.map((exp) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col">
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
        onCancel={() => setShowAddEditModel(false)}
      >
        <Form layout="vertical">
          <Form.Item name="period" label="Period">
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input />
          </Form.Item>
          <Form.Item name="title" label="Role">
            <input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ExperirnceAbout;
