import React from 'react';

export default function Header() {
    return (
        <header>
            <nav className="teal lighten-1">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">ToDo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Users</a></li>
                        <li><a href="#">ToDo list</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}