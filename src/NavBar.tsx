function NavBar() {
  const backgroundStyle = {
    backgroundImage: `url('https://www.gempool.ie/images/uploads/women_in_tech_ireland.jpg')`, // Replace with your actual background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    filter: 'blur(8px)', // Adjust the blur effect as needed
  };

  const contentStyle = {
    paddingTop: '80px', // Adjust padding to keep content below navbar
  };

  return (
    <div>
      <div style={backgroundStyle}></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={contentStyle}>
        <div className="container-fluid">
          <div className="navbar-content">
            <h1><i>HIRE MATE - An Interactive Job Application System</i></h1>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active btn btn-primary btn-lg rounded-0" // Added rounded-0 for square shape
                      aria-current="page"
                      href="/home"
                      style={{ color: 'black' }} // Text color set to black
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link btn btn-success btn-lg rounded-0" // Added rounded-0 for square shape
                      href="/login"
                      style={{ color: 'black' }} // Text color set to black
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link btn btn-info btn-lg rounded-0" // Added rounded-0 for square shape
                      href="/signup"
                      style={{ color: 'black', display: 'block', width: '100%' }} // Block level and full width
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
