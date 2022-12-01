import './App.css';
import About from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import TechStack from './Components/Tech Stack/TechStack';
import Project from './Components/Projects/Project';
import Workexperience from './Components/WorkExperience/Workexperience';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/contact';
import ScrollToTop from "react-scroll-to-top";
import MobileNav from './Components/Sidebar/MobileNav';


function App() {
  return (
    <>
      <MobileNav/>
      <Sidebar/>
      <About/>
      <TechStack/>
      <Project/>
      <Workexperience/>
      <Education/>
      <Contact/>

      <ScrollToTop color='#fff' height='20px' width='20px' smooth='true' style={{borderRadius:"10px",backgroundColor:'blue',padding:'5px'}}/>
    </>
  );
}

export default App;
