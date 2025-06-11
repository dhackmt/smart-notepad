import './index.css';
import Notepad from './components/Notepad.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
   <div >



          <Routes>
            <Route path="/" element={<Notepad />} />
       
          </Routes>

      

        </div>
    </Router>



  );
};

export default App;
          {/* <div className="bg-gray-100">
            <div>
              <ImageCard />
            </div>
            <div className='fixed top-5 z-20 right-3 flex flex-col gap-2 items-end'>
              <LinkIcon onClick={() => handleLinkClick()} />
              {isOpen && <LinkBar />}
            </div>
          </div> */}
