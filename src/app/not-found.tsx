'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/core/adnui/components/ui/button';
import { Home, AlertTriangle } from 'lucide-react';

export default function Custom404() {
  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        <AlertTriangle className="w-20 h-20 text-pink-500 mb-6" />
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="mt-4 text-gray-400 max-w-md">
          Oops! Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/">
            <Button className="bg-purple-500 hover:bg-purple-600 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Quay lại trang chủ
            </Button>
          </Link>
          <Link href="/support">
            <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
              Liên hệ hỗ trợ
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-6 text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Nova-X
      </motion.div>
    </div>
  );
}
