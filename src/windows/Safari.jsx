import React from 'react'
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {ChevronLeft, ChevronRight, PanelLeft, Search, Share, ShieldHalf, Plus, Copy} from "lucide-react";

const Safari = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target="safari"/>

                <PanelLeft className="ml-10 icon"/>

                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />
                    <div className="search">
                        <Search className="icon" />
                        <input type="text" placeholder="Search or enter website name" className="flex-1" />
                    </div>

                    <div className="flex items-center gap-5">
                        <Share className="icon" />
                        <Plus className="icon" />
                        <Copy className="icon" />
                    </div>
                </div>

                <div className="blog w-2xl h-1/2">
                    <h2>My Zone</h2>
                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, "safari")

export default SafariWindow
