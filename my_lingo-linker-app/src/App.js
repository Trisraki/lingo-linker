import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;

