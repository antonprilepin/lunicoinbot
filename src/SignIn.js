import './SignIn.css';

function SignIn() {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="navbar-icons">
                        <img src={settingsIcon} alt="Settings" />
                        {/* Сюда нужно будет добавить иконки */}
                    </div>
                </nav>
            </header>
            <div className='bg'>
                <h1>Sam PIDOR</h1>
            </div>
        </div>
    );
}

export default SignIn;
