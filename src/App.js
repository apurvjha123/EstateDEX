import Navbar from "./Components/Navbar";
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Form from "./Components/Form";
import Properties from "./Components/Properties";

export default function Home() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route exact path="/form" element={<Form/>}/>
          <Route exact path="/properties" element={<Properties/>}/>
      </Routes>
    </BrowserRouter>
  );
}
