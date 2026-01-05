import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { dockApps } from '#constants/index.js';
import useWindowStore from "#store/window.js";

const Dock = () => {
    const dockRef = useRef(null);
    const {openWindow, closeWindow, windows} = useWindowStore();

    // Placeholder for your app state logic
    const toggleApp = (app) => {
        if (!app.canOpen) return;

        const window = windows[app.id]
        if(!window) return;

        if (window.isOpen){
            closeWindow(app.id)}
        else{
            openWindow(app.id);
        }
        console.log(windows,"window.open");
        console.log(`Toggling app: ${app.id}`);
    };

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll('.dock-icon-item');

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;

            icons.forEach((icon) => {
                const rect = icon.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const distance = Math.abs(mouseX - centerX);

                // Gaussian curve for smooth magnification (MacOS style)
                // 1.0 is base scale, 0.6 is the max growth amount
                const scale = 1 + Math.exp(-(distance ** 3) / 8000) * 0.6;
                gsap.to(icon, {
                    scale: scale,
                    duration: 0.2,
                    overwrite: 'auto',
                    ease: "power2.out"
                });
            });
        };

        const handleMouseLeave = () => {
            gsap.to(icons, {
                scale: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: dockRef });

    return (
        <section id='dock'>
            <div
                ref={dockRef}
                className='dock-container pointer-events-auto flex items-end gap-2 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl'
            >
                {/* Fixed the map arguments by destructuring the object */}
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className='dock-icon-item relative group flex flex-col items-center'>

                        {/* Custom Tooltip (Better than browser default) */}
                        <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black/80 text-white text-[10px] px-2 py-1 rounded-md mb-2">
                            {name}
                        </span>

                        <button
                            type="button"
                            className={`dock-icon outline-none transition-all ${!canOpen ? 'cursor-not-allowed grayscale' : 'active:scale-90'}`}
                            aria-label={name}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                className={`w-12 h-12 object-contain ${canOpen ? '' : 'opacity-40'}`}
                            />
                        </button>

                        {/* Active Dot indicator */}
                        {canOpen && <div className="bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Dock;