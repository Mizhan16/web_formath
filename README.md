<<<<<<< HEAD
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
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> e0778f490ec237ce2b20a849c94412b454e5fb66
