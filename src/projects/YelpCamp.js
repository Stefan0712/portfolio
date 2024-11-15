import Commits from '../components/Commits';
import GithubButton from '../components/GithubButton';
import { yelpCamp } from './components';
import { useState } from 'react';
import ComponentsGallery from './ComponentsGallery';


const YelpCamp = () => {

    
    const [components, setComponents] = useState(yelpCamp)
    const [selectedPage, setSelectedPage] = useState(components[0]);
    const [selectedSnippet, setSelectedSnippet] = useState(selectedPage.snippets ? selectedPage.snippets[0] : null);
    
    return ( 
        <div className="project fitness-app-project">
            <div className='full-row'><h1>YelpCamp</h1> <GithubButton url={'https://github.com/Stefan0712/YelpCamp'} /></div>
            <p className="project-description">
                The YelpCamp project is meant to be the equivalent of Yelp, but for camps. It was made during The Web Dev Bootcamp on Udemy, using ExpressJs for backend, MongoDB for database and EJS for "frontend". For styling it was mainly used Bootstrap, the ui being just barebone and not the focus of this project. The focus was the entire backend, which handles 
                the basic routes, the database, authentication and authorization, and the validation of data. The user can see camps and their reviews, and after logging in, they can create a camp or post a review. Only the author of the camp/review can edit or delete it, and the user can't create a new camp or review if it is not logged in. There are modals to show different error or success messages,
                middlewares to check if the user is authenticated or if it is the author, and sanitization to be sure nobody can bypass authentication or authorization.
            </p>
            <h2>Technologies used</h2>
            <div className='technologies'>
                <img className='technology icon' src="/icons/js.png" alt=""></img>
                <img className='technology icon' src="/icons/html.png" alt=""></img>
                <img className='technology icon' src="/icons/css.png" alt=""></img>
            </div>
            <div className='full-row'><h2>Components</h2><GithubButton url={'https://github.com/Stefan0712/YelpCamp'} /></div>
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
                            {selectedPage.snippets?.map((snippet)=><p className={selectedSnippet === snippet ? 'selected-snipper-header' : ''} onClick={()=>setSelectedSnippet(snippet)}>{snippet.name}</p>)}
                        </div>
                        <pre className='snippet-code'>
                            {selectedSnippet ? selectedSnippet.snippet : ""}
                            
                        </pre>
                </div>
                ) : ''}
            
                <div className='commits-container'>
                    <h3>Last 5 commits</h3>
                    <Commits repo={'YelpCamp'} />
                </div>
                

        </div>
     );
}
 
export default YelpCamp;