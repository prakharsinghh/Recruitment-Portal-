function Signup() {
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    {/* Image Section */}
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 mb-4 mb-lg-0">
                      <img
                        src="https://www.modicollege.com/wp-content/uploads/2014/01/Placements-1024x712.jpg"
                        className="img-fluid"
                        alt="Sample image"
                        height="300"
                      />
                    </div>
  
                    {/* Signup Form Section */}
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
  
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="htmlForm-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="htmlForm3Example1c"
                              className="htmlForm-control"
                            />
                            <label
                              className="htmlForm-label"
                              htmlFor="htmlForm3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
  
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="htmlForm-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="htmlForm3Example3c"
                              className="htmlForm-control"
                            />
                            <label
                              className="htmlForm-label"
                              htmlFor="htmlForm3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
  
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="htmlForm-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="htmlForm3Example4c"
                              className="htmlForm-control"
                            />
                            <label
                              className="htmlForm-label"
                              htmlFor="htmlForm3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
  
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="htmlForm-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="htmlForm3Example4cd"
                              className="htmlForm-control"
                            />
                            <label
                              className="htmlForm-label"
                              htmlFor="htmlForm3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>
  
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
