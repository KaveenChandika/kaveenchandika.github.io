import About from "./component/about/about";
import Header from "./component/header/header";
import Intro from "./component/intro/intro";
import Skills from "./component/skills/skills";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
