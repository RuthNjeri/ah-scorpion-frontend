import React from 'react';
import { Link } from 'react-router-dom';
import * as Ruth from '../assets/images/ruth.jpg';
import * as Hos from '../assets/images/hos.jpg';
import * as Chim from '../assets/images/face1.jpg';

const Home = () => (
  <div>
    <div className="text-center home-banner">
      <div className="container">
        <div className="row">
          <div className="py-5 col-md-12">
            <h1 className="display-4 text-white">Authors Haven</h1>
            <h3 className="text-white">
              Big Ideas
            </h3>
            <Link to="Login" className="btn mx-1 btn-secondary">Login</Link>
            <Link to="SignUp" className="btn btn-primary mx-1">Signup</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-5 bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <h4 className="text-primary">Featured Categories</h4>
            <ul className="list-group">
              <Link to="#technology">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Technology
                  <span className="badge badge-pill badge-secondary">312</span>
                </li>
              </Link>
              <Link to="#technology">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  Lifestyle
                  <span className="badge badge-pill badge-secondary">299</span>
                </li>
              </Link>
              <Link to="#science">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  Science
                  <span className="badge badge-pill badge-secondary">259</span>
                </li>
              </Link>
              <Link to="#finance">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  Finance
                  <span className="badge badge-pill badge-secondary">258</span>
                </li>
              </Link>
              <Link to="#politics">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  Politics
                  <span className="badge badge-pill badge-secondary">254</span>
                </li>
              </Link>

            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="text-primary">Benefits And Features</h4>
            <div className="row text-left pl-5">
              <div className="col-md-6 my-3">
                <div className="row mb-3">
                  <div className="align-self-center col-10 col-md-12">
                    <h5 className="text-secondary">
                      Authentic
                      <span role="img" aria-label="">👌</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="row mb-3">
                  <div className="align-self-center col-10 col-md-12">
                    <h5 className="text-secondary">
                      Knowledgeable Authors
                      <span role="img" aria-label="">📚</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="row mb-3">
                  <div className="align-self-center col-10 col-md-12">
                    <h5 className="text-secondary">
                      Membership
                      <span role="img" aria-label="">💳</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="row mb-3">
                  <div className="align-self-center col-10 col-md-12">
                    <h5 className="text-secondary">
                      Affordable
                      <span role="img" aria-label="">💸</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="row mb-3">
                  <div className="align-self-center col-10 col-md-12">
                    <h5 className="text-secondary">
                      Amazing
                      <span role="img" aria-label="">😌</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <div className="row mb-3">
                  <div className="align-self-center col-10 col-md-12">
                    <h5 className="text-secondary">
                      Fun
                      <span role="img" aria-label="">🙌</span>
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-center bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-primary">Testimonials</h1>
              <p className="lead">We grow together with the community</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 p-4">
              <img className="img-fluid rounded-circle testimonials" src={Chim} alt="Chimammanda" />
              <p className="my-4">
                <i>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </i>
              </p>
              <p>
                <b>Chimammanda</b>
                <br />
                Senior writer
              </p>
            </div>
            <div className="col-md-4 p-4">
              <img className="img-fluid rounded-circle testimonials" src={Hos} alt="Hosluck" />
              <p className="my-4">
                <i>
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies
                  nec.
                  {' '}
                </i>
              </p>
              <p>
                <b>Hoslack</b>
                <br/>
                Reader
              </p>
            </div>
            <div className="col-md-4 p-4">
              <img className="img-fluid rounded-circle testimonials" src={Ruth} alt="Ruth" />
              <p className="my-4">
                <i>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Cum
                  sociis natoque penatibus et magnis
                  dis parturient montes.
                </i>
              </p>
              <p>
                <b>Ruth</b>
                <br />
                Reader
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Home;
