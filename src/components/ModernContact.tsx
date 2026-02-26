"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

export const ModernContact = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    return (
        <div className=" px-6 bg-white" id="contact">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                    {/* Header Info */}
                    <div className="flex-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8 block">Project Initiation</span>
                        <h2 className="text-6xl md:text-8xl font-black text-black mb-12 tracking-tighter leading-[0.9] uppercase">
                            READY TO <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 drop-shadow-sm filter mt-2 md:mt-0">BUILD</span> SOMETHING?
                        </h2>
                        <p className="text-gray-400 text-xl font-light leading-relaxed max-w-md mb-16">
                            Initializing specialized protocols for high-capacity digital transformation.
                            Let's sync up and deploy your vision.
                        </p>

                        <div className="space-y-8">
                            <a href="mailto:imvpankaj@gmail.com" className="flex items-center gap-6 group w-fit">
                                <div className="p-4 bg-black text-white rounded-2xl group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Electronic Mail</p>
                                    <p className="text-xl font-black tracking-tight text-black group-hover:text-gray-500 transition-colors">imvpankaj@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form Block */}
                    <div className="flex-1 bg-gray-50 border border-black/[0.03] rounded-[64px] p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.02)]">
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <CheckCircle className="text-black mx-auto mb-8" size={80} strokeWidth={1} />
                                <h3 className="text-4xl font-black text-black mb-6 tracking-tighter uppercase">Sync Successful</h3>
                                <p className="text-gray-500 text-lg mb-10 font-light">Data transmitted to core. Expect a response within 24 hours.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-black font-black uppercase tracking-widest text-xs border-b border-black pb-1"
                                >
                                    New Sync
                                </button>
                            </motion.div>
                        ) : (
                            isMounted ? (
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    {status === "error" && (
                                        <div className="flex items-center gap-3 p-5 bg-red-50 border border-red-100 rounded-3xl text-red-600 text-sm font-black uppercase tracking-widest">
                                            <AlertCircle size={20} />
                                            Protocol Failure
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] ml-1">Identity Node</label>
                                        <input
                                            required
                                            suppressHydrationWarning
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter Identity"
                                            className="w-full bg-transparent border-b-2 border-black/5 px-0 py-4 text-black text-2xl font-medium placeholder:text-gray-200 focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] ml-1">Virtual Coordinate</label>
                                        <input
                                            required
                                            suppressHydrationWarning
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Enter Email"
                                            className="w-full bg-transparent border-b-2 border-black/5 px-0 py-4 text-black text-2xl font-medium placeholder:text-gray-200 focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-[3px] ml-1">Request Data</label>
                                        <textarea
                                            required
                                            suppressHydrationWarning
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Initialize Message..."
                                            className="w-full bg-transparent border-b-2 border-black/5 px-0 py-4 text-black text-2xl font-medium placeholder:text-gray-200 focus:outline-none focus:border-black transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className={`w-full bg-black text-white font-black py-8 rounded-[32px] flex items-center justify-center gap-3 transition-all hover:bg-gray-900 shadow-2xl shadow-black/10 uppercase tracking-[0.3em] text-xs ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        {status === "loading" ? "TRANSMITTING..." : (
                                            <>
                                                INITIALIZE SYNC <Send size={16} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-12 animate-pulse">
                                    <div className="space-y-4">
                                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                                        <div className="h-10 border-b-2 border-black/5"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-3 w-40 bg-gray-200 rounded"></div>
                                        <div className="h-10 border-b-2 border-black/5"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                                        <div className="h-20 border-b-2 border-black/5"></div>
                                    </div>
                                    <div className="h-20 bg-gray-200 rounded-[32px] w-full mt-12"></div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
