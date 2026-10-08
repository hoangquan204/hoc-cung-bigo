# Học Cùng Bigo (Vite)

Website trắc nghiệm địa lý dạng trò chơi – miễn phí, nhận ủng hộ tùy tâm.

## Chạy dự án
```bash
npm install
npm run dev       # chạy thử tại http://localhost:5173
npm run build     # build ra thư mục dist/
npm run preview   # xem thử bản build
```

## Cấu trúc
- `index.html` – khung trang
- `src/main.js` – logic trò chơi và giao diện
- `src/data.js` – **câu hỏi** (CATS) và **danh sách cờ** (FL)
- `src/config.js` – **thông tin ngân hàng, QR**, lời nhắn ủng hộ
- `src/flags.js` – vẽ cờ bằng SVG
- `src/style.css` – giao diện
- `public/` – file tĩnh (đặt `qr.png` ở đây, rồi gán `qr:"./qr.png"` trong config.js)

## Thêm câu hỏi
Trong `src/data.js`, thêm một dòng vào mảng `qs` của màn chơi:
`["Câu hỏi","ĐÁP ÁN ĐÚNG","sai 1","sai 2","sai 3","Thông tin thú vị"]`

## Đưa lên mạng
Sau `npm run build`, đưa thư mục `dist/` lên Netlify / Vercel / Cloudflare Pages / GitHub Pages.
