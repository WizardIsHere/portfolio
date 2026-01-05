import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default Resume
