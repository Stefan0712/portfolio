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
            <div className='full-row'><h1>YelpCamp</h1></div>
            <p className="project-description">
            The YelpCamp project is designed to be the equivalent of Yelp, but for camps. 
            It was created as part of The Web Developer Bootcamp on Udemy, using Express.js for the backend, MongoDB for the database, and EJS for the "frontend." 
            For styling, Bootstrap was primarily used, with a minimalistic UI since the focus was on the backend functionality.
            The project emphasizes backend development, handling essential features such as routing, database integration, authentication and authorization, and data validation.
            Users can browse camps and their reviews, and after logging in, they can create a camp or post a review. Only the author of a camp or review can edit or delete it. 
            Additionally, users must be logged in to create camps or reviews.
            The app includes modals to display error and success messages, middleware to check user authentication and authorization, and sanitization to prevent security vulnerabilities.
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
                    <img className='icon'src="https://stefan0712.github.io/portfolio/icons/ejs.png" alt=""></img>
                    <div className='icon-name'>EJS</div>
                </div>
           
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