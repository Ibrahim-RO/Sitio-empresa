export default function Terminal() {
    return (
        <div
            className="w-full max-w-lg mx-auto bg-[#0d1117] rounded-xl overflow-hidden border border-slate-800 shadow-2xl animate-float opacity-90 hidden lg:block"
        >
            <div
                className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800"
            >
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-slate-500 font-mono">
                    server.js — node
                </div>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
                <div className="flex">
                    <span className="text-green-400 mr-2">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-300 ml-2">npx create-awesome-app</span>
                </div>
                <div className="text-slate-500 text-xs py-1">
                    Installing dependencies...
                </div>
                <div className="text-slate-300">
                    <span className="text-green-500">✔</span> Core Architecture Optimized<br
                    />
                    <span className="text-green-500">✔</span> UI/UX Components Loaded<br
                    />
                    <span className="text-green-500">✔</span> Cloud Scalability Enabled
                </div>
                <div className="flex items-center">
                    <span className="text-green-400 mr-2">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-300 ml-2">deploy --production</span>
                    <span className="w-2 h-4 bg-slate-300 ml-1 animate-pulse"></span>
                </div>
            </div>
        </div>

    )
}
