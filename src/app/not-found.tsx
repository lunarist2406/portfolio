"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center p-4 relative overflow-hidden z-50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.1 }}
          className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,179,8,0.15)]"
        >
          <AlertTriangle className="w-10 h-10 text-yellow-500" />
        </motion.div>

        <h1 className="text-8xl md:text-[150px] font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 to-yellow-600 leading-none mb-4 shadow-yellow-500/50 drop-shadow-2xl">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4">
          Không tìm thấy trang
        </h2>
        
        <p className="text-zinc-400 max-w-md mx-auto mb-10 text-sm md:text-base">
          Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không thể truy cập.
        </p>

        <Link href="/">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            <Home className="w-5 h-5" />
            Về trang chủ
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}