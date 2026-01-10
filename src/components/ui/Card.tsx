import { useRef, useState } from "react";

type Props = {
    data: {
        title: string;
        description: string;
        colorTitle: string;
        colorBg: string;
        technologies: {
            name: string;
        }[];
    }
}

export default function Card({ data } : Props) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const divRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const bounds = divRef.current!.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className="relative w-80 h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
        >
            {visible && (
                <div className="pointer-events-none blur-xl bg-linear-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                    style={{ top: position.y - 120, left: position.x - 120, }}
                />
            )}

            <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Profile Avatar" className="w-24 h-24 rounded-full shadow-md my-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Richard Nelson</h2>
                <p className="text-sm text-indigo-500 font-medium mb-4">Software Developer</p>
                <p className="text-sm text-gray-500 mb-4 px-4">
                    Passionate about clean code, scalable systems, and solving real-world problems with elegant software.
                </p>
            </div>
        </div>
    )
}