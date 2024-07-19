import { Form, message, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../Redux/rootSlice";

const AdminEducation = () => {
  const { portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { education } = portfolioData;
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
        res = await axios.post("/api/portfolio/update-education", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        res = await axios.post("/api/portfolio/add-education", values);
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
      const res = await axios.post("/api/portfolio/delete-education", {
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
      item || {
        project: "",
        title: "",
        description: "",
        image: "",
        link: "",
        techStack: [],
      }
    );
  };

  const handleModalClose = () => {
    setShowAddEditModel(false);
    setSelectedItemForEdit(null);
    form.resetFields();
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <button
          className="bg-primary text-white px-4 py-2 sm:px-5 sm:py-3 rounded"
          onClick={() => handleModalOpen()}
        >
          Add Education
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {education?.map((edu) => (
          <div
            key={edu._id}
            className="shadow-lg border p-6 border-gray-200 rounded-lg flex flex-col gap-4 bg-white hover:shadow-xl transition-all"
          >
            <h1 className="text-blue-600 text-xl font-bold">{edu.title}</h1>
            <hr />
            <h1 className="text-lg font-semibold">Project: {edu.school}</h1>
            <h1 className="text-base">Description: {edu.description}</h1>
            <h1 className="text-base">Period: {edu.period}</h1>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => handleDelete(edu)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => handleModalOpen(edu)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showAddEditModel}
        title={selectedItemForEdit ? "Edit Education" : "Add Education"}
        onCancel={handleModalClose}
        footer={null}
        className="relative"
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="school" label="School">
            <input className="w-full p-2 border rounded" placeholder="School" />
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
          <Form.Item name="period" label="period">
            <input className="w-full p-2 border rounded" placeholder="period" />
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

export default AdminEducation;
