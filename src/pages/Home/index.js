import React from "react";
import { Link } from "react-router-dom";
import Sci from "./sci/science.png";


const styles = {
    cardStyle: {
        margin: "0px auto",
        width: "50%"
    }
};

function Home() {
    return(
        <main>
            <div id="home" className="card border-0" style={styles.cardStyle}>
                <img src={Sci} className="card-img-top text-light" alt="a blue oval containing the underlined words 'Science-rific Labs'"/>
                <div className="card-body pt-0">
                    <h2 className="card-title btn fs-2 border-dark border-3 rounded-pill bg me-2"><Link to="/science-rific-labs/sign-up" className="text-decoration-none text-reset">Sign Up</Link></h2>
                    <h2 className="card-title btn fs-2 border-dark border-3 rounded-pill bg me-2"><Link to="/science-rific-labs/login" className="text-decoration-none text-reset">Login</Link></h2>
                    <h2 className="card-title btn fs-2 border-dark border-3 rounded-pill bg"><Link to="/science-rific-labs/choose" className="text-decoration-none text-reset">Continue as Guest</Link></h2>
                </div>
            </div>
        </main>
    );
}

export default Home;
