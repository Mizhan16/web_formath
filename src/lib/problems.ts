import type { Problem } from '@/types'

export const PROBLEMS: Problem[] = [
  {
    id: 'problem-001',
    title: 'Phương trình bậc hai',
    subject: 'Đại số',
    difficulty: 'Dễ',
    tags: ['Phương trình', 'Bậc hai', 'Lớp 9'],
    description:
      'Giải phương trình: x² - 5x + 6 = 0. Tìm tất cả nghiệm thực của phương trình và kiểm tra lại kết quả.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    theory: [
      {
        title: 'Phương trình bậc hai tổng quát',
        content:
          'Phương trình bậc hai có dạng ax² + bx + c = 0 (a ≠ 0). Để giải, ta tính biệt thức Δ = b² - 4ac.',
      },
      {
        title: 'Công thức nghiệm',
        content:
          'Nếu Δ > 0: phương trình có hai nghiệm phân biệt x₁,₂ = (−b ± √Δ) / 2a.\nNếu Δ = 0: phương trình có nghiệm kép x = −b / 2a.\nNếu Δ < 0: phương trình vô nghiệm thực.',
      },
    ],
    solution: [
      {
        step: 1,
        title: 'Xác định hệ số',
        content: 'Từ phương trình x² − 5x + 6 = 0, ta có: a = 1, b = −5, c = 6.',
      },
      {
        step: 2,
        title: 'Tính biệt thức Δ',
        content: 'Δ = b² − 4ac = (−5)² − 4(1)(6) = 25 − 24 = 1 > 0',
        formula: 'Δ = (-5)² - 4·1·6 = 1',
      },
      {
        step: 3,
        title: 'Tính nghiệm',
        content: 'Vì Δ = 1 > 0, phương trình có hai nghiệm phân biệt:',
        formula: 'x₁ = (5 + 1)/2 = 3   |   x₂ = (5 - 1)/2 = 2',
      },
      {
        step: 4,
        title: 'Kết luận',
        content: 'Phương trình có hai nghiệm x₁ = 3 và x₂ = 2. Kiểm tra: (x−2)(x−3) = x²−5x+6 ✓',
      },
    ],
  },
  {
    id: 'problem-002',
    title: 'Giới hạn hàm số',
    subject: 'Giải tích',
    difficulty: 'Trung bình',
    tags: ['Giới hạn', 'Vô cực', 'Lớp 11'],
    description:
      'Tính giới hạn: lim(x→2) (x² − 4) / (x − 2). Giải thích tại sao không thể thay trực tiếp x = 2.',
    theory: [
      {
        title: 'Dạng vô định 0/0',
        content:
          'Khi thay x = 2 trực tiếp, ta nhận được 0/0 — dạng vô định. Cần biến đổi đại số để rút gọn.',
      },
      {
        title: 'Kỹ thuật phân tích nhân tử',
        content:
          'Phân tích tử số thành nhân tử, sau đó rút gọn nhân tử chung với mẫu số (x−2).',
      },
    ],
    solution: [
      {
        step: 1,
        title: 'Nhận dạng dạng vô định',
        content: 'Thay x = 2: (4−4)/(2−2) = 0/0 → dạng vô định, cần biến đổi.',
      },
      {
        step: 2,
        title: 'Phân tích tử số',
        content: 'x² − 4 = (x − 2)(x + 2)',
        formula: 'x² - 4 = (x - 2)(x + 2)',
      },
      {
        step: 3,
        title: 'Rút gọn',
        content: 'Với x ≠ 2, ta rút gọn (x−2)/(x−2) = 1:',
        formula: '(x² - 4)/(x - 2) = (x + 2)',
      },
      {
        step: 4,
        title: 'Tính giới hạn',
        content: 'Sau khi rút gọn, thay x → 2:',
        formula: 'lim(x→2) (x + 2) = 2 + 2 = 4',
      },
    ],
  },
  {
    id: 'problem-003',
    title: 'Tích phân xác định',
    subject: 'Giải tích',
    difficulty: 'Khó',
    tags: ['Tích phân', 'Diện tích', 'Lớp 12'],
    description:
      'Tính tích phân ∫₀² (x² + 2x) dx và tìm diện tích hình phẳng giới hạn bởi đồ thị hàm số và trục Ox.',
    theory: [
      {
        title: 'Nguyên hàm',
        content:
          'Để tính tích phân xác định, trước tiên tìm nguyên hàm F(x) của f(x) = x² + 2x.',
      },
      {
        title: 'Công thức Newton-Leibniz',
        content: '∫ₐᵇ f(x)dx = F(b) − F(a), trong đó F là một nguyên hàm bất kỳ của f.',
      },
    ],
    solution: [
      {
        step: 1,
        title: 'Tìm nguyên hàm',
        content: 'Tính nguyên hàm F(x) của f(x) = x² + 2x:',
        formula: 'F(x) = x³/3 + x²',
      },
      {
        step: 2,
        title: 'Áp dụng Newton-Leibniz',
        content: 'Tính F(2) và F(0):',
        formula: 'F(2) = 8/3 + 4 = 20/3   |   F(0) = 0',
      },
      {
        step: 3,
        title: 'Tính tích phân',
        content: 'Kết quả cuối cùng:',
        formula: '∫₀² (x² + 2x)dx = F(2) - F(0) = 20/3',
      },
      {
        step: 4,
        title: 'Nhận xét diện tích',
        content:
          'Vì f(x) = x² + 2x ≥ 0 trên [0, 2], diện tích hình phẳng chính là giá trị tích phân = 20/3 (đơn vị diện tích).',
      },
    ],
  },
  {
    id: 'problem-004',
    title: 'Hệ phương trình',
    subject: 'Đại số',
    difficulty: 'Trung bình',
    tags: ['Hệ phương trình', 'Thế', 'Lớp 10'],
    description:
      'Giải hệ phương trình: { 2x + y = 7 và x − y = 2 }. Tìm nghiệm (x, y) và biểu diễn lên hệ trục tọa độ.',
    theory: [
      {
        title: 'Phương pháp thế',
        content:
          'Từ một phương trình, biểu diễn một ẩn theo ẩn kia, rồi thế vào phương trình còn lại để tìm nghiệm.',
      },
      {
        title: 'Phương pháp cộng',
        content: 'Cộng hoặc trừ hai phương trình để triệt tiêu một ẩn, giải phương trình một ẩn còn lại.',
      },
    ],
    solution: [
      {
        step: 1,
        title: 'Dùng phương pháp cộng',
        content: 'Cộng hai phương trình vế với vế:',
        formula: '(2x + y) + (x − y) = 7 + 2  →  3x = 9',
      },
      {
        step: 2,
        title: 'Tính x',
        content: 'Chia cả hai vế cho 3:',
        formula: 'x = 3',
      },
      {
        step: 3,
        title: 'Tính y',
        content: 'Thế x = 3 vào phương trình thứ hai:',
        formula: '3 - y = 2  →  y = 1',
      },
      {
        step: 4,
        title: 'Nghiệm',
        content: 'Hệ có nghiệm duy nhất (x, y) = (3, 1). Kiểm tra: 2(3)+1=7 ✓ và 3−1=2 ✓',
      },
    ],
  },
  {
    id: 'problem-005',
    title: 'Tam giác và đường cao',
    subject: 'Hình học',
    difficulty: 'Khó',
    tags: ['Tam giác', 'Đường cao', 'Diện tích', 'Lớp 10'],
    description:
      'Cho tam giác ABC có AB = 5, AC = 7, BC = 8. Tính diện tích tam giác và chiều cao AH từ A xuống BC.',
    theory: [
      {
        title: 'Công thức Heron',
        content:
          'Với nửa chu vi p = (a+b+c)/2, diện tích S = √(p(p−a)(p−b)(p−c)).',
      },
      {
        title: 'Diện tích và đường cao',
        content: 'S = (1/2) × BC × AH, suy ra AH = 2S / BC.',
      },
    ],
    solution: [
      {
        step: 1,
        title: 'Tính nửa chu vi',
        content: 'p = (5 + 7 + 8) / 2 = 10',
        formula: 'p = (5 + 7 + 8) / 2 = 10',
      },
      {
        step: 2,
        title: 'Tính diện tích theo Heron',
        content: 'Áp dụng công thức Heron:',
        formula: 'S = √(10 · 5 · 3 · 2) = √300 = 10√3',
      },
      {
        step: 3,
        title: 'Tính đường cao AH',
        content: 'S = (1/2)·BC·AH, suy ra:',
        formula: 'AH = 2S / BC = 2·10√3 / 8 = 5√3/2 ≈ 4.33',
      },
      {
        step: 4,
        title: 'Kết luận',
        content: `Diện tích tam giác ABC = 10√3 ≈ 17.32 (đvdt). Đường cao AH = 5√3/2 ≈ 4.33 (đvđd).`,
      },
    ],
  },
  {
    id: 'problem-006',
    title: 'Đạo hàm hàm hợp',
    subject: 'Giải tích',
    difficulty: 'Trung bình',
    tags: ['Đạo hàm', 'Hàm hợp', 'Chain Rule', 'Lớp 11'],
    description:
      'Tính đạo hàm của hàm số y = sin(x² + 1). Vận dụng quy tắc đạo hàm hàm hợp (chain rule).',
    theory: [
      {
        title: 'Quy tắc hàm hợp (Chain Rule)',
        content:
          'Nếu y = f(g(x)), thì y\' = f\'(g(x)) · g\'(x). Đạo hàm "ngoài nhân đạo hàm trong".',
      },
    ],
    solution: [
      {
        step: 1,
        title: 'Nhận dạng hàm hợp',
        content: 'Đặt u = x² + 1, thì y = sin(u). Đây là hàm hợp y = f(g(x)) với f(u) = sin(u) và g(x) = x² + 1.',
      },
      {
        step: 2,
        title: 'Đạo hàm từng phần',
        content: 'Tính f\'(u) và g\'(x):',
        formula: 'f\'(u) = cos(u)   |   g\'(x) = 2x',
      },
      {
        step: 3,
        title: 'Áp dụng Chain Rule',
        content: 'y\' = f\'(g(x)) · g\'(x):',
        formula: 'y\' = cos(x² + 1) · 2x = 2x·cos(x² + 1)',
      },
    ],
  },
  {
    id: 'problem-007',
    title: 'Xác suất Sở Sơn La',
    subject: 'Đại số',
    difficulty: 'Khó',
    tags: ['Xác suất', 'Lớp 12'],
    description: 'Lười',
    videoUrl: 'https://drive.google.com/file/d/1JgNiwpKW8SCmha6whsIKFwcow6pqSWyC/preview',
    theory: [
      {
        title: 'Lười',
        content: 'Lười',
      },
    ],
    solution: [
      {
        step: 1,
        title: 'Lười',
        content: 'Lười',
      },
      {
        step: 2,
        title: 'Lười',
        content: 'Lười',
      },
      {
        step: 3,
        title: 'Lười',
        content: 'Xem video',
      },
    ],
  },
]
