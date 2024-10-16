import {Routes, Route} from "react-router-dom";
import Index from "./pages/index";
import Sub1 from "./pages/Sub1";
import Sub2 from "./pages/Sub2";
import Sub3 from "./pages/Sub3";
import Sub4 from "./pages/Sub4";
import Sub5jQuery from "./pages/Sub5jQuery";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./styles/common.scss"
function App() {
  return (
    <>
    {/* <SiteHeader/> */}
    <Routes>
      <Route path="/index" element={<Index/>} />
      <Route path="/" element={<Sub5jQuery/>} />
      <Route path="/sub2" element={<Sub2/>} />
      <Route path="/sub3" element={<Sub3/>} />
      <Route path="/sub4" element={<Sub4/>} />
    </Routes>
    {/* <SiteFooter/> */}
    </>
  );
}

export default App;
