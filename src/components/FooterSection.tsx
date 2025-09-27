"use client";

import React, { useState } from "react";
import { GraduationCap, Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const FooterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
            <h3 className="text-xl font-semibold">VanLearn International Education</h3>
          </div>
          <p className="text-white/90 text-sm mb-6 leading-relaxed">
            Empowering students through comprehensive academic excellence and
            personalized learning experiences. Your journey to success starts
            here.
          </p>

          <div className="flex flex-col gap-2 items-left">
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span>+1 (236) 989-1968</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span>vanlearnedu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span>20378 88 Ave Unit 200, Langley</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-white" />
                <span>Mon-Fri: 3PM-7PM | Sat: 9AM-7PM | Sun: Closed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image src="/rednote.png" alt="Logo" width={40} height={20} />
                <span>温学国际教育 26866778516</span>
              </div>
            </div>
            <div className="pt-8 flex gap-12">
              <Image src="/wechat.jpg" alt="Logo" width={120} height={120} />
              <Image src="/whatsapp.jpg" alt="Logo" width={120} height={120} />
            </div>
          </div>
        </div>

        {/* 简化预约表单 */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 rounded-lg shadow p-6 space-y-4"
          >
            <h2 className="text-lg font-semibold text-gray-900">预约试听 / Book trial</h2>

            {/* 姓名 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* 留言 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div >
    </footer >
  );
};

export default FooterSection;
