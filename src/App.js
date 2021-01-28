import React from 'react';

import bg3 from './components/img/bg3.jpg'
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header title = "This is title" descr = "This is Description!"/>
      <Layout title = "This is title" descr = "This is Description!" id = "layout1" urlBg = {bg3} />
      <Layout title = "This is title" descr = "This is Description!" id = "layout2" colorBg = "#ff0000"/>
      <Layout title = "This is title" descr = "This is Description!" id = "layout3" urlBg = {bg3}/>
      <Footer/>

    </>
  );
}

export default App;
