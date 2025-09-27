"use client";

import React, { useState } from "react";
import { GraduationCap, Phone, Mail, MapPin, Clock } from "lucide-react";

const FooterSection: React.FC = () => {
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
    // TODO: 这里可以调用后端 API
  };

  return (
    <footer className="bg-red-600 text-white" id="contact">
      <div className="max-w-[1120px] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* 公司信息 */}
        <div className="flex justify-center flex-col">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
            <h3 className="text-xl font-semibold">VanLearn International</h3>
          </div>
          <p className="text-white/90 text-sm mb-6 leading-relaxed">
            Empowering students through comprehensive academic excellence and
            personalized learning experiences. Your journey to success starts
            here.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-white" />
              <span>+1 (604) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-white" />
              <span>vanlearn@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-white" />
              <span>Vancouver, BC, Canada</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-white" />
              <span>Mon-Fri: 9AM-9PM | Sat-Sun: 10AM-6PM</span>
            </div>
          </div>
        </div>

        {/* 简化预约表单 */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 rounded-lg shadow p-6 space-y-4"
          >
            <h2 className="text-lg font-semibold text-gray-900">预约试听</h2>

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
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* 提交按钮 */}
            <div>
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition"
              >
                提交预约
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
