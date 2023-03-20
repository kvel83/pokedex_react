import React from "react";

import "./loadingSpinner.css";

const LoadingSpinner = () =>{
    return (
        <div className="spinner-container">
          <div className="loading-spinner">
            <img src="https://media.tenor.com/SH31iAEWLT8AAAAj/pikachu-running.gif" alt="pikachu" />
          </div>
        </div>
      );
}

export default LoadingSpinner;