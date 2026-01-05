import React from "react";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants";
import { CheckIcon, Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p className="mb-4">
                    <span className="font-bold text-[#00A154]">@shushant %</span>{" "}
                    <span className="text-gray-500">show tech-stack</span>
                </p>

                <div className="label">
                    <p className="w-32 font-semibold text-gray-500">Category</p>
                    <p className="font-semibold text-gray-500">Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li
                            key={category}
                            className="flex items-start gap-4"
                        >
                            <CheckIcon size={18} className="check mt-1" />

                            <h3 className="w-32">{category}</h3>

                            <ul className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <li
                                        key={item}
                                        className="px-2 py-0.5 rounded-md bg-green-50 text-[#00A154] text-xs border border-green-200"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={18} />
                        {techStack.length} categories loaded successfully
                    </p>
                    <p className="text-black">
                        <Flag size={14} fill="black" />
                        Render time : 6ms
                    </p>
                </div>
            </div>
        </>
    );
};

const TerminalWindow = windowWrapper(Terminal, "terminal");
export default TerminalWindow;
