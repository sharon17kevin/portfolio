const NavBar = () => {
  return (
    <nav className="w-full bg-primary text-black">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className=" flex h-16 justify-between">
          <div className=" flex items-center">
            <span
              className={`ml-3 text-xl font-ebgaramond font-semibold`}
            >
              Sharon-Kevin
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className=" hidden md:flex flex-1 justify-around items-center">
            <div className=" space-x-10 font-roboto text-sm">
              <button className="bg-gray-200">About Me</button>
              <button className="bg-blue-200">Interests</button>
              <button className="bg-yellow-300">Info</button>
              <button className="bg-white">Contacts</button>
            </div>
          </div>
          <div className="w-24"></div>

          {/* Mobile menu button */}
          {/* <div className="md:hidden flex">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
