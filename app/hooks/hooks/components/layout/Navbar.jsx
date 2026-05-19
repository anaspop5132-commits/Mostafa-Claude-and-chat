export default function Navbar() {
  return (
    <nav className="w-full h-16 border-b bg-white flex items-center justify-between px-6">
      <h1 className="font-bold text-xl">
        اكاديمية مستر مصطفى
      </h1>

      <div className="flex gap-3">
        <button>تسجيل الدخول</button>
        <button>إنشاء حساب</button>
      </div>
    </nav>
  )
}
