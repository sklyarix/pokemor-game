import {useRouteMatch,Route,Switch, Redirect} from 'react-router-dom';

import cn from 'classnames';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFoundPage from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer/Footer';



import s from './style.module.css';




const App = () => {
  const match = useRouteMatch('/');
  return(
    
      <Switch>
        <Route path="/404" component={NotFoundPage} render={()=>(
          <h1>404 Not Found</h1>
        )} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>
            <div className={cn(s.wrap,{
              [s.isHomePage]: match.isExact
            })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={()=>(
                  <Redirect to="/404"/>
                )}/>
              </Switch>
            </div>
            <Footer/>
          </>
        </Route>
        
      </Switch>
  );
};

export default App;