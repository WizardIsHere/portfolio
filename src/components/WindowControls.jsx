import React from 'react'
import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
    // Adding focusWindow here is good practice for clicking controls
    const { closeWindow, focusWindow } = useWindowStore();

    const handleClose = (e) => {
        e.stopPropagation(); // Prevents click from bubbling to the window
        closeWindow(target);
    };

    return (
        <div id="window-controls" onMouseDown={(e) => e.stopPropagation()}>
            {/* Pass the target key specifically */}
            <div className="close" onClick={handleClose} />

            {/* For now, let's just make them close as well, or leave empty */}
            <div className="minimize" onClick={() => console.log("Minimize logic here")} />
            <div className="maximize" onClick={() => console.log("Maximize logic here")} />
        </div>
    )
}
export default WindowControls;