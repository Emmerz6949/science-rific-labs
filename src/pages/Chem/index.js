import React, { Component } from "react";
import Pink from './flasks/pinkSolutionFlask.png';
import Clear from './flasks/clearSolutionFlask.png';
import PinkOff from './flasks/pinkSolutionFlaskOffPlate.png';

const styles = {
    divStyle: {
        width: "50%"
    },
    imgStyle: {
        width: "15%"
    }
};

class Chem extends Component {

    state = {
        hotPlate: false,
        heated: false
    }

    render() {
        return(
            <main>
                <div className="mx-auto mt-5 bg" style={styles.divStyle}>
                    <h2 className="text-decoration-underline">Chemistry Experiment</h2>
                    <p className="fw-bold">
                        This expermint utilizes a hot plate, and a solution made up of 500ml of water, a drop of concentrated ammonia,
                         and a few drops of phenolphthalein indicator. At room temperature the solution will be pink due to the pH of the concentrated ammonia.
                    </p>
                    <img src={Pink} className="pb-3 bg" style={styles.imgStyle} alt="a flask containing a pink solution" />
                    <p className="fw-bold">
                        Now let's try heating the solution using the hot plate!
                    </p>
                </div>
            </main>
        );
    }
}

export default Chem;
