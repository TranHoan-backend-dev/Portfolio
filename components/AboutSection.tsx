"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import {
  Cpu,
  Server,
  Database,
  Code,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

const backendImg =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
const systemImg =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2070&auto=format&fit=crop";
const codeImg =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop";

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: any;
  title: string;
  desc: string;
  delay: number;
}) => (
  <motion.div
    className="h-full"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Card className="bg-brand-gray/20 border-brand-gray/50 backdrop-blur-sm hover:border-brand-cyan/50 hover:bg-brand-gray/40 transition-all duration-300 group h-full">
      <CardBody className="p-6 flex flex-col items-start">
        <div className="w-12 h-12 bg-gradient-to-br from-brand-gray to-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-gray/30">
          <Icon className="w-6 h-6 text-brand-cyan" />
        </div>
        <h3 className="text-xl font-display font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-brand-light text-sm leading-relaxed flex-grow">
          {desc}
        </p>
      </CardBody>
    </Card>
  </motion.div>
);

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Decorative text watermark */}
      <div className="absolute top-20 right-0 font-display font-black text-[15vw] md:text-[200px] text-white/[0.02] leading-none pointer-events-none select-none z-0">
        BACKEND
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-brand-cyan font-mono text-sm tracking-widest mb-3 uppercase"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Backend Developer & System Architect
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-display font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Bền Bỉ - Hiệu Năng - Bảo Mật
          </motion.h3>
        </div>

        {/* Image Gallery (Bento Grid) using HeroUI Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 auto-rows-[minmax(250px,auto)]">
          <motion.div
            className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group border border-brand-gray/30 min-h-[400px] md:min-h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
            <Image
              removeWrapper
              alt="Backend Development"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              src={backendImg}
            />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <Chip
                className="bg-brand-dark/50 text-brand-cyan mb-2"
                color="primary"
                startContent={<Terminal className="w-3 h-3 mr-1" />}
                variant="flat"
              >
                Expertise
              </Chip>
              <p className="text-white font-bold text-xl leading-tight">
                Java & Spring Ecosystem
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-brand-gray/30 min-h-[250px]"
            initial={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
            <Image
              removeWrapper
              alt="System Architecture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              src={systemImg}
            />
            <div className="absolute bottom-0 right-0 w-full p-6 text-right z-20">
              <p className="text-white font-bold text-xl">
                System Architecture
              </p>
              <p className="text-brand-light text-sm">
                Scalable Microservices & Distributed Systems
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-brand-gray/30 min-h-[250px]"
            initial={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              removeWrapper
              alt="Clean Code"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              src={codeImg}
            />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <Chip
                className="bg-brand-dark/50 text-brand-gold mb-2"
                color="warning"
                startContent={<ShieldCheck className="w-3 h-3 mr-1" />}
                variant="flat"
              >
                Quality
              </Chip>
              <p className="text-white font-bold text-xl">
                Clean Code & Security First
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bio Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 font-sans text-brand-light text-lg leading-relaxed text-justify">
            <p>
              Xin chào, tôi là{" "}
              <strong className="text-white">Trần Xuân Hoàn</strong>. Một lập
              trình viên chuyên về{" "}
              <strong className="text-brand-cyan">Backend Development</strong>{" "}
              với niềm đam mê xây dựng những hệ thống mạnh mẽ và có khả năng mở
              rộng.
            </p>
            <p>
              Với nền tảng vững chắc về{" "}
              <strong className="text-brand-gold">Java & Spring Boot</strong>,
              tôi đã tham gia phát triển nhiều dự án từ hệ thống quản lý tuyển
              dụng đến kiến trúc Microservices phức tạp.
            </p>
            <p>
              Tôi luôn chú trọng vào việc viết mã sạch (Clean Code), tối ưu hóa
              hiệu suất cơ sở dữ liệu và đảm bảo tính bảo mật cao nhất cho mọi
              ứng dụng.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-brand-dark border-brand-gray p-6 text-center hover:border-brand-gold transition-colors">
              <Server className="w-8 h-8 text-brand-gold mx-auto mb-2" />
              <div className="font-display font-bold text-lg md:text-2xl text-white">
                Backend
              </div>
              <div className="text-xs text-brand-light">
                Java / Spring Specialist
              </div>
            </Card>
            <Card className="bg-brand-dark border-brand-gray p-6 text-center hover:border-brand-cyan transition-colors">
              <Database className="w-8 h-8 text-brand-cyan mx-auto mb-2" />
              <div className="font-display font-bold text-lg md:text-2xl text-white">
                Databases
              </div>
              <div className="text-xs text-brand-light">
                SQL / NoSQL / Redis
              </div>
            </Card>
            <Card className="bg-brand-dark border-brand-gray p-6 text-center hover:border-purple-500 transition-colors col-span-2 md:col-span-1 md:col-start-2">
              <Cpu className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="font-display font-bold text-lg md:text-2xl text-white">
                DevOps
              </div>
              <div className="text-xs text-brand-light">Docker / CI-CD</div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            delay={0.1}
            desc="Xây dựng logic nghiệp vụ phức tạp với Java 17+, đảm bảo tính ổn định và dễ bảo trì."
            icon={Code}
            title="Lập Trình Hệ Thống"
          />
          <FeatureCard
            delay={0.2}
            desc="Triển khai kiến trúc phân tán, giải quyết các bài toán về đồng bộ dữ liệu và giao tiếp service."
            icon={Workflow}
            title="Microservices"
          />
          <FeatureCard
            delay={0.3}
            desc="Áp dụng các tiêu chuẩn bảo mật (Oauth2, JWT) để bảo vệ dữ liệu và hệ thống người dùng."
            icon={ShieldCheck}
            title="Bảo Mật"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
