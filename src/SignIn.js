import React, { useState } from 'react';
import './SignIn.css';

function SignIn() {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div>
            <div className='text-container'>
                <h1 className='title-text'>Вход с помощью фразы восстановления</h1>
                <p className='text'>Пожалуйста, введите фразу восстановления, связанную с аккаунтом.</p>
            </div>
            <div className='container'>
                <div className={`input-wrapper ${isFocused ? 'input-focused' : ''}`}>
                    <input
                        className='input'
                        type="text"
                        placeholder='Введите фразу восстановления*'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <span className='placeholder'>Введите фразу восстановления*</span>
                </div>
                <button className='continue-button'>Далее</button>
            </div>
        </div>
    );
}

export default SignIn;
