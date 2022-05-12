import Nav from "./Components/nav";
import Footer from "./Components/footer";
import Home from "./Home";
import Notification from "./Components/notification";
import CopyRight from "./Components/copyRight";
import BuildingMaterials from "./Components/buildingMaterials";
import Electricity from "./Components/electricity";
import Plumbing from "./Components/plumbing";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Notification />
      <Nav />
    <Routes>
    <Route path="/buildingMaterials" element={<BuildingMaterials />} />
    <Route path="/electricity" element={<Electricity />} />
    <Route path="/plumbing" element={<Plumbing />} />
    <Route exact path="/" element={<Home />} />
    </Routes>
    <Footer />
      <CopyRight />
    </BrowserRouter>
  );
}

export default App
