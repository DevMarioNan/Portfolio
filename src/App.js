
import './App.css';
import FullPage from './components/FullpageScroll/FullPage';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  
  return (
    <>
    <FullPage />
    <Analytics />
    </>
  );

}

export default App;
