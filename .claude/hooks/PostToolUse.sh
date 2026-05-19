#!/bin/bash

# Hook này chạy sau khi AI thực thi xong một Tool (ví dụ: write_file, edit_file)
# Mục tiêu: Đảm bảo code luôn sạch sẽ và đúng format ngay lập tức.

echo "🧹 [Post-Tool] Đang dọn dẹp và format code..."

# Tuỳ chọn: Chạy Prettier hoặc Linter trên các file vừa bị thay đổi
# (Lưu ý: Chỉ nên chạy lệnh format nhanh để tránh làm AI bị treo chờ đợi)
pnpm exec prettier --write "**/*.{ts,tsx,md,json}" --loglevel warn

# Có thể bắt lỗi TypeScript nhanh ở đây nếu cần thiết
# pnpm tsc --noEmit

echo "✨ [Post-Tool] Hoàn tất!"