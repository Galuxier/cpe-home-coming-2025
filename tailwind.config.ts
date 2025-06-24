// tailwind.config.ts - Improved with Better Color Contrast
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                // พื้นหลัง - เข้มขึ้นเพื่อให้ข้อความสว่างดูชัดเจนขึ้น
                'brand-dark': '#0a0a0a',          // พื้นหลังดำเข้มกว่าเดิม
                
                // สีแดงสำหรับ Alumni - จางปกติ สดใสตอน hover
                'brand-light-red': '#DC2626',      // แดงจางสำหรับสถานะปกติ
                'brand-vivid-red': '#EF4444',     // แดงสดใสสำหรับ hover
                
                // สีทองสำหรับ Students - จางปกติ สดใสตอน hover
                'brand-light-gold': '#E5B91E',    // ทองจางสำหรับสถานะปกติ
                'brand-bright-gold': '#FCD34D',   // ทองสว่างสำหรับ hover
                'brand-gold': '#D4AF37',          // ทองเข้มสำหรับ accent
                
                // ข้อความ - ความตัดกันที่ดี
                'brand-light': '#FFFFFF',         // ข้อความสีขาวบริสุทธิ์
                'brand-light-gray': '#E5E7EB',    // เทาอ่อนสำหรับข้อความรอง
                'brand-gray': '#9CA3AF',          // เทากลางสำหรับรายละเอียด
            },
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            dropShadow: {
                'gold': '0 4px 8px rgba(252, 211, 77, 0.3)',
                'red': '0 4px 8px rgba(239, 68, 68, 0.3)',
            }
        },
    },
    plugins: [],
}
export default config