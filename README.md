
<img style="width: 50%; margin-left: 25%;" src="./src/assets/img/logo570x220.png" alt="SMPT Santa Monica Physical Therapy Orthopedic & Sports Physical Therapy">

_SMPT website & build tools_ 


## Installation

Project uses node server environment. If you haven't already, install [Node.js](https://nodejs.org/en/download/) 
- To verify Node installation, enter at command line: `node --version`
1. Download repository and unzip
2. Install dependencies:
   - Using Command Line (Win: cmd or powershell, Mac: terminal) navigate to application directory e.g. `cd downloads/SMPT-master`
   - From within application directory, enter at command line: `npm i`  
   
<div style="width: 90%; margin: auto; padding-top: 1em; border-bottom: 2px solid #eeeeee"></div>

## Using Application

HTML, SCSS, and Javascript files for editing are stored in `src` directory.  
Additional files for upload without processing website are in `src/assets` directory.
Temporary build files stored in `build` directory
Processed files output to `publish` directory

### Scripts
 Use npm scripts at Command Line from within application directory
##### Build 
`npm run build`  
Processes `src` directory with the following step:  
-clean: empties build directory and publish/assets.
-sass: compile SCSS to CSS and output to build directory.
-autoprefix: add vendor prefixes for higher browser compatibility to css in build directory and output to publish.
-babel: compile JavaScript to ES5 for higher browser compaitibility and output to publish directory.
-copy: moves additional files to publish directory

##### Deploy
`npm run deploy`
Upload `publish` directory to gh-pages branch of GitHub repository. 
- Must run `npm run build` before deploying.
- Must be a contributer to desired repository
- `package.json` should contain correct "homepage" and "repository" url.  

<div style="width: 90%; margin: auto; padding-top: 1em; border-bottom: 2px solid #eeeeee"></div>

