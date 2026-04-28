"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import { ExternalLink } from "lucide-react";

import { GithubIcon as Github } from "@/components/icons";

type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
    impact: string;
    images: string[];
    github?: string;
    demo?: string;
};

const SAMPLE_PROJECTS: Project[] = [
    {
        id: "ims",
        title: "Interview Management System (IMS)",
        category: "Full Stack (Java/Spring/React)",
        description:
            "IMS là nền tảng hỗ trợ tuyển dụng hiện đại cho phép quản lý ứng viên, vị trí công việc, lịch phỏng vấn và trao đổi nội bộ.",
        tech: ["Java 17", "Spring Boot", "React", "PostgreSQL", "Docker"],
        impact: "Tối ưu hóa 40% quy trình tuyển dụng và lưu trữ dữ liệu tập trung.",
        images: [
            "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
        ],
        github:
            "https://github.com/TranHoan-backend-dev/Interview-Management-System",
    },
    {
        id: "labverse",
        title: "LabVerse — Research Paper Management",
        category: "Microservices & Android",
        description:
            "Hệ thống hỗ trợ các phòng thí nghiệm khám phá, tổ chức và cộng tác trên các bài báo nghiên cứu.",
        tech: ["Spring Cloud", "Android SDK", "MongoDB", "Redis"],
        impact:
            "Hỗ trợ quản lý hơn 1000+ tài liệu nghiên cứu với kiến trúc microservices.",
        images: [
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
        ],
        github: "https://github.com/TranHoan-backend-dev/LabVerse",
    },
    {
        id: "quezee",
        title: "Quezee — Quiz Practice System",
        category: "Backend (Java Servlet)",
        description:
            "Nền tảng ôn tập trắc nghiệm trực tuyến với tính năng theo dõi tiến độ và quản lý mô-đun học tập.",
        tech: ["Java Servlet", "JSP", "MySQL", "Bootstrap"],
        impact: "Hệ thống phục vụ nhu cầu ôn tập cho hơn 500+ sinh viên.",
        images: [
            "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        ],
        github: "https://github.com/TranHoan-backend-dev/Quiz-Practice-System",
    },
];

const ProjectImageCarousel = ({
    images,
    title,
}: {
    images: string[];
    title: string;
}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [index, images.length]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 1,
        }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 1,
        }),
    };

    return (
        <div className="w-full h-full relative overflow-hidden bg-gray-100 dark:bg-brand-dark">
            <AnimatePresence custom={direction} initial={false} mode="popLayout">
                <motion.div
                    key={index}
                    animate="center"
                    className="absolute inset-0 w-full h-full"
                    custom={direction}
                    exit="exit"
                    initial="enter"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    variants={variants}
                >
                    <Image
                        removeWrapper
                        alt={`${title} ${index + 1}`}
                        className="w-full h-full object-cover"
                        src={images[index]}
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-white/10 dark:bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
        </div>
    );
};

export const ProjectsSection: React.FC = () => {
    return (
        <section className="py-24 relative" id="projects">
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-brand-cyan/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-brand-teal dark:text-brand-cyan font-mono text-sm tracking-widest uppercase">
                            Portfolio & Projects
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mt-2">
                            Dự Án Tâm Đắc
                        </h2>
                    </div>
                </div>

                <div className="space-y-24">
                    {SAMPLE_PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-3/5 group relative">
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-brand-dark shadow-2xl shadow-gray-200 dark:shadow-brand-cyan/10 border border-gray-200 dark:border-brand-gray/30 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                                    <ProjectImageCarousel
                                        images={project.images}
                                        title={project.title}
                                    />
                                </div>
                                <div className="absolute -inset-4 border border-gray-200 dark:border-brand-gray/20 rounded-xl -z-10 translate-x-4 translate-y-4" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-2/5 space-y-6">
                                <Chip
                                    className="text-brand-teal bg-brand-teal/10 dark:text-brand-cyan dark:bg-brand-cyan/10 font-mono text-xs px-3"
                                    color="primary"
                                    variant="flat"
                                >
                                    {project.category}
                                </Chip>
                                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-brand-light text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <Card className="bg-gray-100 dark:bg-brand-gray/20 border-l-4 border-brand-gold rounded-lg shadow-none">
                                    <CardBody className="p-4">
                                        <p className="text-yellow-600 dark:text-brand-gold font-bold text-sm uppercase tracking-wider mb-1">
                                            Challenge & Impact
                                        </p>
                                        <p className="text-gray-800 dark:text-white text-sm">{project.impact}</p>
                                    </CardBody>
                                </Card>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <Chip
                                            key={t}
                                            className="border-gray-300 dark:border-brand-gray text-gray-600 dark:text-brand-light/60 font-mono text-xs"
                                            size="sm"
                                            variant="bordered"
                                        >
                                            {t}
                                        </Chip>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4">
                                    {project.github && (
                                        <Button
                                            as="a"
                                            className="text-gray-900 dark:text-white hover:text-brand-teal dark:hover:text-brand-cyan font-bold"
                                            href={project.github}
                                            rel="noopener noreferrer"
                                            startContent={<Github className="w-5 h-5" />}
                                            target="_blank"
                                            variant="light"
                                        >
                                            Code
                                        </Button>
                                    )}
                                    {project.demo && (
                                        <Button
                                            as="a"
                                            className="text-gray-900 dark:text-white hover:text-brand-teal dark:hover:text-brand-cyan font-bold"
                                            href={project.demo}
                                            rel="noopener noreferrer"
                                            startContent={<ExternalLink className="w-5 h-5" />}
                                            target="_blank"
                                            variant="light"
                                        >
                                            Demo
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
