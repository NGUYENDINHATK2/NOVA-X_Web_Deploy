"use client";
import Image from "next/image";
import { Button } from "@/core/adnui/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CursorGlow from "@/core/ui/CursorGlow/CursorGlow";
import BlinkingStar from "@/core/ui/BlinkingStar/BlinkingStar";
import Link from "next/link";
import { useLove } from "@/core/ui";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const navItems = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Tính năng", href: "#features" },
  { label: "Video Call", href: "#videocall" },
  { label: "Tải xuống", href: "#download" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0b0b0f]/90 backdrop-blur-md z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <Link
          href="#hero"
          className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text font-extrabold text-2xl flex items-center gap-1"
          onClick={() => setMobileOpen(false)}
        >
          Nova-X
          <BlinkingStar style={{ fontSize: "1.2rem" }} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-purple-400 transition-colors duration-300 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <Link href="/signin">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm">
              Đăng nhập
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-700/30 transition"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
        >
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>{mobileOpen ? "Close menu" : "Open menu"}</title>
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0b0b0f] border-t border-gray-800">
          <ul className="flex flex-col py-4 space-y-2 px-6 text-gray-300">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block py-2 hover:text-purple-400 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/signin">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Đăng nhập
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const HomePage = () => {
  const { show } = useLove();

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className="bg-[#0b0b0f] text-white min-h-screen flex flex-col pt-16"
      onClick={(e) => {
        show(e.clientX, e.clientY);
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="flex flex-col items-center justify-center py-16 px-4 sm:py-20 sm:px-6 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight relative inline-block"
          variants={itemVariants}
        >
          Nova-X
          <BlinkingStar
            style={{ position: "absolute", top: "-1.5rem", left: "-1rem" }}
          />
          <BlinkingStar
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "-1.5rem",
              fontSize: "1.5rem",
            }}
          />
          <BlinkingStar
            style={{
              position: "absolute",
              bottom: "-1.2rem",
              left: "20%",
              fontSize: "1rem",
            }}
          />
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl font-semibold mt-2 mb-6 text-purple-400"
          variants={itemVariants}
        >
          Giao tiếp mọi lúc mọi nơi, kết nối không giới hạn
        </motion.h2>
        <motion.p
          className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-base sm:text-lg text-gray-300"
          variants={itemVariants}
        >
          Nova-X là nền tảng giao tiếp thế hệ mới, kết
          hợp chat, voice, video và cộng đồng trong một ứng dụng duy nhất.
        </motion.p>
        <motion.div
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg w-full sm:w-auto">
            Bắt đầu ngay
          </Button>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg text-base sm:text-lg w-full sm:w-auto"
          >
            Tìm hiểu thêm
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12"
          variants={itemVariants}
        >
          Tính năng nổi bật
        </motion.h2>
        <motion.div
          className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12"
          variants={containerVariants}
        >
          {[
            {
              title: "Chat Realtime",
              color: "purple",
              desc: "Nhắn tin siêu nhanh, hỗ trợ emoji, GIF, và chia sẻ file không giới hạn.",
            },
            {
              title: "Voice & Video",
              color: "pink",
              desc: "Trò chuyện giọng nói và video call chất lượng cao, ổn định.",
            },
            {
              title: "Cộng đồng",
              color: "blue",
              desc: "Tạo và quản lý server của riêng bạn, kết nối mọi người cùng sở thích.",
            },
            {
              title: "Bảo mật nâng cao",
              color: "green",
              desc: "Mã hóa đầu cuối và xác thực hai bước giúp dữ liệu bạn luôn được bảo vệ tuyệt đối.",
            },
            {
              title: "Tùy chỉnh giao diện",
              color: "yellow",
              desc: "Chọn theme tối hoặc sáng, điều chỉnh font chữ và layout theo phong cách riêng.",
            },
            {
              title: "Tích hợp bot thông minh",
              color: "teal",
              desc: "Bot tự động giúp quản lý server, gửi thông báo và thêm nhiều tiện ích thú vị.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`p-6 bg-[#15151c] rounded-xl shadow-lg hover:shadow-${item.color}-500/20 transition`}
              variants={itemVariants}
            >
              <h3
                className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-${item.color}-400`}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {/* Chat Preview */}
      <motion.section
        id="chatpreview"
        className="py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Image
              src="/images/chat-preview.png"
              alt="Chat Preview"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Giao diện hiện đại & dễ dùng
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Nova-X được thiết kế để mọi người có thể bắt đầu trò chuyện ngay
              lập tức mà không cần học cách sử dụng. Tất cả tính năng đều trực
              quan và đẹp mắt.
            </p>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Giao diện Nova-X tối ưu cho mọi thiết bị, từ điện thoại đến
              desktop. Các kênh chat được phân loại rõ ràng, bạn dễ dàng theo
              dõi và tham gia cuộc trò chuyện nhóm hay cá nhân một cách thuận
              tiện.
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">
              Xem chi tiết
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Video Call Section */}
      <motion.section
        id="videocall"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={containerVariants}
        >
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Voice & Video mượt mà
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Không chỉ chat, Nova-X mang đến trải nghiệm voice & video chất
              lượng cao, với độ trễ thấp và hỗ trợ chia sẻ màn hình để làm việc
              nhóm hoặc giải trí.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-4 text-sm sm:text-base">
              <li>
                Chất lượng âm thanh, video HD mượt mà, giảm thiểu lag và giật.
              </li>
              <li>
                Hỗ trợ gọi nhóm lên tới 50 người với tùy chọn quản lý người tham
                gia.
              </li>
              <li>
                Chia sẻ màn hình, bảng trắng trực tuyến giúp làm việc nhóm hiệu
                quả.
              </li>
            </ul>
            <Button className="bg-pink-500 hover:bg-pink-600 w-full sm:w-auto">
              Bắt đầu gọi ngay
            </Button>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Image
              src="/images/video-call.png"
              alt="Video Call"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Download Section */}
      <motion.section
        id="download"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6"
          variants={itemVariants}
        >
          Tải Nova-X ngay hôm nay
        </motion.h2>
        <motion.p
          className="max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-white/90 text-sm sm:text-base"
          variants={itemVariants}
        >
          Hỗ trợ Windows, macOS, iOS và Android. Bắt đầu kết nối với bạn bè và
          cộng đồng chỉ trong vài giây.
        </motion.p>
        <motion.p
          className="max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-white/90 text-sm sm:text-base"
          variants={itemVariants}
        >
          Nova-X hỗ trợ Windows 10 trở lên, macOS Catalina trở lên, iOS 13 trở
          lên và Android 8 trở lên. Tải ứng dụng phù hợp và trải nghiệm các tính
          năng độc đáo của chúng tôi trên mọi thiết bị bạn yêu thích.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          variants={itemVariants}
        >
          {["Windows", "macOS", "iOS", "Android"].map((os) => (
            <Button
              key={os}
              className="bg-white text-purple-600 hover:bg-gray-200 w-full sm:w-auto"
            >
              Tải cho {os}
            </Button>
          ))}
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="max-w-4xl mx-auto" variants={containerVariants}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center"
            variants={itemVariants}
          >
            Câu hỏi thường gặp
          </motion.h2>
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-semibold text-purple-400">
                Nova-X có miễn phí không?
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Có, Nova-X miễn phí cho tất cả người dùng. Chúng tôi cũng có gói
                Premium với nhiều tính năng nâng cao.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-semibold text-pink-400">
                Tôi có thể tạo server riêng không?
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Hoàn toàn có thể. Bạn có thể tạo server riêng tư hoặc công khai
                tùy nhu cầu.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                Ứng dụng có bảo mật không?
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Chúng tôi sử dụng mã hóa đầu cuối và xác thực hai bước để bảo vệ
                dữ liệu của bạn.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-semibold text-green-400">
                Nova-X có hỗ trợ đa ngôn ngữ không?
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Có, Nova-X hỗ trợ nhiều ngôn ngữ phổ biến và liên tục cập nhật
                để phục vụ cộng đồng toàn cầu.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-base sm:text-lg font-semibold text-yellow-400">
                Tôi có thể đồng bộ dữ liệu giữa các thiết bị không?
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Nova-X đồng bộ tin nhắn, cài đặt và lịch sử cuộc gọi tự động
                trên tất cả thiết bị của bạn, giúp bạn không bỏ lỡ bất kỳ cuộc
                trò chuyện nào.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0b0b0f] py-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Nova-X. Tất cả quyền được bảo lưu.
      </footer>
      <CursorGlow size={180} color="138, 92, 255" blur={48} opacity={0.28} />
    </div>
  );
};

export default HomePage;
