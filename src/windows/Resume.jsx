import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";

const Resume = () => {
    return (
        <div className="flex flex-col h-full w-full bg-white">
            {/* Window Header */}
            <div id="window-header" className="bg-[#f0f0f4] border-b border-gray-300">
                <WindowControls target="resume"/>slk
                \
            </div>

            {/* PDF Viewer - fills remaining space */}
            <div className="flex-1 w-full overflow-hidden">
                <iframe
                    src="/files/Shushant's FullStack Resume.pdf"
                    className="w-full h-full border-none"
                    title="Resume PDF"
                />
                {/* Alternative using embed (uncomment if iframe doesn't work well) */}
                {/* <embed
                    src="/files/resume.pdf"
                    type="application/pdf"
                    className="w-full h-full"
                /> */}
            </div>
        </div>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow