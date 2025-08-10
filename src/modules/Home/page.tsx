'use client';
import Image from 'next/image';
import { Button } from '@/core/adnui/components/ui/button';
import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const HomePage = () => {
  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center py-16 px-4 sm:py-20 sm:px-6 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          NOVA-X
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-base sm:text-lg text-gray-300">
          Nova-X là nền tảng giao tiếp thế hệ mới, lấy cảm hứng từ Discord, 
          kết hợp chat, voice, video và cộng đồng trong một ứng dụng duy nhất.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg w-full sm:w-auto">
            Bắt đầu ngay
          </Button>
          <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg text-base sm:text-lg w-full sm:w-auto">
            Tìm hiểu thêm
          </Button>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Tính năng nổi bật</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            { title: 'Chat Realtime', color: 'purple', desc: 'Nhắn tin siêu nhanh, hỗ trợ emoji, GIF, và chia sẻ file không giới hạn.' },
            { title: 'Voice & Video', color: 'pink', desc: 'Trò chuyện giọng nói và video call chất lượng cao, ổn định.' },
            { title: 'Cộng đồng', color: 'blue', desc: 'Tạo và quản lý server của riêng bạn, kết nối mọi người cùng sở thích.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className={`p-6 bg-[#15151c] rounded-xl shadow-lg hover:shadow-${item.color}-500/20 transition`}
              variants={fadeInUp}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-${item.color}-400`}>{item.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Chat Preview */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <Image src="/images/chat-preview.png" alt="Chat Preview" width={600} height={400} className="rounded-lg shadow-lg w-full h-auto"/>
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Giao diện hiện đại & dễ dùng</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Nova-X được thiết kế để mọi người có thể bắt đầu trò chuyện ngay lập tức mà không cần học cách sử dụng.
              Tất cả tính năng đều trực quan và đẹp mắt.
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600 w-full sm:w-auto">Xem chi tiết</Button>
          </div>
        </div>
      </motion.section>

      {/* Video Call */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Voice & Video mượt mà</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Không chỉ chat, Nova-X mang đến trải nghiệm voice & video chất lượng cao,
              với độ trễ thấp và hỗ trợ chia sẻ màn hình để làm việc nhóm hoặc giải trí.
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 w-full sm:w-auto">Bắt đầu gọi ngay</Button>
          </div>
          <Image src="/images/video-call.png" alt="Video Call" width={600} height={400} className="rounded-lg shadow-lg w-full h-auto"/>
        </div>
      </motion.section>

      {/* Download */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Tải Nova-X ngay hôm nay</h2>
        <p className="max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-white/90 text-sm sm:text-base">
          Hỗ trợ Windows, macOS, iOS và Android. Bắt đầu kết nối với bạn bè và cộng đồng chỉ trong vài giây.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          {['Windows', 'macOS', 'iOS', 'Android'].map((os) => (
            <Button key={os} className="bg-white text-purple-600 hover:bg-gray-200 w-full sm:w-auto">
              Tải cho {os}
            </Button>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0f0f14]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Câu hỏi thường gặp</h2>
          <div className="space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-purple-400">Nova-X có miễn phí không?</h4>
              <p className="text-gray-400 text-sm sm:text-base">Có, Nova-X miễn phí cho tất cả người dùng. Chúng tôi cũng có gói Premium với nhiều tính năng nâng cao.</p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-pink-400">Tôi có thể tạo server riêng không?</h4>
              <p className="text-gray-400 text-sm sm:text-base">Hoàn toàn có thể. Bạn có thể tạo server riêng tư hoặc công khai tùy nhu cầu.</p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-blue-400">Ứng dụng có bảo mật không?</h4>
              <p className="text-gray-400 text-sm sm:text-base">Chúng tôi sử dụng mã hóa đầu cuối và xác thực hai bước để bảo vệ dữ liệu của bạn.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0b0b0f] py-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Nova-X. Tất cả quyền được bảo lưu.
      </footer>
    </div>
  );
};

export default HomePage;
