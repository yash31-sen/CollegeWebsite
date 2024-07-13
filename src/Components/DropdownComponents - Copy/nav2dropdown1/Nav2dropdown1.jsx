import React from 'react';
import './Nav2dropdown1.css';

export default function Nav2dropdown1() {
    return (
        <div className="nav2dropdown1-main">
            <div className="nav2dropdown1">
                <div className="nav2dropdown1-images">
                    {/* Grid with 6 rows and 2 columns */}
                    <div className="image-item">Image 1</div>
                    <div className="image-item">Image 2</div>
                    <div className="image-item">Image 3</div>
                    <div className="image-item">Image 4</div>
                    <div className="image-item">Image 5</div>
                    <div className="image-item">Image 6</div>
                </div>
                <div className="nav2dropdown1-content">
                    {/* 8 li elements with UI */}
                    <ul>
                        <li className="content-item">UI Content 1</li>
                        <li className="content-item">UI Content 2</li>
                        <li className="content-item">UI Content 3</li>
                        <li className="content-item">UI Content 4</li>
                        <li className="content-item">UI Content 5</li>
                        <li className="content-item">UI Content 6</li>
                        <li className="content-item">UI Content 7</li>
                        <li className="content-item">UI Content 8</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
