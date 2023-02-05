
import './App.css';
import FullPage from './components/FullpageScroll/FullPage';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <FullPage />
  );
}

export default App;
