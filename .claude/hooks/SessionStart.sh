#!/bin/bash

echo "🚀 [AI Session Started] Khởi tạo môi trường làm việc..."

# Kiểm tra pnpm đã được cài đặt chưa
if ! command -v pnpm &> /dev/null
then
    echo "❌ Lỗi: pnpm chưa được cài đặt. Vui lòng cài đặt pnpm trước khi tiếp tục."
    exit 1
fi

echo "✅ pnpm version: $(pnpm --version)"
echo "✅ Node.js version: $(node --version)"
echo "---------------------------------------------------"
echo "🎯 Context: Job-Hunting Developer Portfolio (en/vi)"
echo "🛠️ Tech Stack: Next.js 15, HeroUI 2.x, Framer Motion"
echo "---------------------------------------------------"
echo "Sẵn sàng nhận lệnh!"