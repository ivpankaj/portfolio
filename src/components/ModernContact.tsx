"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Mail, Send } from "lucide-react";

export const ModernContact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const access_key = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key,
          ...formData,
          subject: `New Message from ${formData.name} via Portfolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-white px-6 pb-16 md:pb-24" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-stretch gap-20 lg:flex-row">
          <div className="flex-1">
            <span className="mb-8 block text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
              Contact
            </span>
            <h2 className="mb-12 text-5xl sm:text-6xl md:text-8xl font-black uppercase leading-[1.05] md:leading-[0.9] tracking-tighter text-black">
              READY TO
              <br className="max-sm:hidden" />
              <span className="bg-gradient-to-br from-gray-200 to-gray-400 bg-clip-text text-transparent sm:ml-0 inline-block mt-2 sm:mt-0">
                BUILD
              </span>
              <span className="max-sm:block sm:ml-3 text-black">TOGETHER?</span>
            </h2>
            <p className="mb-16 max-w-md text-xl font-light leading-relaxed text-gray-500">
              If you need a landing page, dashboard, portfolio refresh, or a
              clean product interface, send the brief here and I will get back
              to you.
            </p>

            <div className="space-y-8">
              <a
                href="mailto:imvpankaj@gmail.com"
                className="group flex w-fit items-center gap-6"
              >
                <div className="rounded-2xl bg-black p-4 text-white transition-transform group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Email
                  </p>
                  <p className="text-xl font-black tracking-tight text-black transition-colors group-hover:text-gray-500">
                    imvpankaj@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 rounded-[64px] border border-black/[0.03] bg-gray-50 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.02)] md:p-16">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <CheckCircle
                  className="mx-auto mb-8 text-black"
                  size={80}
                  strokeWidth={1}
                />
                <h3 className="mb-6 text-4xl font-black uppercase tracking-tighter text-black">
                  Message Sent
                </h3>
                <p className="mb-10 text-lg font-light text-gray-500">
                  Thanks for reaching out. Expect a response within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="border-b border-black pb-1 text-xs font-black uppercase tracking-widest text-black"
                >
                  Send Another
                </button>
              </motion.div>
            ) : isMounted ? (
              <form onSubmit={handleSubmit} className="space-y-12">
                {status === "error" && (
                  <div className="flex items-center gap-3 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-black uppercase tracking-widest text-red-600">
                    <AlertCircle size={20} />
                    Message failed. Try again.
                  </div>
                )}

                <div className="space-y-4">
                  <label className="ml-1 text-[10px] font-black uppercase tracking-[3px] text-gray-400">
                    Name
                  </label>
                  <input
                    required
                    suppressHydrationWarning
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full border-b-2 border-black/5 bg-transparent px-0 py-4 text-2xl font-medium text-black placeholder:text-gray-200 transition-colors focus:border-black focus:outline-none"
                  />
                </div>
                <div className="space-y-4">
                  <label className="ml-1 text-[10px] font-black uppercase tracking-[3px] text-gray-400">
                    Email
                  </label>
                  <input
                    required
                    suppressHydrationWarning
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your email"
                    className="w-full border-b-2 border-black/5 bg-transparent px-0 py-4 text-2xl font-medium text-black placeholder:text-gray-200 transition-colors focus:border-black focus:outline-none"
                  />
                </div>
                <div className="space-y-4">
                  <label className="ml-1 text-[10px] font-black uppercase tracking-[3px] text-gray-400">
                    Project Brief
                  </label>
                  <textarea
                    required
                    suppressHydrationWarning
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me what you want to build"
                    className="w-full resize-none border-b-2 border-black/5 bg-transparent px-0 py-4 text-2xl font-medium text-black placeholder:text-gray-200 transition-colors focus:border-black focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`flex w-full items-center justify-center gap-3 rounded-[32px] bg-black py-8 text-xs font-black uppercase tracking-[0.3em] text-white shadow-2xl shadow-black/10 transition-all hover:bg-gray-900 ${status === "loading" ? "cursor-not-allowed opacity-50" : ""
                    }`}
                >
                  {status === "loading" ? "Sending..." : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="mt-2 animate-pulse space-y-12">
                <div className="space-y-4">
                  <div className="h-3 w-32 rounded bg-gray-200" />
                  <div className="h-10 border-b-2 border-black/5" />
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-40 rounded bg-gray-200" />
                  <div className="h-10 border-b-2 border-black/5" />
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-32 rounded bg-gray-200" />
                  <div className="h-20 border-b-2 border-black/5" />
                </div>
                <div className="mt-12 h-20 w-full rounded-[32px] bg-gray-200" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
