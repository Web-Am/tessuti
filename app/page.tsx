'use client'

import { useState } from 'react';

export default function Home() {

  const [hambu, setHambu] = useState("");

  const onHide = (e: any) => {

    e.preventiveDefaults();
    document.getElementById("navbarResponsive")?.classList.remove("show")
    setHambu("");
  }

  return <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand bg-white text-dark rounded p-2" href="#page-top">Silvia - Tessuti</a>
        <button className="bg-white border-0 p-0" style={{ outline: '0px !important' }}
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
          <div id="burger-container" className={"d-md-none " + hambu}
            onClick={e => setHambu(old => { return old == "" ? "open" : ""; })}>
            <div id="burger">
              <span> &nbsp;</span>
              <span> &nbsp;</span>
              <span> &nbsp;</span>
              <span> &nbsp;</span>
            </div>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">

          <ul className="navbar-nav bg-white rounded d-flex align-items-center ms-auto my-2 my-lg-0" >
            <li className="nav-item"><a onClick={onHide} className="nav-link text-dark" href="#about" >About</a></li>
            <li className="nav-item"><a onClick={onHide} className="nav-link text-dark" href="#services">Services</a></li>
            <li className="nav-item"><a onClick={onHide} className="nav-link text-dark" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a onClick={onHide} className="nav-link text-dark" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link bg-dark p-1 m-2 text-white rounded" href="/login">Accedi</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">Il posto preferito da molti per cominciare a danzare coi tessuti</h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">Comincia da qui!</p>
            <a className="btn btn-primary btn-xl" href="#about">Vedi di più</a>
          </div>
        </div>
      </div>
    </header>
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Vuoi provare questa nuova arte</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">Unisciti a noi, prova gratuita e poi si vola!</p>
            <a className="btn btn-light btn-xl" href="#contact">Scrivimi!</a>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Servizi</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
              <h3 className="h4 mb-2">Altezza</h3>
              <p className="text-muted mb-0">Impariamo per volare alto!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
              <h3 className="h4 mb-2">Costanza</h3>
              <p className="text-muted mb-0">Miglioramenti continui</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
              <h3 className="h4 mb-2">Figure</h3>
              <p className="text-muted mb-0">Comporre figure aeree manifiche</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
              <h3 className="h4 mb-2">Passione</h3>
              <p className="text-muted mb-0">Per coloro che c hanno il fuoco dentro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-6" style={{ maxHeight: 600 }}>
            <a className="portfolio-box w-100" style={{ maxHeight: 600, objectFit: 'cover' }} href="assets/projects/1.png" title="1">
              <img className="img-fluid w-100" style={{ maxHeight: 600, objectFit: 'cover' }} src="assets/projects/1.png" alt="..." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">1</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6" style={{ maxHeight: 600 }}>
            <a className="portfolio-box w-100" style={{ maxHeight: 600, objectFit: 'cover' }} href="assets/projects/2.png" title="P2">
              <img className="img-fluid w-100" style={{ maxHeight: 600, objectFit: 'cover' }} src="assets/projects/2.png" alt="..." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">P2</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6" style={{ maxHeight: 600 }}>
            <a className="portfolio-box w-100" style={{ maxHeight: 600, objectFit: 'cover' }} href="assets/projects/3.png" title="P3">
              <img className="img-fluid w-100" style={{ maxHeight: 600, objectFit: 'cover' }} src="assets/projects/3.png" alt="..." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">P3</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6" style={{ maxHeight: 600 }}>
            <a className="portfolio-box w-100" style={{ maxHeight: 600, objectFit: 'cover' }} href="assets/projects/1.png" title="Project Name">
              <img className="img-fluid w-100" style={{ maxHeight: 600, objectFit: 'cover' }} src="assets/projects/1.png" alt="..." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6" style={{ maxHeight: 600 }}>
            <a className="portfolio-box w-100" style={{ maxHeight: 600, objectFit: 'cover' }} href="assets/projects/2.png" title="Project Name">
              <img className="img-fluid w-100" style={{ maxHeight: 600, objectFit: 'cover' }} src="assets/projects/2.png" alt="..." />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6" style={{ maxHeight: 600 }}>
            <a className="portfolio-box w-100" style={{ maxHeight: 600, objectFit: 'cover' }} href="assets/projects/3.png" title="Project Name">
              <img className="img-fluid w-100" style={{ maxHeight: 600, objectFit: 'cover' }} src="assets/projects/3.png" alt="..." />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <section className="page-section bg-dark text-white">
      <div className="container px-4 px-lg-5 text-center">
        <h2 className="mb-4">Vi ho convinti, pronti a cominciare?</h2>
        <a className="btn btn-light btn-xl" href="#contact">Scrivimi!</a>
      </div>
    </section>

    <section className="page-section bg-dark text-white">
      <div className="container px-4 px-lg-5 text-center">
        <h2 className="mb-4">EVENTI?</h2>
        <h6 className="mb-4">Lista eventi..</h6>
      </div>
    </section>


    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let s Get In Touch!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                <label htmlFor="name">Full name</label>
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                <label htmlFor="email">Email address</label>
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                <label htmlFor="phone">Phone number</label>
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                <label htmlFor="message">Message</label>
                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div>
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
              <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
            </form>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+39 123-45 67 67 </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-light py-5">
      <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Copyright &copy; 2023 - Silvia</div></div>
    </footer>
  </div>
}
