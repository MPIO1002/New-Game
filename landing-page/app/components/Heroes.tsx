"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroes = [
    {
        name: "text-hang-vu.png",
        avatar: "avatar-hang-vu.png",
        img: "hang-vu.png",
    },
    {
        name: "text-yen-nam-thien.png",
        avatar: "avatar-yen-nam-thien.png",
        img: "yen-nam-thien.png",
    },
    {
        name: "text-tieu-ngu-nhi.png",
        avatar: "avatar-tieu-ngu-nhi.png",
        img: "tieu-ngu-nhi.png",
    },
    {
        name: "text-tan-thuy-hoang.png",
        avatar: "avatar-tan-thuy-hoang.png",
        img: "tan-thuy-hoang.png",
    },
    {
        name: "text-ta-hieu-phong.png",
        avatar: "avatar-ta-hieu-phong.png",
        img: "ta-hieu-phong.png",
    },
];

export default function Heroes() {
    const [current, setCurrent] = useState(0);
    const [anim, setAnim] = useState(false);

    const handleSelect = (idx: number) => {
        if (idx === current) return;
        setAnim(false);
        setTimeout(() => {
            setCurrent(idx);
            setAnim(true);
        }, 100);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnim(false);
            setTimeout(() => {
                setCurrent((prev) => (prev === heroes.length - 1 ? 0 : prev + 1));
                setAnim(true);
            }, 100);
        }, 5000);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div className="relative w-full max-w-[430px] mx-auto min-h-[260px] flex items-center justify-center mt-5">
            {/* Avatars list absolute left, 2 columns */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 h-[260px] justify-center">
                <div className="flex flex-row -gap-5 items-center justify-center">
                    {/* Column 1: 3 avatars */}
                    <div className="flex flex-col -gap-5 items-center justify-center">
                        {heroes.slice(0, 3).map((hero, idx) => (
                            <button
                                key={hero.avatar}
                                className={`rounded-full p-1 transition-all duration-300 cursor-pointer ${current === idx ? '' : 'opacity-70 hover:opacity-100'}`}
                                onClick={() => handleSelect(idx)}
                            >
                                <Image
                                    src={`/` + hero.avatar}
                                    alt={hero.name}
                                    width={56}
                                    height={56}
                                    className="rounded-full object-cover"
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>
                    {/* Column 2: 2 avatars */}
                    <div className="flex flex-col -gap-5 items-center justify-center">
                        {heroes.slice(3).map((hero, idx) => (
                            <button
                                key={hero.avatar}
                                className={`rounded-full p-1 transition-all duration-300 cursor-pointer ${current === idx + 3 ? '' : 'opacity-70 hover:opacity-100'}`}
                                onClick={() => handleSelect(idx + 3)}
                            >
                                <Image
                                    src={`/` + hero.avatar}
                                    alt={hero.name}
                                    width={56}
                                    height={56}
                                    className="rounded-full object-cover"
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* Main hero display centered */}
            <div className="flex flex-col items-center justify-center mx-auto">
                <div className={`w-full flex justify-center items-center transition-transform duration-500 ${anim ? 'animate-slide-in' : ''} max-w-[400px] max-h-[400px]`} key={heroes[current].img} style={{ minHeight: '350px', height: '350px' }}>
                    <Image
                        src={`/` + heroes[current].img}
                        alt="Hero"
                        width={430}
                        height={430}
                        className="object-contain w-full h-auto mt-8 max-w-[430px] max-h-[430px]"
                        style={{ maxWidth: '430px', maxHeight: '430px', minHeight: '430px' }}
                        loading="lazy"
                    />
                </div>
                <div className="-mt-15 flex justify-center w-full">
                    <Image
                        src={`/` + heroes[current].name}
                        alt="Hero Name"
                        width={200}
                        height={40}
                        className="object-contain w-full h-auto"
                        style={{ maxWidth: '200px' }}
                        loading="lazy"
                    />
                </div>
            </div>
            <style jsx>{`
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.5s;
        }
      `}</style>
        </div>
    );
}
