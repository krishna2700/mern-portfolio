import { Form, message, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../Redux/rootSlice";
import axios from "axios";

const ExperienceAbout = () => {
  const { portfolioData, loading, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();
  const { experience } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (reloadData) {
      setShowAddEditModel(false);
      setSelectedItemForEdit(null);
      form.resetFields();
    }
  }, [reloadData]);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let res;
      if (selectedItemForEdit) {
        res = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        res = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        form.resetFields();
        dispatch(ReloadData(true));
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const handleDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const res = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const handleModalOpen = (item = null) => {
    setSelectedItemForEdit(item);
    setShowAddEditModel(true);
    form.setFieldsValue(
      item || { period: "", company: "", title: "", description: "" }
    );
  };

  const handleModalClose = () => {
    setShowAddEditModel(false);
    setSelectedItemForEdit(null);
    form.resetFields();
  };

  return (
    <div>
      <div className="flex justify-end p-5">
        <button
          className="bg-primary text-white px-5 py-2"
          onClick={() => handleModalOpen()}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experience?.map((exp) => (
          <div
            key={exp._id}
            className="shadow border p-5 border-gray-400 flex flex-col gap-3"
          >
            <h1 className="text-primary text-xl font-bold">{exp.period}</h1>
            <hr />
            <h1>Company: {exp.company}</h1>
            <h1>Role: {exp.title}</h1>
            <h1>Description: {exp.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => handleDelete(exp)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => handleModalOpen(exp)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {!loading && (
        <Modal
          open={showAddEditModel}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          onCancel={handleModalClose}
          footer={null}
        >
          <Form layout="vertical" form={form} onFinish={onFinish}>
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
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button type="submit" className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default ExperienceAbout;
