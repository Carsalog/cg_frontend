import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./Root";
import logger from "./services/logger";


// Import dependencies
import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./main.css"

// Import application
import App from './App';

logger.init();

ReactDOM.render(<Root><App /></Root>, document.getElementById("root"));
