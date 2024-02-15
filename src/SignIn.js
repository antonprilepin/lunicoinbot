import React from 'react';
import './SignIn.css';

function SignIn() {
    return (
      <div>
        <h1 className='title-text'>Вход с помощью <br/> фразы восстановления</h1>
        <p className='podtitle-text'>Пожалуйста, введите фразу восстановления, связанную с аккаунтом.</p>
        <input className='input-pole' oninput="this.setAttribute('placeholder', this.value);" type="text" placeholder='Введите фразу восстановления*'></input>
        <br/>
        <button className='continue-button'>Далее</button>
      </div>
      
    );
  }
  
  export default SignIn;
  