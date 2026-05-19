#!/bin/bash

echo "📦 [Pre-Compact] Chuẩn bị nén bộ nhớ (Context Compaction)..."

# Dọn dẹp Next.js cache hoặc các file build tạm thời nếu có để giải phóng tài nguyên
if [ -d ".next/cache" ]; then
    echo "🗑️ Xóa Next.js cache..."
    rm -rf .next/cache
fi

# Ghi chú lại trạng thái git hiện tại để AI có thể đọc lại sau khi bị nén context
echo "📝 Đang lưu trạng thái Git hiện tại vào bộ nhớ tạm..."
git status --short > .claude/temp_git_status.txt

echo "✅ [Pre-Compact] Đã sẵn sàng để thu gọn Context!"