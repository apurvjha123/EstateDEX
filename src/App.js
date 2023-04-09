import Navbar from "./Components/Navbar";
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Form from "./Components/Form";
import Properties from "./Components/Properties";
import Temp from "./Components/Temp";
import Isforsale from "./Components/Isforsale";
import DepositeFunds from "./Components/DepositeFunds";
import Transact from "./Components/Transact";
import Homes from "./Components/Homes";

export default function Home() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
      <Route exact path="/" element={<Homes/>}/>
          <Route exact path="/form" element={<Form/>}/>
          <Route exact path="/properties" element={<Properties/>}/>
          <Route exact path="/temp" element={<Temp/>}/>
          <Route exact path="/sale" element={<Isforsale/>}/>
          <Route exact path="/deposite" element={<DepositeFunds/>}/>
          <Route exact path="/transact" element={<Transact/>}/>
      </Routes>
    </BrowserRouter>
  );
}
