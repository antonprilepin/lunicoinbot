import './App.css';

function SignIn() {
    return (
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
    );
  }
  
  export default SignIn;
  