import React from 'react';
import "./header.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Header()
{
    return(
        <div id="containerHeader">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
                Movie Finder
            </a>
        </div>
    )
}

export default Header;