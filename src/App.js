import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';
import DecorativeText from './components/DecorativeText';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['home', 'about', 'projects', 'contact'];
  const [themes, setThemes] = useState([
    {name: 'Galaxy', background: './portfolio/assets/galaxy.jpg', bgColor: '#0a0a0aE6', secondaryColor: '#1a1a1b', textColor: 'white', accentColor: 'white', overLine: '#0a0a0a', elBg: '#FFFFFFCC', selectedEl: '#ffffff1a'},
    {name: 'Newspaper', background: './portfolio/assets/paper.jpg', bgColor: '#F5F5DCE6', secondaryColor: '#FAEBD7', textColor: 'black', accentColor: 'black', overLine: '#F5F5DC', elBg: 'FFFFF', selectedEl: '#0a0a0a1a'},
    {name: 'Sakura', background: './portfolio/assets/sakura.jpg', bgColor: '#FFFFFF', secondaryColor: '#E89FBA', textColor: 'black', accentColor: '#FFB7C5', overLine: '#FFFFFF', elBg: 'lightgray', selectedEl: '#0a0a0a1a'},
    
  ]);
  const [currentTheme, setCurrentTheme] = useState({name: 'Galaxy', background: './portfolio/assets/galaxy.jpg', bgColor: '0A0A0A', secondaryColor: '#111214', lightColor: 'white', darkColor: 'black'});


  const changeTheme = (theme)=>{
    setCurrentTheme(theme);

    document.documentElement.style.setProperty(`--textColor`, theme.textColor);
    document.documentElement.style.setProperty(`--accentColor`, theme.accentColor);
    document.documentElement.style.setProperty(`--bgColor`, theme.bgColor);
    document.documentElement.style.setProperty(`--secondaryColor`, theme.secondaryColor);
    document.documentElement.style.setProperty(`--overLine`, theme.overLine);
    document.documentElement.style.setProperty(`--elBg`, theme.elBg);
    document.documentElement.style.setProperty(`--selectedEl`, theme.selectedEl);

  }



  useEffect(() => {
    const sectionPositions = sections.map(id => {
      const element = document.getElementById(id);
      return element ? element.offsetTop : 0;
    });
  
    
    const handleScroll = () => {
      const scrollPosition = document.querySelector('.content').scrollTop;
      
      for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollPosition >= sectionPositions[i] && 
           (i === sectionPositions.length - 1 || scrollPosition < sectionPositions[i + 1])) {
          setCurrentSection(i);
          break;
        }
      }
    };

    document.querySelector('.content').addEventListener('scroll', handleScroll);
    return () => document.querySelector('.content').removeEventListener('scroll', handleScroll);
  }, [sections]);

  const prevSection = sections[currentSection - 1];
  const nextSection = sections[currentSection + 1];

  const handlePrevPage = () => {
    if (prevSection) {
      const prevSectionElement = document.getElementById(prevSection);
      prevSectionElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (nextSection) {
      const nextSectionElement = document.getElementById(nextSection);
      nextSectionElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={`App ${currentTheme.name === 'Sakura' || currentTheme.name === 'Newspaper' ? 'light-theme' : ''}`} >
      <div className='background' ></div>
      <div className='left-text japanese-text text-container'>
          <DecorativeText />
      </div>
      <div className='right-text japanese-text text-container'>
        <DecorativeText />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className='quick-links'>
        <a href='https://github.com/Stefan0712' target='_blank'>
          <img className={currentTheme.name === 'Sakura' || currentTheme.name === 'Newspaper' ? 'invert-icon' : ''} src='https://stefan0712.github.io/portfolio/icons/github.png' alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/stefan-vladulescu/' target='_blank'>
          <img className={currentTheme.name === 'Sakura' || currentTheme.name === 'Newspaper' ? 'invert-icon' : ''} src='https://stefan0712.github.io/portfolio/icons/linkedin.png' alt='linkedin' />
        </a>
        <a href='mailto:s.vladulescu@gmail.com' target='_blank'>
          <img className={currentTheme.name === 'Sakura' || currentTheme.name === 'Newspaper' ? 'invert-icon' : ''} src='https://stefan0712.github.io/portfolio/icons/mail.png' alt='mail' />
        </a>
      </div>
      <div className='content'>
        <div id="home"><Home changeTheme={changeTheme} themes={themes} currentTheme={currentTheme}/></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
      {prevSection && (
        <div className='top-nav-button' onClick={handlePrevPage}>
          {prevSection.toUpperCase()}
        </div>
      )}
      {nextSection && (
        <div className='bottom-nav-button' onClick={handleNextPage}>
          {nextSection.toUpperCase()}
        </div>
      )}
    </div>
  );
}

export default App;
