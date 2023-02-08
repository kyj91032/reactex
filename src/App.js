import './App.css';
import { Routes, Route, Link } from 'react-router-dom'; // 라우터

import First from './album/First.js';
import Second from './album/Second.js';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setMenuOpen } from './store';

import Modal from './components/Modal.js';



function App() {


  let state = useSelector((state) => { return state })

  let dispatch = useDispatch()

  let a = state.menuOpen ? 'active2' : '' // 사이드 바 main을 크게
  let b = state.menuOpen ? 'active' : '' // 사이드 바 bar를 옆으로

  const [modalOpen, setModalOpen] = useState(false); // modal을 on/off함
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  

  useEffect(()=>{
  })

  return (
    <div className="App" >

      <ul className={"bar "+b}>
        <li><a className="title" href="/">Black Skirt</a></li>
        <li><a href="1">정규 1집 [201]</a></li>
        <li><a href="2">정규 2집 [Don't You Worry Baby]</a></li>
        <li><a href="31">3집 PART 1 [TEAM BABY]</a></li>
        <li><a href="32">3집 PART 2 [THIRSTY]</a></li>
        <li><a href="33">3집 PART 3 [TEEN TROUBLES]</a></li>
        <li><a href="4">Hidden Track</a></li>
      </ul>

      <Routes>
        <Route path="/" element={
          <>
            <div className={"main "+ a}>
              <button onClick={()=>{
                dispatch(setMenuOpen())
              }}>{state.menuOpen ? 'open' : 'close'}</button>
              안녕하세요
              <button onClick={openModal}>팝업</button>
              <Modal open={modalOpen} close={closeModal}></Modal>
            </div>
          </>
        }/>

        <Route path="/1" element={
          <First/>
        }/>

        <Route path="/2" element={
          <Second/>
        }/>

      </Routes>
    </div>
  );
}





export default App;
