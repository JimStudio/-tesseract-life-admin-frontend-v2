import Styles from '../styles/Nav.module.css'

export default function Nav(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" width="30" height="30" className={Styles.image_test}></img>
                       
                      <span className='text-light'>workflow</span></a>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span></button> */}
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link text-light" href="#">Projects</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link text-light" href="#">Click Up</a>
                                             </li>
                                             <li className="nav-item">
                                                <a className="nav-link text-light" href="#">Team</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    )
                }