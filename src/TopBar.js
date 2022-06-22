import React from 'react';
import Search from '@mui/icons-material/Search';
import "./TopBar.css";

export default function TopBar() {
  return(
  <div className='top' >
    <div className='topleft'>
      <h2> Food Card🍕🍟</h2>
    </div>
    <div className='topCenter'>
    <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search "
            className="searchInput"
          />
        </div>
    </div>
   <div className='topright'>
    <ul className='topList'>
           {/* <li className='topListItem'>Home </li>
            <li className='topListItem'> Login</li>*/}
        </ul>    
  </div>
  </div>
  );
}


