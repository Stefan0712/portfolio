import Commits from '../components/Commits';
import GithubButton from '../components/GithubButton';
import { fitnessAppComponents } from './components';
import { useState } from 'react';
import ComponentsGallery from './ComponentsGallery';


const FitnessApp = () => {

    
    const [components, setComponents] = useState(fitnessAppComponents)
    const [selectedPage, setSelectedPage] = useState(components[0]);
    const [selectedSnippet, setSelectedSnippet] = useState(selectedPage.snippets ? selectedPage.snippets[0] : null);
    
    return ( 
        <div className="project fitness-app-project">
            <div className='full-row'><h1>Fitness App</h1></div>
            <p className="project-description">
            This fitness app has the goal of making tracking your activity and macros easy, without any extra steps or too much effort. The idea is to make everything accessible within a couple of taps.
            Built with a mobile-first design in mind, it features simple UI elements that make it intuitive for everyone. 
            This app consists only of a frontend for now, using React for the UI, React Router for handling routes, and Redux Store for state management. 
            I decided to keep the app simple and offline-only for now, with plans to include a public library of exercises, workouts, fitness-related posts, and some sort of community page.
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
            <div className='full-row'><h2>Components</h2></div>
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
                
                    
            </div>
            {selectedPage.snippets ? (
                    <div className='snippet' key={selectedPage.name}>
                        <div className='snippet-header'>
                            {selectedPage.snippets?.map((snippet, index)=><p key={index} className={selectedSnippet === snippet ? 'selected-snipper-header' : ''} onClick={()=>setSelectedSnippet(snippet)}>{snippet.name}</p>)}
                        </div>
                        <pre className='snippet-code'>
                            {selectedSnippet ? selectedSnippet.snippet : ""}
                        </pre>
                </div>
                ) : ''}
            
            <div className='commits-container'>
                    <h3>Last 5 commits</h3>
                    <Commits repo={'fit-tracker'} />
                </div>       
            
                

        </div>
     );
}
 
export default FitnessApp;