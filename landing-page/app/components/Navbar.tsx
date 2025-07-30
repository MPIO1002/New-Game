export default function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-[#6b4f36]/80 shadow-lg flex justify-center py-2 px-2 mx-auto" style={{ maxWidth: '430px', width: '100%' }}>
            <div className='w-full'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <a 
                            href="https://mhgh.ggo.vn/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            <img
                                src="logo.png"
                                alt="Game Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                                loading="lazy"
                            />
                        </a>
                        <div className="flex flex-col">
                            <h1 className="text-white text-sm font-bold">
                                MỘNG HUYỄN GIANG HỒ
                            </h1>
                            <p className="text-amber-200 text-xs font-bold">
                                Tặng VIP7 vĩnh viễn
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://facebook.com/monghuyengiangho"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2"
                    >
                        <img
                            src="fb.png"
                            alt="Facebook"
                            width={32}
                            height={32}
                            className="object-contain"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}
