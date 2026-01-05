import React, { useRef } from 'react';
import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        // 1. Entrance Animation
        useGSAP(() => {
            if (isOpen && ref.current) {
                gsap.fromTo(ref.current,
                    { scale: 0.8, opacity: 0, y: 40 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
                );
            }
        }, [isOpen]);

        // 2. Draggable Logic
        useGSAP(() => {
            if (!isOpen || !ref.current) return;

            const [instance] = Draggable.create(ref.current, {
                onPress: () => focusWindow(windowKey),
                // Important: If you want to click buttons inside,
                // you might need to add: cancel: "button, input"
            });

            return () => instance.kill();
        }, [isOpen]);

        // 3. THE FIX: Conditional Rendering
        // If isOpen is false, we MUST return null so the component unmounts.
        // This is why your close button "wasn't working"—the state changed
        // but the UI didn't actually remove the element.
        if (!isOpen) return null;

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{
                    zIndex,
                    position: 'absolute',
                    top: '10%',
                    left: '10%'
                }}
                className="absolute"
            >
                {/* We pass the windowKey as 'target' automatically to the Component */}
                <Component {...props} target={windowKey} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${
        Component.displayName || Component.name || "Component"
    })`;

    return Wrapped;
};

export default WindowWrapper;