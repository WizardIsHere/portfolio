import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Ensure this is installed

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, defaultValue: 100 },
    title: { min: 400, max: 900, defaultValue: 400 }
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={`inline-block ${className}`} // inline-block helps with transforms/width
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const setupTextHover = (container, type) => {
            if (!container) return;

            const letters = container.querySelectorAll('span');
            const { min, max, defaultValue } = FONT_WEIGHTS[type];

            const handleMouseMove = (event) => {
                const { left } = container.getBoundingClientRect();
                const mouseX = event.clientX - left;

                letters.forEach((letter) => {
                    const { left: l, width: w } = letter.getBoundingClientRect();
                    const letterCenterX = (l - left) + w / 2;
                    const distance = Math.abs(mouseX - letterCenterX);

                    // Gaussian distribution for smooth weight falloff
                    const intensity = Math.exp(-(distance ** 2) / 20000);
                    const currentWeight = min + (max - min) * intensity;

                    gsap.to(letter, {
                        fontVariationSettings: `'wght' ${currentWeight}`,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            };

            const handleMouseLeave = () => {
                letters.forEach((letter) => {
                    gsap.to(letter, {
                        fontVariationSettings: `'wght' ${defaultValue}`,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                });
            };

            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);

            // Return cleanup function
            return () => {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        };

        const cleanupTitle = setupTextHover(titleRef.current, "title");
        const cleanupSubtitle = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            if (cleanupTitle) cleanupTitle();
            if (cleanupSubtitle) cleanupSubtitle();
        };
    }, []);

    return (
        <section id="welcome" className="p-10">
            <p ref={subtitleRef}>
                {renderText(
                    "Hey, I'm Shushant! Welcome to my",
                    'text-3xl font-georama',
                    100
                )}
            </p>
            <h1 ref={titleRef} className="mt-7">
                {renderText('portfolio', 'text-9xl italic font-georama', 400)}
            </h1>

            <div className="small-screen mt-10">
                <p>This portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
};

export default Welcome;