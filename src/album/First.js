import { useState } from 'react';
import data1 from './../data/data1.js'

function First(props){

  let [songdata] = useState(data1)
  console.log(songdata)

  let a = props.menuOpen ? 'active2' : ''

  return (
    <>
    <div className={"main "+ a}>
      <div>
        <div className="img"></div>
        <div className="imgd">
          <h3>정규 1집 [201]</h3>
          <ul className="des">
            <li>발매일 2010.03.18</li>
            <li>장르 인디음악, 록/메탈</li>
            <li>발매사 YG PLUS</li>
            <li>기획사 도기리치, 비스포크</li>
          </ul>
          <button className="oc" onClick={()=>{
                props.setMenuOpen(!props.menuOpen);
              }}>{props.menuOpen ? 'open' : 'close'}
          </button>
        </div>
        <div className="track">
          <h3>Track</h3>
          <div className="songmenu">
            <div className="smn">번호</div><div className="smi">곡정보</div><div className="sml">듣기</div>
          </div>
          {
            songdata.map((a, i)=>{
              return (
                <div className="songlist">
                  <div className="sln">{songdata[i].id}</div><div className="sli">{songdata[i].title}</div><div className="sll">z</div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
    </>
  )
}

export default First;