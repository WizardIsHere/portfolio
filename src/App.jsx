import React from 'react'
import {Navbar, Welcome, Dock} from "#components"
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import {Resume, Safari, Terminal, Contact} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
       <main>
           <Navbar />
           <Welcome />
            <Dock />

           {/*Application Windows*/}
           <Terminal />
           <Safari />
           <Contact />
           <Resume/>
       </main>
    )
}
export default App
