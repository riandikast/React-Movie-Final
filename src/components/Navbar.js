function Navbar() {
    return (
        <div className="flex items-center justify-between px-5 md:px-10 py-3 md:py-5 absolute w-full z-10 bg-black">
            <div className="flex items-center">
                <img src="/logo.svg" alt="logo" className="w-10 h-10" />
                <h1 className="mr-10 font-bold text-lg text-white md:text-2xl ml-3 hidden sm:block">MovieList</h1>
            </div>
            <div className="relative">
                <input placeholder="What do you want to watch?" className="p-1 px-3 text-[#ffffff] rounded-md bg-transparent border-2 border-white placeholder-white w-auto md:w-[500px]" />
                <img src="/search.svg" alt="logo" className="w-4 h-4 absolute right-3 bottom-2.5" />
            </div>
        <div>
            </div>
        </div>
    )
}

export default Navbar;