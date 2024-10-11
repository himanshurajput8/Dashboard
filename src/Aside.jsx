import AccordionExpandIcon from './Accordian.jsx'

export function AsideComponent(){
    return(
        <aside>
            <div className='img-div'>
                <h1>F</h1>
                <h2>Front</h2>
            </div>
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