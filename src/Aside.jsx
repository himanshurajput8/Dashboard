import AccordionExpandIcon from './Accordian.jsx'
import { useState } from 'react'

export function AsideComponent(){
        const [isOpen, setIsOpen] = useState(false); 
    
        const toggleSidebar = () => {
            setIsOpen(!isOpen); 
        };
    return(
        <aside className={isOpen ? 'open' : 'closed'}>
            <button onClick={toggleSidebar}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <AccordionExpandIcon/>
            <div>
                <h4>Apps</h4>
                <li>Kanban</li>
                <li>Calendar</li>
                <li>Invoice Generator</li>
                <li>File Manager</li>
            </div>
            <div>
                <h4>Layouts</h4>
                <li>Layouts</li>
            </div>
            <div>
                <h4>Documentation</h4>
                <li>Documentation</li>
                <li>Components</li> 
            </div>
        </aside>
    )
}   