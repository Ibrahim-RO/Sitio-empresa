import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { X, CheckCircle2, Send } from 'lucide-react'

const SERVICE_ID = 'service_ktfxryd'
const TEMPLATE_ID = 'template_biiskdj'
const PUBLIC_KEY = '8JNSto7PZk0zC_R_3'

enum FormStatus {
    IDLE = 'idle',
    SENDING = 'sending',
    SUCCESS = 'success',
    ERROR = 'error',
}

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement | null>(null)
    const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE)

    const resetStatus = () => {
        setTimeout(() => setStatus(FormStatus.IDLE), 3000)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formRef.current) return

        setStatus(FormStatus.SENDING)

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            )

            setStatus(FormStatus.SUCCESS)
            formRef.current.reset()
            resetStatus()
        } catch (error) {
            console.error('EmailJS Error:', error)
            setStatus(FormStatus.ERROR)
            resetStatus()
        }
    }

    if (status === FormStatus.SUCCESS) {
        return <SuccessMessage />
    }

    if (status === FormStatus.ERROR) {
        return <ErrorMessage />
    }

    return (
        <div className='p-4'>
            <h2 className="text-xl font-bold text-white mb-2">
                Iniciar Proyecto
            </h2>
            <p className="text-slate-400 mb-6 text-sm">
                Cuéntanos sobre tu idea.
            </p>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 rounded-lg"
            >
                <Input
                    label="Nombre"
                    name="user_name"
                    type="text"
                    placeholder="Tu nombre completo"
                />

                <Input
                    label="Email"
                    name="user_email"
                    type="email"
                    placeholder="tu@empresa.com"
                />

                <Textarea
                    label="Mensaje"
                    name="message"
                    placeholder="Descripción breve del proyecto..."
                />

                <button
                    type="submit"
                    disabled={status === FormStatus.SENDING}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === FormStatus.SENDING ? (
                        <span className="animate-pulse">Enviando...</span>
                    ) : (
                        <>
                            Enviar Solicitud <Send size={18} />
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

interface FieldProps {
    label: string
    name: string
    placeholder: string
    type?: string
}

function Input({
    label,
    name,
    placeholder,
    type = 'text',
}: FieldProps) {
    return (
        <div>
            <label className="block text-xs font-mono text-blue-400 mb-1 uppercase tracking-wider">
                {label}
            </label>
            <input
                required
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full border border-slate-100 rounded-lg p-3 text-white placeholder:text-gray-200 outline-none transition-colors"
            />
        </div>
    )
}

function Textarea({
    label,
    name,
    placeholder,
}: Omit<FieldProps, 'type'>) {
    return (
        <div>
            <label className="block text-xs font-mono text-blue-400 mb-1 uppercase tracking-wider">
                {label}
            </label>
            <textarea
                required
                rows={4}
                name={name}
                placeholder={placeholder}
                className="w-full border border-slate-300 rounded-lg p-3 text-white placeholder:text-gray-200 outline-none transition-colors resize-none"
            />
        </div>
    )
}

function SuccessMessage() {
    return (
        <div className="text-center py-12 animate-fade-in">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
                ¡Mensaje Recibido!
            </h3>
            <p className="text-slate-400">
                Nos pondremos en contacto contigo lo antes posible.
            </p>
        </div>
    )
}

function ErrorMessage() {
    return (
        <div className="text-center py-12 animate-fade-in">
            <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <X size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
                Error al enviar
            </h3>
            <p className="text-slate-400">
                Por favor intenta de nuevo.
            </p>
        </div>
    )
}
