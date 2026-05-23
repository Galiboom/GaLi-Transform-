import './globals.css';

export const metadata = {
  title: 'GaLi Transform',
  description: '多格式转换工作台',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}