// react imports
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

// components 
import Create from "./pages/create/Create";
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';

// styles
import './App.css';


function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/create' component={Create}/>
          <Route path='/search' component={Search}/>
          <Route path='/recipes/:id' component={Recipe}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
