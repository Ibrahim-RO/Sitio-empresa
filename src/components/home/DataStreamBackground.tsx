import React, { useEffect, useRef } from "react";

const DataStreamBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width: number;
        let height: number;

        const columns: number[] = [];
        const fontSize = 14;
        const chars =
            "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            const cols = Math.floor(width / fontSize);
            columns.length = 0;

            for (let i = 0; i < cols; i++) {
                columns[i] = Math.random() * height;
            }
        };

        window.addEventListener("resize", resize);
        resize();

        const draw = () => {
            ctx.fillStyle = "rgba(3, 7, 18, 0.05)";
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < columns.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = columns[i] * fontSize;

                ctx.fillStyle = Math.random() > 0.98 ? "#60a5fa" : "#1e3a8a";
                ctx.fillText(char, x, y);

                if (y > height && Math.random() > 0.99) {
                    columns[i] = 0;
                } else {
                    columns[i]++;
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        let animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        />
    );
};

export default DataStreamBackground;
