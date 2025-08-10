"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/core/adnui/components/ui/button";
import BlinkingStar from "@/core/ui/BlinkingStar/BlinkingStar";
import CursorGlow from "@/core/ui/CursorGlow/CursorGlow";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SignInPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row bg-[#0b0b0f]">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 animate-pulse blur-3xl" />

      {/* Left side - Form */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-12">
        <motion.div
          className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center items-center gap-2 mb-6"
            variants={itemVariants}
          >
            <Link
              href="/"
              className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text font-extrabold text-3xl flex items-center gap-1"
            >
              Nova-X
              <BlinkingStar style={{ fontSize: "1.4rem" }} />
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text"
            variants={itemVariants}
          >
            Đăng nhập
          </motion.h1>
          <motion.p
            className="text-center text-gray-400 mb-8 text-sm"
            variants={itemVariants}
          >
            Chào mừng quay lại! Kết nối với bạn bè ngay bây giờ.
          </motion.p>

          {/* Form */}
      

          <motion.p
            className="text-center text-gray-400 text-sm mt-6"
            variants={itemVariants}
          >
            Chưa có tài khoản?{" "}
            <Link href="/signup" className="text-pink-400 hover:underline">
              Đăng ký ngay
            </Link>
          </motion.p>
        </motion.div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">
        <Image
          src="/images/chat-preview.png"
          alt="Login Illustration"
          width={600}
          height={600}
          className="relative z-10 rounded-2xl shadow-2xl"
        />
        <BlinkingStar style={{ position: "absolute", top: "15%", left: "20%", fontSize: "1.2rem" }} />
        <BlinkingStar style={{ position: "absolute", bottom: "20%", right: "25%", fontSize: "1.4rem" }} />
      </div>

      {/* Cursor Glow */}
      <CursorGlow size={200} color="138, 92, 255" blur={50} opacity={0.25} />
    </div>
  );
}

export default SignInPage;