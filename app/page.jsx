import './globals.css'

export const metadata = {
  title: 'اكاديمية مستر مصطفى',
  description: 'منصة تعليم اللغة العربية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
