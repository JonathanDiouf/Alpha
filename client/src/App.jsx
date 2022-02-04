import './App.css';

//components
import { Results} from './pages/Results/Results';
import {Shop} from './pages/Shop/Shop';
import {Rankings} from './pages/Rankings/Rankings';
import {Stat} from './pages/Stat/Stat';
import {History} from './pages/History/History';
import {News} from './pages/News/News';
import {Home} from './pages/Home/Home.jsx';
import {Quizz} from './pages/Quizz/Quizz';
import {Forum} from './pages/Forum/Forum';
import {Fantasy} from './pages/Fantasy/Fantasy';
import {Account} from './pages/Account/Account';
import {Fixtures} from './pages/Fixtures/Fixtures';

//Dependencies
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Fantasy" element={<Fantasy/>}/>
      <Route path="/Forum" element={<Forum/>}/>
      <Route path="/Stat" element={<Stat/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Results" element={<Results/>}/>
      <Route path="/Rankings" element={<Rankings/>}/>
      <Route path="/Quizz" element={<Quizz/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Fixtures" element={<Fixtures/>}/>
      <Route path="/Account" element={<Account/>}/>
      <Route path="/History" element={<History/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
