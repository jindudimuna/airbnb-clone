import React from 'react';
import Pic from './Group.png'

function Main(){
    return(
        <div className='group'>
            <div className='pics'>
            <img src={Pic} alt='Group' width='395.91px' height='232px'></img>
            </div>
            <div className='title'>
                <h1 className='main-text'>Online Experiences</h1>
                <p className='sub-text'>Join unique interactive activities led by
                 one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}


export default Main;