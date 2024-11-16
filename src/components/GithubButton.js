const GithubButton = ({url}) => {
    return ( 
        <a href={url} target="_blank" className="github-button">
            <img className="github-icon icon" src="./portfolio/icons/github.png"></img>
            <p>See project on Github</p>
        </a>
     );
}
 
export default GithubButton;