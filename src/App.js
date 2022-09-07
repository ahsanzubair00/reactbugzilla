import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ProjectShow from './components/ProjectDetail/ProjectShow';
import ProjectList from './components/HomePage/ProjectList';
import NavBar from './components/LayoutComponent/NavBar';


function App() {
  return ( 
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ProjectList/>} />
        <Route path="/projects/:id" element={<ProjectShow/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
