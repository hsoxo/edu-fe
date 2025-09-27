import React, { useState } from "react";

const SimpleBookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: 在这里对接后端 API 或者邮件服务
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">预约试听</h2>

      {/* 姓名 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          姓名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      {/* 邮箱 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          邮箱 <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      {/* 留言 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          留言
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      {/* 提交按钮 */}
      <div>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
        >
          提交预约
        </button>
      </div>
    </form>
  );
};

export default SimpleBookingForm;
