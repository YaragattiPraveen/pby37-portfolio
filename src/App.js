import './App.css';
import About from './Components/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import TechStack from './Components/Tech Stack/TechStack';
import Project from './Components/Projects/Project';
import Workexperience from './Components/WorkExperience/Workexperience';
import Education from './Components/Education/Education';
import Testimonial from './Components/Testimonial/Testimonial';



function App() {
  return (
    <>
      <Sidebar/>
      <About/>
      <TechStack/>
      <Project/>
      <Workexperience/>
      <Education/>
      <Testimonial/>
    </>
  );
}

export default App;
