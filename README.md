# web_formath 🔢

Website học toán với mini-game mở khóa lời giải. Phong cách Apple Design.

## Cài đặt

```bash
# 1. Vào thư mục project
cd web_formath

# 2. Cài dependencies
npm install

# 3. Chạy dev server
npm run dev
```

Mở trình duyệt tại: **http://localhost:3000**

---

## Cấu trúc Project

```
src/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer)
│   ├── page.tsx                # Trang chủ — danh sách bài toán
│   ├── globals.css             # Apple SF Pro styles
│   └── problems/[id]/
│       └── page.tsx            # Trang chi tiết bài toán
│
├── components/
│   ├── game/
│   │   ├── GameGate.tsx        # 🔒 Gate: game → mở khóa lời giải
│   │   ├── DinoGame.tsx        # Game wrapper (engine + UI)
│   │   ├── useGameEngine.ts    # Hook: toàn bộ game logic
│   │   ├── GameCanvas.tsx      # Render scene (DOM, không dùng Canvas)
│   │   ├── GameHUD.tsx         # HUD: đếm xương rồng
│   │   ├── GameOverlay.tsx     # Màn hình idle/gameover/win
│   │   ├── PlayerCharacter.tsx # Nhân vật (ảnh avatar + pixel body)
│   │   └── CactusObstacle.tsx  # Xương rồng SVG (thường + vàng)
│   └── ui/
│       └── SolutionContent.tsx # Hiển thị lời giải theo bước
│
├── lib/
│   ├── gameConstants.ts        # Constants vật lý, tốc độ, kích thước
│   ├── storage.ts              # localStorage (hydration-safe)
│   └── problems.ts             # Dữ liệu 6 bài toán mẫu
│
└── types/
    └── index.ts                # TypeScript types
```

---

## Cách chơi Mini-game

- **Space** hoặc **↑** để nhảy
- Vượt qua **67 xương rồng thường** + **1 xương rồng vàng ⭐**
- Tổng: **68 chướng ngại vật**
- Tốc độ tăng dần theo số xương rồng đã vượt
- Sau khi thắng → lời giải được mở khóa và lưu vào localStorage

---

## Thêm bài toán mới

Chỉnh sửa file `src/lib/problems.ts`, thêm object vào mảng `PROBLEMS`:

```typescript
{
  id: 'problem-007',           // unique ID
  title: 'Tên bài toán',
  subject: 'Đại số',           // Đại số | Giải tích | Hình học
  difficulty: 'Dễ',            // Dễ | Trung bình | Khó
  tags: ['tag1', 'tag2'],
  description: 'Đề bài...',
  videoUrl: 'https://youtube.com/embed/...',  // optional
  theory: [
    { title: 'Tiêu đề', content: 'Nội dung lý thuyết' }
  ],
  solution: [
    { step: 1, title: 'Tên bước', content: 'Giải thích', formula: 'x = ...' }
  ],
}
```

---

## Đổi avatar nhân vật

Thay file `public/avatar.jpg` bằng ảnh của bạn (nên dùng ảnh vuông).

---

## Tech Stack

- **Next.js 14** App Router
- **TypeScript**
- **Tailwind CSS**
- **React Hooks** + `requestAnimationFrame`
- Không dùng Canvas, không dùng game engine ngoài
