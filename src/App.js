import './App.css';
import { Route } from 'react-router-dom'
import { Pages } from './Pages';
import { Header } from './components/header';
import { Footer } from './components/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      {Pages.map(page=>{
        return (
        <Route
          path={page.path}
          component={page.component}
          key={page.path}
          exact
        ></Route>
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
