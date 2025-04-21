export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-bold text-yellow-400">
          {/* Logo có thể là hình ảnh hoặc chỉ là tên */}
          MyPortfolio
        </div>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Introduce
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Projects
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Technology
          </a>
        </nav>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
          Contact
        </button>
      </div>
    </header>
  );
}
