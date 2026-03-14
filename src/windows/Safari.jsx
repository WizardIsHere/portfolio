import React, { useState } from 'react'
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {ChevronLeft, ChevronRight, PanelLeft, Search, Share, ShieldHalf, Plus, Copy, X, Linkedin, Github} from "lucide-react";

// Static LinkedIn Page Component
const LinkedInPage = () => (
    <div className="linkedin-page bg-[#f3f2ef] min-h-full p-4">
        {/* LinkedIn Header */}
        <div className="bg-white border-b border-gray-300 p-3 flex items-center gap-4 sticky top-0">
            <div className="w-8 h-8 bg-[#0a66c2] rounded flex items-center justify-center text-white font-bold">in</div>
            <div className="flex-1 bg-[#edf3f8] rounded-full px-4 py-2 text-sm text-gray-600">Search</div>
            <div className="flex gap-6 text-gray-500 text-xs">
                <span>Home</span>
                <span>My Network</span>
                <span>Jobs</span>
                <span>Messaging</span>
                <span>Notifications</span>
            </div>
        </div>

        {/* LinkedIn Layout */}
        <div className="max-w-6xl mx-auto mt-4 flex gap-4">
            {/* Left Sidebar */}
            <div className="w-1/4 space-y-4">
                <div className="bg-white rounded-lg border border-gray-300 h-64"></div>
                <div className="bg-white rounded-lg border border-gray-300 h-48"></div>
            </div>

            {/* Main Feed */}
            <div className="flex-1 space-y-4">
                <div className="bg-white rounded-lg border border-gray-300 h-32"></div>
                <div className="bg-white rounded-lg border border-gray-300 h-96"></div>
                <div className="bg-white rounded-lg border border-gray-300 h-64"></div>
            </div>

            {/* Right Sidebar */}
            <div className="w-1/4 space-y-4">
                <div className="bg-white rounded-lg border border-gray-300 h-48"></div>
                <div className="bg-white rounded-lg border border-gray-300 h-64"></div>
            </div>
        </div>
    </div>
);

// Static GitHub Page Component
const GitHubPage = () => (
    <div className="github-page bg-white min-h-full">
        {/* GitHub Header */}
        <div className="bg-[#24292f] px-4 py-3 flex items-center gap-4">
            <div className="text-white">
                <Github className="w-8 h-8" />
            </div>
            <div className="flex-1 max-w-md">
                <input
                    type="text"
                    placeholder="Type / to search"
                    className="w-full bg-[#24292f] border border-[#57606a] rounded-md px-3 py-1.5 text-sm text-white placeholder-gray-400"
                />
            </div>
            <div className="flex gap-4 text-white text-sm">
                <span>Pull requests</span>
                <span>Issues</span>
                <span>Codespaces</span>
                <span>Marketplace</span>
                <span>Explore</span>
            </div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        </div>

        {/* GitHub Layout */}
        <div className="max-w-7xl mx-auto p-6">
            {/* Repo Header */}
            <div className="border-b border-gray-300 pb-4 mb-4">
                <div className="flex items-center gap-2 text-[#0969da] text-sm mb-4">
                    <span>username</span>
                    <span>/</span>
                    <span className="text-xl font-semibold">repository-name</span>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-sm">Main</button>
                    <button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-sm">Branches</button>
                    <button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-sm">Tags</button>
                </div>
            </div>

            {/* File Browser */}
            <div className="border border-gray-300 rounded-md">
                <div className="bg-[#f6f8fa] px-4 py-3 border-b border-gray-300 flex items-center gap-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold">username</span>
                    <span className="text-sm text-gray-600">initial commit</span>
                </div>
                <div className="divide-y divide-gray-200">
                    {[1,2,3,4,5].map((i) => (
                        <div key={i} className="px-4 py-2 flex items-center gap-3 hover:bg-gray-50">
                            <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
                            <span className="text-[#0969da] text-sm flex-1">file-{i}.tsx</span>
                            <span className="text-gray-500 text-sm">Initial commit</span>
                            <span className="text-gray-400 text-xs">2 days ago</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* README Preview */}
            <div className="mt-4 border border-gray-300 rounded-md">
                <div className="bg-[#f6f8fa] px-4 py-2 border-b border-gray-300 text-sm font-semibold">README.md</div>
                <div className="p-4">
                    <h1 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Project Title</h1>
                    <p className="text-gray-700 mb-2">This is a placeholder description for the GitHub repository.</p>
                </div>
            </div>
        </div>
    </div>
);

const Safari = () => {
    const [activeTab, setActiveTab] = useState('linkedin');
    const [tabs, setTabs] = useState([
        { id: 'linkedin', title: 'LinkedIn', url: 'linkedin.com', icon: Linkedin, component: LinkedInPage },
        { id: 'github', title: 'GitHub', url: 'github.com', icon: Github, component: GitHubPage },
    ]);

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || LinkedInPage;

    const closeTab = (e, tabId) => {
        e.stopPropagation();
        const newTabs = tabs.filter(tab => tab.id !== tabId);
        if (newTabs.length > 0 && activeTab === tabId) {
            setActiveTab(newTabs[0].id);
        }
        setTabs(newTabs);
    };

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
                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="flex-1"
                            value={tabs.find(tab => tab.id === activeTab)?.url || ''}
                            readOnly
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <Share className="icon" />
                        <Plus className="icon" />
                        <Copy className="icon" />
                    </div>
                </div>
            </div>

            {/* Tab Bar */}
            <div className="flex bg-[#e4e4e4] px-2 pt-2 gap-1">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                        <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-t-lg cursor-pointer text-sm min-w-[140px] max-w-[200px]
                                ${activeTab === tab.id
                                ? 'bg-white text-black'
                                : 'bg-[#d1d1d1] text-gray-600 hover:bg-[#c4c4c4]'
                            }
                            `}
                        >
                            <Icon className="w-4 h-4" />
                            <span className="flex-1 truncate">{tab.title}</span>
                            <X
                                className="w-3 h-3 hover:bg-gray-300 rounded-full p-0.5"
                                onClick={(e) => closeTab(e, tab.id)}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white overflow-auto" style={{ height: 'calc(100% - 80px)' }}>
                <ActiveComponent />
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, "safari")

export default SafariWindow