import React from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import './index.css';
import TextForm from './components/TextForm';
import Clipboard from './components/clipboard'
// import SynonymFinder from "./SynonymFinder";

export default function App() {
  return (
    <React.StrictMode>
      <Navbar navTitle="Mayur" Home="Projects" />
      {/* <SynonymFinder /> */}
      <div className='container my-3'>
      <TextForm />
      </div>
      {/* <About /> */}
    </React.StrictMode>
  );
}
