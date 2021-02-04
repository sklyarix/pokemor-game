import {useState} from 'react'
import GamePage from './routes/Game';
import HomePage from './routes/Home';
//import ContactPage from './routes/Contact';
//import AboutPage from './routes/About';

const App = () => {
  const[page,setPage] = useState('app');

  const handleChangePage = (page) => {
    console.log('###:<App/>');
    setPage(page);
  }

  switch (page) {
    //case 'about':
      //return <AboutPage onChangePage={handleChangePage}/>
    //case 'contact':
      //return <ContactPage onChangePage={handleChangePage}/>
    case 'app':
      return <HomePage onChangePage={handleChangePage}/>
    case 'game':
      return<GamePage onChangePage={handleChangePage}/>
    default:
      return <HomePage onChangePage={handleChangePage}/>
  }
};

export default App;