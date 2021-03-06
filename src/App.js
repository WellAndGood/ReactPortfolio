import './App.css';
import Header from "./components/Header.js"
import Navigation from "./components/Navigation.js"
import About from "./components/About.js"
import Project from "./components/Project.js"
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js"
import "./App.css"

function App() {
  return (
    <div>
      <Header>
        {/* <Navigation/> */}
      </Header>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
