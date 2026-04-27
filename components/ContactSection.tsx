"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Mail, Send, CheckCircle, Globe } from "lucide-react";

import { GithubIcon as Github } from "@/components/icons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Backend Development",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        interest: "Backend Development",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const interests = [
    { label: "Backend Development", value: "Backend Development" },
    { label: "System Architecture", value: "System Architecture" },
    { label: "API Design & Integration", value: "API Design & Integration" },
    { label: "Full Stack Project", value: "Full Stack Project" },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-t from-black to-brand-dark"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
              Let's build <br />
              <span className="text-brand-cyan">the future.</span>
            </h2>
            <p className="text-brand-light text-lg max-w-md">
              Tôi luôn sẵn sàng thảo luận về các dự án Backend, kiến trúc hệ
              thống hoặc các cơ hội hợp tác phát triển phần mềm.
            </p>

            <div className="space-y-6 pt-8">
              <div
                className="flex items-center space-x-4 group cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:hoana5k44nknd@gmail.com")
                }
              >
                <div className="w-12 h-12 bg-brand-gray/30 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-light/60">Email</p>
                  <p className="text-white font-medium text-lg">
                    hoana5k44nknd@gmail.com
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 group cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://github.com/TranHoan-backend-dev",
                    "_blank",
                  )
                }
              >
                <div className="w-12 h-12 bg-brand-gray/30 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 text-brand-cyan">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-light/60">Github</p>
                  <p className="text-white font-medium text-lg">
                    TranHoan-backend-dev
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 group cursor-pointer"
                onClick={() =>
                  window.open("https://tranhoan-dev.vercel.app", "_blank")
                }
              >
                <div className="w-12 h-12 bg-brand-gray/30 rounded-full flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 text-brand-cyan">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-brand-light/60">Portfolio</p>
                  <p className="text-white font-medium text-lg">
                    tranhoan-dev.vercel.app
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form using HeroUI */}
          <motion.div
            className="bg-brand-gray/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-brand-gray/30 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  classNames={{
                    inputWrapper:
                      "border-brand-gray focus-within:border-brand-cyan",
                    label: "text-brand-light",
                  }}
                  label="Họ tên"
                  labelPlacement="outside"
                  placeholder="Tên của bạn"
                  value={formData.name}
                  variant="bordered"
                  onValueChange={(val) =>
                    setFormData({ ...formData, name: val })
                  }
                />
                <Input
                  classNames={{
                    inputWrapper:
                      "border-brand-gray focus-within:border-brand-cyan",
                    label: "text-brand-light",
                  }}
                  label="Email"
                  labelPlacement="outside"
                  placeholder="name@example.com"
                  type="email"
                  value={formData.email}
                  variant="bordered"
                  onValueChange={(val) =>
                    setFormData({ ...formData, email: val })
                  }
                />
              </div>

              <Select
                classNames={{
                  trigger: "border-brand-gray focus-within:border-brand-cyan",
                  label: "text-brand-light",
                  value: "text-white",
                }}
                label="Dịch vụ quan tâm"
                labelPlacement="outside"
                placeholder="Chọn dịch vụ"
                selectedKeys={[formData.interest]}
                variant="bordered"
                onSelectionChange={(keys) =>
                  setFormData({
                    ...formData,
                    interest: Array.from(keys)[0] as string,
                  })
                }
              >
                {interests.map((i) => (
                  <SelectItem key={i.value} value={i.value}>
                    {i.label}
                  </SelectItem>
                ))}
              </Select>

              <Textarea
                classNames={{
                  inputWrapper:
                    "border-brand-gray focus-within:border-brand-cyan",
                  label: "text-brand-light",
                }}
                label="Tin nhắn"
                labelPlacement="outside"
                minRows={4}
                placeholder="Nội dung cần trao đổi..."
                value={formData.message}
                variant="bordered"
                onValueChange={(val) =>
                  setFormData({ ...formData, message: val })
                }
              />

              <Button
                fullWidth
                className={`font-bold text-lg py-7 transition-all duration-300
                            ${status === "sending"
                    ? "bg-brand-gray cursor-wait text-brand-light"
                    : status === "success"
                      ? "bg-green-500 text-white"
                      : status === "error"
                        ? "bg-red-500 text-white"
                        : "bg-white text-brand-dark hover:bg-brand-cyan shadow-[0_0_20px_rgba(102,252,241,0.2)]"
                  }`}
                disabled={status === "sending" || status === "success"}
                endContent={status === "idle" && <Send className="w-5 h-5" />}
                size="lg"
                startContent={
                  status === "success" && <CheckCircle className="w-5 h-5" />
                }
                type="submit"
              >
                {status === "sending"
                  ? "Đang gửi..."
                  : status === "success"
                    ? "Đã Gửi Thành Công!"
                    : status === "error"
                      ? "Lỗi. Vui lòng thử lại."
                      : "Gửi Tin Nhắn"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
