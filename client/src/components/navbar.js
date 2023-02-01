export default function Navbar(){
    return(
        <>
           <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <a href="#" className="font-medium">My App</a>
            <div className="hidden md:flex">
                <a href="#" className="px-4 py-2 mr-4">Home</a>
                <a href="#" className="px-4 py-2 mr-4">About</a>
                <a href="#" className="px-4 py-2">Contact</a>
            </div>
            <button className="md:hidden p-1 border border-white rounded-full">
                <svg className="fill-current text-white" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
            </button>
            </nav>

        
        </>
    )
}