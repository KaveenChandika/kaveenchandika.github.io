import About from "./component/about/about";
import Intro from "./component/intro/intro";
import Skills from "./component/skills/skills";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
