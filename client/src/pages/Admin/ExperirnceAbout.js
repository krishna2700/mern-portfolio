import { Form, message, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../Redux/rootSlice";

const ExperienceAbout = () => {
  const { portfolioData, reloadData } = useSelector((state) => state.root);
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
  }, [reloadData, form]);

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
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-end mb-4">
        <button
          className="bg-primary text-white px-4 py-2 sm:px-5 sm:py-3 rounded"
          onClick={() => handleModalOpen()}
        >
          Add Experience
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {experience?.map((exp) => (
          <div
            key={exp._id}
            className="shadow-md border p-4 sm:p-5 border-gray-300 rounded flex flex-col gap-2"
          >
            <h1 className="text-primary text-lg sm:text-xl font-bold">
              {exp.period}
            </h1>
            <hr />
            <h1 className="text-base sm:text-lg">Company: {exp.company}</h1>
            <h1 className="text-base sm:text-lg">Role: {exp.title}</h1>
            <h1 className="text-base sm:text-lg">
              Description: {exp.description}
            </h1>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => handleDelete(exp)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => handleModalOpen(exp)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showAddEditModel}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        onCancel={handleModalClose}
        footer={null}
        className="relative"
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="period" label="Period">
            <input className="w-full p-2 border rounded" placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input
              className="w-full p-2 border rounded"
              placeholder="Company"
            />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <input className="w-full p-2 border rounded" placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <input
              className="w-full p-2 border rounded"
              placeholder="Description"
            />
          </Form.Item>
          <div className="flex justify-end gap-2">
            <button
              className="border-primary text-primary px-3 py-1 sm:px-4 sm:py-2 rounded"
              onClick={handleModalClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded"
            >
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ExperienceAbout;
