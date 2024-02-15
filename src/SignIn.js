import React from 'react';
import './SignIn.css';

function SignIn() {
    return (
        <div>
            <div className='container'>
                <h1 className='title-text'>Вход с помощью <br /> фразы восстановления</h1>
                <p className='text'>Пожалуйста, введите фразу восстановления, связанную с аккаунтом.</p>
                <input className='input-pole' oninput="this.setAttribute('placeholder', this.value);" type="text" placeholder='Введите фразу восстановления*'></input>
                <br />
                <button className='continue-button'>Далее</button>
            </div>
        </div>

    );
}

export default SignIn;
