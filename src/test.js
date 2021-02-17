// DO NOT EDIT! 
// This doc was auto generated from ./src/scripts/build-appjs.js 
// Sun Dec 13 2020 11:02:04 GMT-0800 (Pacific Standard Time)
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './styles/index.scss';
import './styles/App.scss';

// Required for Auro Web Components
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './components/side-nav';

// import resources for markdown docs from ./src/content/markdown
// export classes from ./src/content/docsExport.js
// then add the appropriate Route below
import { 
Ch1Why, 
Ch2Why, 
NowWhatInspiration, 
Preface, 
Toc, } from './content/docsExport';

function App() {
  return (
    <main className="main-wrapper">
      <Header />
      <div className="wrapper">
        <input id="menuCheckbox" type="checkbox" className="menuCheckbox util_displayHiddenVisually"></input>
        <label htmlFor="menuCheckbox" className="menuCheckbox--label">
          <img className="menuIcon" src="https://img.icons8.com/material/24/000000/menu--v1.png" alt="icon"></img>
          <img className="closeIcon" width="24" src="https://img.icons8.com/material/26/000000/multiply--v1.png" alt="icon"></img>
        </label>

        <Router>
          <ScrollToTop />
          <SideNav />
          <Switch>

            {/* Preface */}
            <Route exact path='/' component={Preface} />

            {/* book */}
            
<Route exact path="/Ch1Why"><Ch1Why /></Route>
<Route exact path="/Ch2Why"><Ch2Why /></Route>
<Route exact path="/NowWhatInspiration"><NowWhatInspiration /></Route>
<Route exact path="/Preface"><Preface /></Route>
<Route exact path="/Toc"><Toc /></Route>

            <Route path="*"><NotFound /></Route>

          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
    