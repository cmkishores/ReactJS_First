import React from 'react';
import ReactDOM from 'react-dom';


function PrintList() {
    return (
    <div style={{padding:50}}>
     <ul>
        <li> Element one</li>
        <li> Element Two</li>
        <li> Element Three reload</li>
     </ul>
    </div> );
}


ReactDOM.render(<PrintList />,document.getElementById('root'));
