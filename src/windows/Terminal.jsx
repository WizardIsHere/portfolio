import React from 'react'
import windowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants";
import {CheckIcon, Check, Flag} from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>
            <div className="techstack">
                <p>
                    <span className="font-bold">@shushant %</span>
                    {" "}show tech stack
                </p>
                <div className="label">
                    <p className="w-32 ">Category</p>
                    <p className="">Technologies</p>
                </div>
                <ul className="content">
                    {/* Destructuring the object here is the key fix */}
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-start gap-4 mb-2">
                            <CheckIcon className="check text-green-500" size={20} />
                            <h3 className="w-32 font-semibold">{category}</h3>
                            <ul className="flex flex-wrap gap-1">
                                {items.map((item, index) => (
                                    <li key={index} >
                                        {item}{index < items.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} />5 of 5 stacks loaded successfully (100%)
                    </p>
                    <p className="text-black">
                        <Flag size={15} fill="black" />
                        Render time :6ms
                    </p>
                </div>
            </div>
        </>
    )
}

const TerminalWindow = windowWrapper(Terminal, "terminal")
export default TerminalWindow