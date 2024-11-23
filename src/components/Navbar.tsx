const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center space-x-2">
        <img src="https://framerusercontent.com/images/dvrschHGP374SPK1HpDjWPcdFEk.png?scale-down-to=512" alt="Easlo" className='w-8 h-8 shadow-lg rounded-full' />
        <span className="text-xl font-bold">Easlo</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors">Templates</a>
        <a href="#" className="text-gray-600 hover:text-black transition-colors">Second Brain</a>
      </div>
    </nav>
  );
}

export default Navbar;