"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { stackMarqueeKeys, stackVisuals } from "@/data/stack-visuals";

export const TechMarquee = () => {
    return (
        <div className="py-16 bg-white border-y border-black/[0.03] overflow-hidden">
            <div className="flex whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex items-center gap-24 px-12"
                    >
                        {stackMarqueeKeys.map((tech, idx) => {
                            const item = stackVisuals[tech];
                            const Icon = item.Icon;

                            return (
                            <div key={`${item.label}-${idx}`} className="flex items-center gap-6 group">
                                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${item.chipClassName} transition-transform duration-500 group-hover:scale-110`}>
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.label}
                                            width={24}
                                            height={24}
                                            className="h-auto w-auto"
                                        />
                                    ) : Icon ? (
                                        <Icon
                                            size={24}
                                            className={`${item.iconClassName} transition-opacity duration-500`}
                                        />
                                    ) : null}
                                </span>
                                <span className="text-3xl md:text-5xl font-black text-black/[0.03] uppercase group-hover:text-black transition-colors cursor-default tracking-tighter">
                                    {item.label}
                                </span>
                                <span className="text-black/5 font-light text-2xl">/</span>
                            </div>
                        )})}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
