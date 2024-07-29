import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CreatePost from './components/CreatePost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import Viewmypost from './components/Viewmypost';

function App() {
  return (
    <div >
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
        <Route path='/viewmypost' element={<Viewmypost/>}/>
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
