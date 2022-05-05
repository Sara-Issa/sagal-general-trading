import Nav from "./Components/nav";
import Footer from "./Components/footer";
import Home from "./Home";
import Notification from "./Components/notification";
import CopyRight from "./Components/copyRight";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Notification />
      <Nav />
      <Home />
      <Footer />
      <CopyRight />
    </div>
    </BrowserRouter>
  );
}

export default App
