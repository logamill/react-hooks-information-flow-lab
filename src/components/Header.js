import React from 'react';

function Header({ changeMode, mode }) {

    
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={changeMode}>
            {mode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;