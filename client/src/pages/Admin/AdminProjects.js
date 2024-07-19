import { Form, message, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../Redux/rootSlice";

const AdminProjects = () => {
  const { portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { project } = portfolioData;
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
        res = await axios.post("/api/portfolio/update-projects", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        res = await axios.post("/api/portfolio/add-projects", values);
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
      const res = await axios.post("/api/portfolio/delete-projects", {
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
          Add Project
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {project?.map((pro) => (
          <div
            key={pro._id}
            className="shadow-lg border p-6 border-gray-200 rounded-lg flex flex-col gap-4 bg-white hover:shadow-xl transition-all"
          >
            <h1 className="text-blue-600 text-xl font-bold">{pro.title}</h1>
            <hr />
            <h1 className="text-lg font-semibold">Project: {pro.project}</h1>
            <h1 className="text-base">Description: {pro.description}</h1>
            <img
              src={pro.image}
              alt={pro.title}
              className="w-full h-32 object-cover rounded-md"
            />
            <h1 className="text-base">
              Link:{" "}
              <a href={pro.link} target="_blank" rel="noopener noreferrer">
                {pro.link}
              </a>
            </h1>
            <h1 className="text-base">
              Tech Stack: {pro.techStack.join(", ")}
            </h1>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => handleDelete(pro)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded"
                onClick={() => handleModalOpen(pro)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showAddEditModel}
        title={selectedItemForEdit ? "Edit Project" : "Add Project"}
        onCancel={handleModalClose}
        footer={null}
        className="relative"
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="project" label="Project">
            <input
              className="w-full p-2 border rounded"
              placeholder="Project"
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
          <Form.Item name="image" label="Image URL">
            <input
              className="w-full p-2 border rounded"
              placeholder="Image URL"
            />
          </Form.Item>
          <Form.Item name="link" label="Project Link">
            <input
              className="w-full p-2 border rounded"
              placeholder="Project Link"
            />
          </Form.Item>
          <Form.Item name="techStack" label="Tech Stack">
            <input
              className="w-full p-2 border rounded"
              placeholder="Tech Stack (comma separated)"
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

export default AdminProjects;
