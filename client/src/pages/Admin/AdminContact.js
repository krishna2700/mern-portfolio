import { Form, message, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../Redux/rootSlice";
import API_URL from "../../config/api";

const AdminContact = () => {
  const { portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [form] = Form.useForm();
  const { contact } = portfolioData;

  useEffect(() => {
    if (reloadData) {
      setShowEditModal(false);
      form.resetFields();
    }
  }, [reloadData, form]);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const res = await axios.post(`${API_URL}/api/portfolio/update-contact`, {
        ...values,
        _id: contact._id,
      });
      dispatch(HideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        setShowEditModal(false);
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

  const handleModalOpen = () => {
    setShowEditModal(true);
    form.setFieldsValue(contact);
  };

  const handleModalClose = () => {
    setShowEditModal(false);
    form.resetFields();
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <button
          className="bg-primary text-white px-4 py-2 sm:px-5 sm:py-3 rounded"
          onClick={handleModalOpen}
        >
          Edit Contact
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="shadow-lg border p-6 border-gray-200 rounded-lg flex flex-col gap-4 bg-white hover:shadow-xl transition-all">
          <h1 className="text-blue-600 text-xl font-bold">{contact.name}</h1>
          <hr />
          <h1 className="text-lg font-semibold">Email: {contact.email}</h1>
          <h1 className="text-base">Mobile: {contact.mobile}</h1>
          <h1 className="text-base">Age: {contact.age}</h1>
          <h1 className="text-base">Gender: {contact.gender}</h1>
          <h1 className="text-base">Country: {contact.country}</h1>
          <div className="h-[50vh] lg:h-[70vh] w-full lg:w-1/2">
            <lottie-player
              src={contact.lottieURL}
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
      <Modal
        open={showEditModal}
        title="Edit Contact"
        onCancel={handleModalClose}
        footer={null}
        className="relative"
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <input className="w-full p-2 border rounded" placeholder="Name" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <input className="w-full p-2 border rounded" placeholder="Email" />
          </Form.Item>
          <Form.Item name="mobile" label="Mobile">
            <input className="w-full p-2 border rounded" placeholder="Mobile" />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <input className="w-full p-2 border rounded" placeholder="Age" />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <input className="w-full p-2 border rounded" placeholder="Gender" />
          </Form.Item>
          <Form.Item name="country" label="Country">
            <input
              className="w-full p-2 border rounded"
              placeholder="Country"
            />
          </Form.Item>
          <Form.Item name="lottieURL" label="Lottie URL">
            <input
              className="w-full p-2 border rounded"
              placeholder="Lottie URL"
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
              Update
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminContact;
