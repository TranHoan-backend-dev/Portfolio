"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { ArrowRight, Code, Terminal, Server, Cpu } from "lucide-react";

const heroImg = "/image.png";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 relative z-20 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
            >
              <Chip
                className="bg-gray-200/50 dark:bg-brand-gray/30 border-gray-300 dark:border-brand-gray backdrop-blur-sm px-4 py-4 text-gray-700 dark:text-brand-light font-mono uppercase tracking-wider"
                color="primary"
                startContent={
                  <Terminal className="w-4 h-4 text-brand-teal dark:text-brand-cyan mr-1" />
                }
                variant="dot"
              >
                Backend Systems Architect
              </Chip>
            </motion.div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-gray-900 dark:text-white">
              TRẦN XUÂN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal dark:from-brand-cyan via-blue-500 to-purple-600 animate-gradient-x">
                HOÀN
              </span>
            </h1>

            <div className="font-display font-bold text-2xl sm:text-3xl text-gray-600 dark:text-brand-light/80">
              IT <span className="text-brand-gold">x</span> BACKEND{" "}
              <span className="text-brand-teal dark:text-brand-cyan">x</span> SCALABILITY
            </div>

            <p className="font-sans text-lg sm:text-xl text-gray-600 dark:text-brand-light max-w-lg leading-relaxed">
              Tôi xây dựng các hệ thống{" "}
              <span className="text-brand-teal dark:text-brand-cyan font-bold">Backend</span> hiệu
              năng cao và có khả năng mở rộng. Chuyên sâu về{" "}
              <span className="text-brand-gold font-bold">
                Java & Spring Boot
              </span>{" "}
              để giải quyết các bài toán kỹ thuật phức tạp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gray-900 text-white dark:bg-white dark:text-brand-dark font-bold text-lg px-8 py-7 hover:bg-brand-teal dark:hover:bg-brand-cyan transition-all group"
                endContent={
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                }
                radius="sm"
                size="lg"
                onPress={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Dự Án Đã Làm
              </Button>

              <Button
                className="border-gray-300 text-gray-900 dark:border-brand-gray dark:text-white font-medium text-lg px-8 py-7 hover:border-brand-teal hover:text-brand-teal dark:hover:border-brand-cyan dark:hover:text-brand-cyan transition-all backdrop-blur-sm bg-gray-100/50 dark:bg-brand-dark/20"
                radius="sm"
                size="lg"
                variant="bordered"
                onPress={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Liên Hệ
              </Button>
            </div>

            {/* Stats/Badges */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-gray-200 dark:border-brand-gray/30">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand-teal/10 dark:bg-brand-cyan/10 rounded-lg">
                  <Server className="text-brand-teal dark:text-brand-cyan w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-display font-bold text-gray-900 dark:text-white">
                    Spring Boot
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-brand-light font-mono uppercase">
                    Microservices / Security
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand-gold/10 rounded-lg">
                  <Cpu className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-display font-bold text-gray-900 dark:text-white">
                    System Design
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-brand-light font-mono uppercase">
                    Scalability / Patterns
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Code className="text-purple-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-display font-bold text-gray-900 dark:text-white">
                    Modern Web
                  </p>
                  <p className="text-[10px] text-gray-500 dark:text-brand-light font-mono uppercase">
                    React / Next.js Integration
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Portrait Image with 3D Effects */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 relative w-full max-w-lg mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Background Glows */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-brand-cyan/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full" />

            {/* Image Container */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              className="relative z-10 w-4/5 mx-auto lg:w-3/4 aspect-[3/4]"
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Frame Border */}
              <div className="absolute -inset-4 border-2 border-gray-200 dark:border-brand-gray/30 rounded-3xl z-0 translate-x-4 translate-y-4" />

              {/* Main Image with HeroUI Image for lazy loading and zoom effect */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-gray-300 dark:border-brand-gray/50 shadow-2xl shadow-gray-300/50 dark:shadow-black/50 bg-gray-100 dark:bg-brand-gray">
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark via-transparent to-transparent opacity-40 z-10" />
                <Image
                  isZoomed
                  alt="Trần Xuân Hoàn Portrait"
                  className="w-full h-full object-cover"
                  classNames={{
                    wrapper: "h-full w-full",
                    img: "h-full w-full",
                  }}
                  src={heroImg}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-xl border border-brand-gold/30 p-4 rounded-xl shadow-xl z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-brand-light font-mono">STATUS</p>
                    <p className="text-gray-900 dark:text-white font-bold">
                      Available for Projects
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
