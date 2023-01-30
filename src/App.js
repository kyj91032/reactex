import './App.css';
import { Routes, Route, Link } from 'react-router-dom'; // 라우터

import First from './album/First.js';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  let a = menuOpen ? 'active2' : ''

  return (
    <div className="App">
      <ul className={menuOpen ? 'active' : ''}>
        <li><a class="title" href="/">Black Skirt</a></li>
        <li><a href="1">정규 1집 [201]</a></li>
        <li><a href="2">정규 2집 [Don't You Worry Baby]</a></li>
        <li><a href="31">3집 PART 1 [TEAM BABY]</a></li>
        <li><a href="32">3집 PART 2 [THIRSTY]</a></li>
        <li><a href="33">3집 PART 3 [TEEN TROUBLES]</a></li>
        <li></li>
      </ul>

      <Routes>
        <Route path="/" element={
          <>
            <div className={"main "+ a}>
              <button onClick={()=>{
                setMenuOpen(menuOpen=>!menuOpen)
              }}>{menuOpen ? 'open' : 'close'}</button>
              안녕하세요
            </div>
          </>
        }/>

        <Route path="/1" element={
          <First/>
        }/>
      </Routes>


    </div>
  );
}





export default App;
