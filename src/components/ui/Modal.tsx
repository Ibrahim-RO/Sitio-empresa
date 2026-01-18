import { useEffect } from "react";
import { X } from "lucide-react";
import ContactForm from "../contact/ContactForm";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}

export default function Modal({
    isOpen,
    onClose,        
}: ModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative bg-[#0f172a] border border-white/10 p-8 rounded-2xl w-full max-w-lg shadow-2xl transform transition-all animate-float">
                <div className="flex items-center justify-end">
                    <button
                        onClick={onClose}
                        className="rounded-lg p-1 text-gray-300 hover:bg-white/10"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <ContactForm />
            </div>
        </div>
    );
}
