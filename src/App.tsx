import MainPage from './components/mainPage/MainPage';
import './index.scss';
import FavoritePage from "./components/favoritePage/FavoritePage";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import RentNow from "./components/rentNow/RentNow";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/favorites" element={<FavoritePage/>} />
              <Route path="/rent-now" element={<RentNow/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;