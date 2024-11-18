import Commits from '../components/Commits';
import GithubButton from '../components/GithubButton';
import { yelpCamp } from './components';
import { useState } from 'react';
import ComponentsGallery from './ComponentsGallery';


const YelpCamp = () => {

    
    const [components, setComponents] = useState()
    const [selectedPage, setSelectedPage] = useState();
    // const [selectedSnippet, setSelectedSnippet] = useState(selectedPage.snippets ? selectedPage.snippets[0] : null);
    
    return ( 
        <div className="project fitness-app-project">
            <div className='full-row'><h1>Project Management App - Work in progress</h1></div>
            <p className="project-description">
                Working on my Fitness App while also fixing and updating older projects has made me realize that I need to somehow track bugs or other problems and ideas in a simple and easy way. There are a lot of apps that let you 
                track projects and tasks, but all of them have a couple thing in common: they are too complex, it takes too many clicks to do the most basic thing, usually is bloated with ads, and they try to 
                do as many things as possible. With that in mind, I decided to make this simple and straightforward project tracking app. The app will have a simply interface with everything at maximum two clicks away and it 
                will allow some level of customization. The user can create projects, inside of which they can create lists of tasks, tasks, and notes. All tasks can have subtasks, notes, deadlines, tags, color coded.
                You will also be able to create personal tasks and notes that doesn't belong to any project. You will be able to quickly navigate and search through tasks, projects, notes. 
            </p>
            <h2>Technologies used</h2>
            <div className='technologies'>
            <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/js.png" alt=""></img>
                    <div className='icon-name'>JavaScript</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/html.png" alt=""></img>
                    <div className='icon-name'>HTML</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/css.png" alt=""></img>
                    <div className='icon-name'>CSS</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/react.png" alt=""></img>
                    <div className='icon-name'>React</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/redux.png" alt=""></img>
                    <div className='icon-name'>Redux</div>
                </div>
                <div className='technology'>
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/react-router.png" alt=""></img>
                    <div className='icon-name'> React Router</div>
                </div>
            </div>
            {/* <div className='full-row'><h2>Components</h2></div>
            <div className='components'>
                <div className='components-list'>
                    {components.map((component,index)=>(<button key={index} className={selectedPage.param === component.param ? 'selected-component' : ''} onClick={()=>setSelectedPage(component)}>{component.name}</button>))}
                    
                </div>
                <div className='component-description'>
                    <p className='component-description-text'>
                        {selectedPage.description}
                    </p>
                    <h4>You can:</h4>
                    {selectedPage.features?.map((feature, index)=>(<li key={index} className='feature'>{feature}</li>))}
                    
                </div>
                <ComponentsGallery images={selectedPage.imgs} />
                
            </div> */}
            {/* {selectedPage.snippets ? (
                    <div className='snippet' key={selectedPage.name}>
                        <div className='snippet-header'>
                            {selectedPage.snippets?.map((snippet)=><p className={selectedSnippet === snippet ? 'selected-snipper-header' : ''} onClick={()=>setSelectedSnippet(snippet)}>{snippet.name}</p>)}
                        </div>
                        <pre className='snippet-code'>
                            {selectedSnippet ? selectedSnippet.snippet : ""}
                            
                        </pre>
                </div>
                ) : ''} */}
            
                <div className='commits-container'>
                    <h3>Last 5 commits</h3>
                    <Commits repo={'simple-project-tracker'} />
                </div>
                

        </div>
     );
}
 
export default YelpCamp;