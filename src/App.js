import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "../src/pages/home/Home"
import List from "./pages/list/List"
import Single from "./pages/single/Single";
import { BrowserRouter , Routes, Route } from 'react-router-dom';


const App = () => {
  return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/list" element={<List/>}/>
              <Route path="/single" element={<Single/>}/>
            </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;
