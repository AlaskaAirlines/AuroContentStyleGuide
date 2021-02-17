const { resolve, normalize } = require('path');
const { readdir } = require('fs').promises;
const fs = require('fs');
const path = require('path');

async function* getFiles(dir) {

  const dirents = await readdir(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);

    if (dirent.isDirectory()) {
      yield* getFiles(normalize(res));
    } else {
      yield res.replace(/\\/g, '/');
    }
  }
}

const getFile = (filePath) => {
    const dirs = filePath.split('/');

    return dirs[dirs.length -1];
}

const getImportName = (filePath) => {
    const file = getFile(filePath);
    let name = file.split('.')[0];

    let camelCased = name.replace(/-([a-z])/g,
    function (letter) {
      return letter[1].toUpperCase();
    });

    const PascalCaseName = camelCased.charAt(0).toUpperCase() + camelCased.substring(1);

    return PascalCaseName;
};

const getPathName = (filePath) => {
  const file = getFile(filePath);
  let dirPath = filePath.split('/pages/')[1].split('.')[0]
  return dirPath;
};

const buildImportDeconstruction = (docsPath) => {
  let importText = "";

  docsPath.forEach(i => {
    importText += `\n${getImportName(i)}, `
  })

  return importText
}

const buildRouter = (docsPath) => {
  let importText = "";

  docsPath.forEach(i => {
    importText += `<Route exact path="/${getPathName(i)}"><${getImportName(i)} /></Route>`
  })

  return importText
}

(async () => {
    const docs = [];
    for await (const file of getFiles('./src/content/pages')) {
      const currentPath = path.join(__dirname, '../src/content')

      if(file.includes('.md')) docs.push(file.split(currentPath)[1]);
    }

    const docsText = `// DO NOT EDIT! \n// This doc was auto generated from ./src/scripts/build-appjs.js \n// ${new Date()}\nimport React from 'react';\n
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './styles/index.scss';
import './styles/App.scss';

// Required for Auro Web Components
import '@alaskaairux/design-tokens/dist/tokens/CSSCustomProperties.css';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './side-nav';

// import resources for markdown docs from ./src/content/markdown
// export classes from ./src/content/docsExport.js
// then add the appropriate Route below
import { ${buildImportDeconstruction(docs)}} from './content/docsExport';

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

            {/* Home */}
            <Route exact path='/' component={Home} />

            {/* book */}
            ${buildRouter(docs)}

            <Route path="*"><NotFound /></Route>

          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
    `;

    // this function creates the output file needed
    fs.writeFile("./src/App.js", docsText, (err) => {

        if(err) return console.log(err);

        console.log("The file was saved!");
    });

  })()
