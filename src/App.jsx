import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import "./index.css";
// import { Cursor } from "./components/Cursor";

const App = () => {
  return (
    <>
    <div className="fixed NavX">
      <Navbar />
    </div>
    <div className="wrapper">
      <div className="headerForBlob relative flex justify-center items-center">
        <div className='absolute top-[165px] left-[-750px] lg:left-[-965px] bg-gradient-to-br from-grad-uno via-grad-dos to-grad-tres w-[550px] h-[450px] blobBackground blur-3xl opacity-70'></div>
        <div className="foreground">
        <Hero />
        </div>
      </div>
      <div className="headerForBlob relative flex justify-center items-center">
        <div className='absolute top-[865px] right-[-750px] lg:right-[-1065px] bg-gradient-to-br from-grad-tres via-grad-dos to-grad-uno w-[550px] h-[450px] blobBackground blur-3xl opacity-70'></div>
        <div className="foreground">
        <About />
        </div>
      </div>
      
    </div>
    </>
  );
}

export default App