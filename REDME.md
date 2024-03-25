REACT
*it is very fast at dom manupulatiuon ---impppp , why react
*diff algorithm
*efficient dom maniupulation --episode -5  last section

A.Episode - Inception
react is a javascript code , it is hosted in npm also , we need to get this code

EPISODE 1 PART 1
  1.html:5 - it will give basic structure of html  - it prints hello world by using basic html structure
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nmasathe React</title>
</head>
<body>
    <h1>hello world</h1>
</body>
</html>

2.build hello world by using javascript
  *inside the script tag , we have to write a code 
  *firstwe have to create the tag <h1> by using js
  *<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nmasathe React</title>
</head>
<body>
    <div id="root">

    </div>
    <script>
        //create on tag
       const heading = document.createElement("h1");
       //append message 
       heading.innerHTML = "Hello World from js";

       //now put this heading inside id root  <div id="root"></div >
      // first find where is my root
       const root = document.getElementById("root")

       //put heading inside the root - by using append child
       root.appendChild(heading);
       //now heading will go inside the div as a child

       //it will print - Hello World from js  in the browser
    </script>
</body>
</html>

browser understand js code , but browser do not understand react code;
creat react into our project


3.get cdn link
 *what is cdn
  cdn is the place where the react library is getting hoisted
  content delivery network , these are the website , where the react has been hosted , we are just pulling react from ther to our project

       CDN stands for Content Delivery Network. It is a system of distributed servers that work together to deliver web content, such as images, scripts, stylesheets, and videos, to users based on their geographical location. The primary goal of a CDN is to improve the performance, reliability, and availability of web content.

Here's why CDNs are commonly used:

1. **Faster Content Delivery:** CDNs have servers distributed across various locations globally. When a user requests content, the CDN serves it from the nearest server, reducing latency and load times.

2. **Load Balancing:** CDNs distribute the load across multiple servers, preventing any single server from becoming overloaded. This ensures that content can be delivered quickly to a large number of users simultaneously.

3. **Improved Website Performance:** By caching static content on CDN servers, websites can reduce the load on their origin servers. This improves overall website performance and allows the origin server to focus on dynamic content.

4. **Increased Reliability:** CDNs enhance the reliability of a website by providing redundancy. If one server fails, requests can be automatically routed to another, ensuring continuous content delivery.

5. **Scalability:** CDNs help websites handle spikes in traffic, especially during events like product launches, news events, or promotions, by efficiently distributing the load among multiple servers.

6. **Security:** Some CDNs offer security features, such as DDoS protection, to help safeguard websites against malicious attacks.

7. **Cost Savings:** CDNs can potentially reduce bandwidth costs for website owners because they optimize the usage of network resources and reduce the load on the origin server.

Popular CDN providers include Cloudflare, Akamai, Amazon CloudFront, and others. Many websites, especially those with a global audience or high traffic volumes, leverage CDNs to provide a faster and more reliable user experience.


  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>  these are the link get it from cdn 


4.Now our project has react inside it
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nmasathe React</title>
</head>
<body>
    <div id="root">

    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
</html>

*now browser will understand , what is the react

5.what is crossorigin 
The `crossorigin` attribute in the provided script tag is used to specify how the browser should handle cross-origin requests when fetching the script file. When you include a script from a different origin (domain, protocol, or port), it is considered a cross-origin request.

Here's a breakdown of the attribute:

- `crossorigin`: This attribute is used to declare the CORS (Cross-Origin Resource Sharing) setting for the script. CORS is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources from another domain.

- `src="https://unpkg.com/react@18/umd/react.development.js"`: This part specifies the source URL from which the script file is being fetched. In this case, it's fetching the React library from the "https://unpkg.com" domain.

When you include scripts or resources from a different origin, the browser checks the CORS headers sent by the server hosting the resource. The `crossorigin` attribute can take different values:

- If `crossorigin` is set to an empty string (`crossorigin=""`), the browser will perform a CORS request, including the appropriate headers in the request, and the server needs to respond with the appropriate CORS headers indicating whether the request is allowed.

- If `crossorigin` is set to "anonymous", the browser will include the Origin header in the request but will not send any credentials (like cookies) along with the request. The server needs to respond with the appropriate CORS headers indicating whether the request is allowed from the requesting origin.

- If `crossorigin` is set to "use-credentials", the browser will include the Origin header and any credentials (like cookies) associated with the requesting origin. Again, the server needs to respond with the appropriate CORS headers indicating whether the request is allowed, taking credentials into account.

In the provided script tag, the `crossorigin` attribute is absent, which means it defaults to the behavior of making a same-origin request without credentials. If you encounter issues related to cross-origin requests, you may need to set the `crossorigin` attribute appropriately based on your CORS requirements and server configuration.

6.https://unpkg.com/react@18.2.0/umd/react.development.js  - in this package we have all code , written in js  , this code is written by some facebook developres
  it is having source code of react


7.what happend whebn we got react into the project?
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nmasathe React</title>
</head>
<body>
    <div id="root">

    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
</html>
 as soon as when we are injecting react code in to the project ,  


when you type react in developer console , browser identifies it is react code , it will give some result;
--> type  -- > react   enter
{Children: {…}, Fragment: Symbol(react.fragment), Profiler: Symbol(react.profiler), Component: ƒ, PureComponent: ƒ, …}


8.<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>  why there are two files?
In a typical React application, the React library and the ReactDOM library are two separate entities that work together.

1. **React.js (react.development.js):**
   - This library contains the core functionality of React. It includes the necessary APIs for defining and working with React components, managing component state, handling props, and the overall logic for building user interfaces.
   - When you write React components using JSX (JavaScript XML), the code gets translated into calls to React methods. This core React library is responsible for processing these calls and managing the component lifecycle.

2. **ReactDOM.js (react-dom.development.js):**
   - ReactDOM is a separate package that provides methods to interact with the DOM (Document Object Model). It includes functions for rendering React components into the DOM, updating the DOM in response to changes in the application state, and handling events.
   - The primary responsibility of ReactDOM is to bridge the gap between the virtual DOM managed by React and the actual DOM of the web page. It takes care of efficiently updating the real DOM based on the changes detected in the virtual DOM.

By having separate libraries, React becomes more versatile. For example, if you are working on a React Native project (which targets mobile app development), you won't need ReactDOM, as it's specific to web-based applications. The separation also allows for potential alternative rendering targets in the future.

When setting up a web application with React, it's common to include both the React and ReactDOM libraries. The script tags you provided fetch the development versions of these libraries from the specified URLs, allowing you to use React to define components and ReactDOM to render them in the browser's DOM. In production, you would typically use minified and optimized versions of these scripts for better performance.


9.<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
   this is the core file of react


 10.<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    it is the react library , which is useful for DOM operations 

11.why react made separate libraries 
 react doesnot work for browsers , react also work for mobile phones  (react native )
 so developer can able to console reactDOM

ReactDOM
{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {…}, createPortal: ƒ, createRoot: ƒ, findDOMNode: ƒ, flushSync: ƒ, …}

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

EPISODE 1 PART 2

1. build hello world program by using react 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nmasathe React</title>
</head>

<body>
    <div id="root">
    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        //how to create h1 tag as we used in js
        //this create element takes three argument , first one is what tag we need to create (h1),
        // next one is object , third one is  child that ( what i need to put in h1 tag (message) );
        //now we have created the heading
        //ceateElement  , it is the core concept , it is comming from "https://unpkg.com/react@18/umd/react.development.js">
        // {} , we can give attributes to a tab
        const heading = React.createElement("h1",{id:"name"},"hello world from react")

        //now we need to put this heading inside the div having id root
        //first we need to tell react that what is the root , where you need to render
        //react wants to have a root 
        //creating a root and rendering a something inside it , it is the job of react dom
        //when we have to put the h1 into a browser , dom is helping
        const root = ReactDOM.createRoot(document.getElementById("root"));

        //render inside this root
        root.render(heading);

    </script>
</body>

</html>

----------------------------------------------------------------------------------------------------------------------------
EPISODE1 PART 3
1.let us create new js file and write it in separate
  in App.js 
  const heading = React.createElement("h1", {}, "hello world from react")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

in index.html
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nmasathe React</title>
</head>

<body>
    <div id="root">
    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./App.js"> //just add path
       
    </script>
</body>

</html>

2.add csss
 *first impport stlessheet in index.html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./index.css" /> ///this
    <title>Nmasathe React</title>
</head>

*add atribute in js file
const heading = React.createElement("h1", {id:"name"}, "hello world from react")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

*now the id name is name
 add style in index.css
 .name{
color:red;
}

3 . when i console the heading 
const heading = React.createElement("h1", {id:"name"}, "hello world from react")
console.log(heading) //it not prints html elemrnt , it will print object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "name",
        "children": "hello world from react"  //it has props , which is having children and attribute what we have pass;
    },
    "_owner": null,
    "_store": {}
}
 
<div id="root"> //parent
<h1 id="name">hello world from react</h1> children
</div>

4.full flow 
const heading = React.createElement("h1", {id:"name"}, "hello world from react") //this will return an object  WHEN WE RENDER INTO REACDOM it will convert into element
console.log(heading) //it not prints html elemrnt , it will print object
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "name",
        "children": "hello world from react"  //it has props , which is having children and attribute what we have pass;
    },
    "_owner": null,
    "_store": {}
}
const root = ReactDOM.createRoot(document.getElementById("root"));

//when we do root.render() ; we are passing heading (react elemnt ) , 
//this render () takes this object and create h1 tag which the browswer understand , and put that up inside the root.
root.render(heading);

finally -- <div id="root"> //parent
<h1 id="name">hello world from react</h1> children
</div>
----------------------------------------------------------------------------------------------------------------
episode 1 part 4
1.how to create nested element? , 
inside React  React.createElement - fst one tag , second one attribute , third one child
<div id="parent">
    <div id="child">
        <h1>

        </h1>
    </div>
</div>

                                    tag    attribute        child of div is div   tag     attribute      child of div is h1, tag   attribute          child
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", { id: "heading" }, "hiiii h1")))
console.log('parent: ', parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

<div id="root">
<div id="parent">
<div id="child">
<h1 id="heading">hiiii h1</h1>
</div>
</div>
</div>


console.log(parent ) 
{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
        "id": "parent",
        "children": {
            "type": "div",
            "key": null,
            "ref": null,
            "props": {
                "id": "child",
                "children": {
                    "type": "h1",
                    "key": null,
                    "ref": null,
                    "props": {
                        "id": "heading",
                        "children": "hiiii h1"
                    },
                    "_owner": null,
                    "_store": {}
                }
            },
            "_owner": null,
            "_store": {}
        }
    },
    "_owner": null,
    "_store": {}
}

hence , React.createElement  is the object it becomes html elemnt which the browser understands while iot is rendering into the dom.

2.<div id="parent">
    <div id="child">
        <h1> hi 1</h1>
        <h1> hi 2</h1>
    </div>
</div>   how to create siblings of one child?


*we can convert this into an arry

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "hiiii h1"),
            React.createElement("h2", {}, "hiiii h2")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//but this is difficult if we have more complex structure thats why we are go with JSX which will be easy

-----------------------------------------------------------------------------------------------------------------
episode 1 , part 5
1.does order of html code matters?
yes 

<body>
    <div id="root">
    </div>
    <script src="./App.js"> //ifi write this abouve it will throw error that --  React is not defined
    </script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./App.js">
    </script>
</body>

therefore , order of these file always should be in sequence

2.if i alreday have children in root in index.html how it works?

<body>
    <div id="root">
        <h1>hii pooja</h1>  //already have
    </div>
    <script src="./App.js">
    </script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./App.js">
    </script>
</body>

if i try to render parent in js 
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "hiiii h1"),
            React.createElement("h2", {}, "hiiii h2")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

it works , it will show hiii h1 and hiii h2
 <div id="root">
        <h1>hii pooja</h1>  //it will show in fraction of second; when we refresh the page
    </div>


how it works 
*first browser reads the html , it will print hii pooja on the browser,
 <div id="root">
        <h1>hii</h1>
    </div>
    
*when i go to the script tag , it will load react and react dom
 <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

*then it will go to app.js 
then it will start executing line by line
    <script src="./App.js">
    </script>
 // when i do root.render() , it will replace by "hii pooja"


3.what if i have code in top of my root in html 
<body>
    <h1>geee</h1>
    <div id="root">
        <h1>hii</h1>
    </div>
    <div>jjjjj</div>
    
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./App.js">
    </script>
</body>

in js 
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "hiiii h1"),
            React.createElement("h2", {}, "hiiii h2")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//top and below code wont be replace 

//output
geee
hiiii h1
hiiii h2
jjjjj



conclusion : react is the library not a framework (lot of package) but we can use it for large scale
-----------------------------------------------------------------------------------------------------------------------------------------------------
B.IGNITING OUR APP

episode 2 part 1.
1.//create git repository
pooja95910@gmail.com
Shetty@3560

go to vs , open terminal , initial git here
git init
 git branch -m main
git add .
git commit -m "basic react"
git remote add origin https://github.com/Poojashett/React-js.git
 git push origin main

2.what is npm
npm does not stand for node package manager . but it manges the packages.it works as a node package manager.all the packages are hosted over there.
npm manages the version of particular package.it will take care of it in package.json

3.add node packahe manager in our project
  *do npm init
  *PS D:\React js> npm init  //it will ask some questions
   This utility will walk you through creating a package.json file.
   It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (react-js)
version: (1.0.0)
description: "this is reactjs by pooja"
entry point: (App.js)
test command: jest
git repository: (https://github.com/Poojashett/React-js.git)
keywords: react
author: pooja                                                                                                  
license: (ISC)                                                                                                 
About to write to D:\React js\package.json:

{
  "name": "react-js",
  "version": "1.0.0",
  "description": "\"this is reactjs by pooja\"",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Poojashett/React-js.git"
  },
  "keywords": [
    "react"
  ],
  "author": "pooja",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Poojashett/React-js/issues"
  },
  "homepage": "https://github.com/Poojashett/React-js#readme"
}


Is this OK? (yes)
PS D:\React js>  these code will be stored in package.json

4.what is package.json?
it helps to create json file 
it is a configuration for npm 

5.why do we need package.json?
npm manages the version of particular package.it will take care of it in package.json

6.start install dependies
*most imp pacake in our project is bundler.when we have html, css , js  a whole code needs to be bundled together.
*bndlers are webpack

7.what is bundler? name 
A bundler is a tool that is used in web development to combine and package multiple files, such as JavaScript, CSS, and images, into a single file or a smaller number of files. so that it can be shift to production. when we create react app it uses bundler named as webpack. 

Webpack:

Webpack is one of the most widely used bundlers in the JavaScript ecosystem. It not only bundles JavaScript but also handles other assets like stylesheets, images, and fonts. Webpack has a powerful plugin system and supports code splitting for efficient loading of assets.
Parcel:

Parcel is a zero-configuration bundler that aims to simplify the development process. It automatically analyzes the project's dependencies and builds an optimized bundle without requiring an extensive configuration setup. Parcel supports various file types out of the box.
Rollup:

Rollup is a JavaScript module bundler that focuses on creating smaller bundles. It is often used for library projects where the goal is to produce a single, optimized file. Rollup supports ES6 modules and tree-shaking, a technique for removing unused code.
Browserify:

Browserify allows developers to use the Node.js require syntax in the browser. It bundles CommonJS-style modules for the browser environment, enabling the use of Node.js-style modules on the client side.
Brunch:

Brunch is a fast and easy-to-use bundler that emphasizes simplicity and convention over configuration. It supports various asset types, including JavaScript, CSS, and images. Brunch is designed to be easy to set up and use.
FuseBox:

FuseBox is a fast and efficient bundler that supports JavaScript and TypeScript. It provides features like dynamic imports, hot module replacement (HMR), and a plugin system for extensibility.
RequireJS:

While not a traditional bundler, RequireJS is an asynchronous module loader that helps manage dependencies and load modules in a modular way. It allows developers to define and load modules dynamically.
Parcel:

Parcel is a zero-config bundler that requires minimal setup. It supports various languages and file types out of the box, making it easy to get started without much configuration.

parcel helps in dev build , local server ,HHR - hot module replacement (it will load refresh the browser automatically)
it gives faster build , helps in caching
it gives faster development experience
it also do image optimization



8.now will use bundler named as parcel.
*install parcel to our app
*we can install two types of dependency , one is dev(only for development) and one is normal dependies(for production).
*we can use -D means this parcel only can use in development  ---npm install -D parcel  (only for development).
*in package.json we got the parcel
  {
  "name": "react-js",
  "version": "1.0.0",
  "description": "\"this is reactjs by pooja\"",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Poojashett/React-js.git"
  },
  "keywords": [
    "react"
  ],
  "author": "pooja",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Poojashett/React-js/issues"
  },
  "homepage": "https://github.com/Poojashett/React-js#readme",
  "devDependencies": {
    "parcel": "^2.11.0" //here we got the parcel  sign^ is nothing but 
  }
}

*also when we did npm , it will create package-lock.json and nodemodules
* "devDependencies": {
    "parcel": "^2.11.0" //here we got the parcel  sign^ is nothing but  caret
  }
*The ^ symbol in the version specification within the package.json file represents the "caret" character. In the context of semantic versioning, which is commonly used for versioning npm packages, the caret has a specific meaning.

*that means   "devDependencies": {
    "parcel": "^2.11.0" 
  }
caret -- now the version is 2.11.0 and if in future new version comes if i put ^ (caret) to infront of this version , parcel will automatically upgraded to latest version  if there is a minor upgrade -- if 2.11.1 --it will change automatically it is a minor upgrade.

parcel will automatically upgrade its version if we have put caret infront of it.


9.what is the difference between tilde and caret?
tilde -major update
caret - minor update
In the context of semantic versioning used in package.json files for npm packages, the tilde (~) and caret (^) symbols have specific meanings in terms of version ranges.

Tilde (~):

The tilde allows for updates to the most recent patch version for the specified minor version.
For example, if you have "~1.2.3", it means you'll accept any version in the range 1.2.3 (inclusive) to <1.3.0. So, you'll get automatic updates for patch releases (1.2.x), but it won't allow minor or major updates.
json
Copy code
"dependencies": {
  "package-name": "~1.2.3"
}
Caret (^):

The caret is more flexible than the tilde. It allows for updates to the most recent minor or patch version for the specified major version.
For example, if you have "^1.2.3", it means you'll accept any version in the range 1.2.3 (inclusive) to <2.0.0. So, you'll get automatic updates for both patch releases (1.2.x) and minor releases (1.x.x), but it won't allow major updates.
json
Copy code
"dependencies": {
  "package-name": "^1.2.3"
}
In summary:

Tilde (~) allows updates for the most recent patch version within the same minor version.
Caret (^) allows updates for the most recent patch or minor version within the same major version.
The choice between tilde and caret depends on your project's versioning requirements and how much flexibility you want when automatically updating dependencies. Caret is often used for libraries and packages that follow semantic versioning strictly, while tilde is used when you want to be more conservative and avoid minor updates that might introduce new features.

10.what is the differnece between package json and package-lock json?
package.json -- it is a configuration for npm , and it keeps a track of what version of that package is installed in our project.
package-lock json -- it keeps the track of exact version that we have already installed. for ex, if today there is 2.8.5 released , it keeps the record of every
exact version (2.8.3) of that package ;
 *it keeps the track of all the exact version of all the dependendies.

package.json and package-lock.json are both files used in Node.js projects, particularly those managed by npm (Node Package Manager). They serve different purposes and are used at different stages of the development process.

package.json:

Purpose: The package.json file is a metadata file for your project. It contains information about the project, its dependencies, scripts, and various configurations.
Content: It includes details such as the project name, version, description, entry points, scripts, and dependencies.
Usage: Developers define project metadata and dependencies in the package.json file. When someone else clones the project, they can run npm install to install the dependencies listed in this file.
Example package.json:

json
Copy code
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.21"
  }
}
package-lock.json:

Purpose: The package-lock.json file is used to lock down the versions of the dependencies to ensure consistency across different installations of the project.
Content: It contains a detailed, time-stamped, and recursively resolved list of all dependencies, their versions, and their sub-dependencies. It also includes information about the specific commit or version from the registry.
Usage: The package-lock.json file helps in generating reproducible builds. It guarantees that everyone working on the project gets the exact same versions of the dependencies, minimizing the chance of unexpected behavior due to version differences.
Example package-lock.json:

json
Copy code
{
  "name": "my-project",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "dependencies": {
    "express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHjBc03zL0fVjYeaDDhyYF5UFO2I1fxhYoFiBjFRc4aBhfrR1FyjbpO7U1Qva61olr+Y/OA/lAPls5gU1YuAuw==",
      "dev": true,
      "engines": {
        "node": ">= 0.10.0"
      },
      "dependencies": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        // ...
      }
    },
    // ...
  }
}
In summary, while package.json is for project metadata and high-level dependency management, package-lock.json is for ensuring deterministic and reproducible dependency installations by locking down the specific versions used in the project. When you commit both files to version control, you help maintain consistency across different development environments.

11.what is integrity in package-lock json?
In the package-lock.json file, the "integrity" field is a hash value that ensures the integrity and authenticity of a specific version of a package. It is used to verify that the installed package matches the original version published on the package registry.

Here's what the "integrity" field includes:

Hash Algorithm:

The integrity hash is calculated using a specific hash algorithm, often SHA-512. The hash algorithm used is specified as part of the integrity value.
Package Content:

The hash is computed based on the content of the package, including its files and metadata. This ensures that the package hasn't been tampered with or modified after being published on the registry.
Version and Source:

The integrity hash is tied to a specific version of the package from the registry. It ensures that the installed version matches the one specified in the package-lock.json.
Registry Information:

The integrity value also includes information about the package's registry, such as the registry URL and the package's name and version.
Here's an example of how the "integrity" field looks in a package-lock.json file:

json
Copy code
"integrity": "sha512-mHjBc03zL0fVjYeaDDhyYF5UFO2I1fxhYoFiBjFRc4aBhfrR1FyjbpO7U1Qva61olr+Y/OA/lAPls5gU1YuAuw==",
The "integrity" value is used during the npm install process to verify that the package being installed matches the expected content and has not been tampered with. If someone attempts to modify the package after publication on the registry, the hash will no longer match, and npm will reject the installation.

12.what is there in nodemodules?
nodumodules is the collection of dependnies.
it contains all the code , that we fetched from npm.
while we install npm , all fetched code is pushed to nodemodules.
it is kind of database of that dependendies.

The node_modules directory is a directory in a Node.js project that contains the third-party dependencies (libraries and packages) used by the project. When you run the npm install command, npm downloads and installs these dependencies into the node_modules directory.

Here's what you can typically find in the node_modules directory:

Installed Packages:

The main purpose of node_modules is to store all the installed packages and modules specified in your project's package.json file. Each package gets its own directory inside node_modules.
Nested Dependencies:

If a package has its own dependencies, those dependencies are installed inside its directory in node_modules. This creates a nested structure that represents the dependency tree of your project.
Binary Executables:

Some packages may include binary executables or scripts that are necessary for the package to function. These binaries are often placed in the .bin directory within the node_modules directory.
Platform-Specific Build Artifacts:

Some packages might have platform-specific build artifacts or precompiled binaries. These are often stored in subdirectories like build or bin within the respective package directory.
Symlinks and Binaries for Executables:

In some cases, npm creates symbolic links (symlinks) or binaries in the .bin directory that point to executable files within the installed packages. These allow you to run scripts or commands provided by the installed packages.
Scoped Packages:

If your project uses scoped packages (namespaced with an organization or user), you'll find a directory structure like @organization/package inside node_modules.
Example directory structure inside node_modules:

java
Copy code
node_modules
│
├── package-1
│   ├── ...
│   └── node_modules
│       └── nested-package-1
│
├── package-2
│   └── ...
│
├── .bin
│   ├── binary-executable-1
│   ├── binary-executable-2
│   └── ...
│
├── @scoped-organization
│   └── package-3
│       └── ...
│
└── ...
It's important to note that the node_modules directory is typically not committed to version control systems (e.g., Git). Instead, the package.json and package-lock.json files are committed, and other developers can use these files to install the required dependencies locally using npm install. This approach keeps the project repository smaller and avoids version conflicts.

13.what is  transitive dependency ?
every depndency in node module it has its own package.json
A transitive dependency refers to a situation in which a project has a dependency on a library or package, and that library, in turn, has dependencies on other libraries. These additional dependencies are known as transitive dependencies because they are not explicitly declared in the main project but are indirectly required due to the dependencies of the project's direct dependencies.

Here's an example to illustrate the concept:

Direct Dependency (Declared in package.json):

Your project has a direct dependency on a library called "A."
json
Copy code
"dependencies": {
  "library-a": "^1.0.0"
}
Transitive Dependency (Dependency of "A"):

Library A has its own dependencies, such as "B" and "C."
json
Copy code
// Inside library-a's package.json
"dependencies": {
  "library-b": "^2.0.0",
  "library-c": "^3.0.0"
}

14.what is gitignore?
if we want some code should not go to production then we put it inside the gitignore. so it should not push the code to git.
if we dont want to put huge file , in node module , add that in gitignore file.
create .gitignore file 
type /node_modules  - enter
alll the packages which is expected to be pushed will be vanished.
we can push package and package_lock.json into git  but dont have to put node_modules.
bcoz , if we have package and package_lock json we can recreate all nodemodules (if we deelte nodemodule , we CAN RECREATE IT BY USING package and package_lock json)

------------------------------------------------------------------------------------------------------------------------------------------------------
episode 2 part 2

1.building our project by using parcel
 npx parcel index.html

*npx - executing a package;

PS D:\React js> npx parcel index.html
Server running at http://localhost:1234  //it will run at 1234 
✨ Built in 2.14s  
*parcel has basically created a server for us , it has 1234 port and it helps to hoisting in our server;

2.adding cdn links is not a preffered way to bring react into our project; bcoz fetching from cdn it will call another network -- https://unpkg.com/react@18/umd/react.development.js, if it changed the link , we need to change the link in index.html also
instead of that we can install through package by using npm install react;

3. install react --npm i react  enter

now i get the dependency in package.json with caret and package-lock json with some dependendies
 "dependencies": {
    "react": "^18.2.0"
  }

4,install reactdom
npm install react-dom 

 "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }

we got react and reactdom using npm
now no need cdn -dlt it 
when you run it , it will show error Uncaught ReferenceError: React is not defined
we installed the package , but we import it 

import it in app.js


import React from "react"; //all these come from node module
import { ReactDOM } from "react"; //all these come from node module

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "hiiii h1"),
            React.createElement("h2", {}, "hiiii h2")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

*but it throws error 
 @parcel/transformer-js: Browser scripts cannot have imports or exports.  // in our html , we are injecting  <script src="./App.js"> it treats this script as a browser scripts;
D:\React js\App.js:2:1
  1 | 
> 2 | import React from "react";   //import is not a normal js  so that is why , we need to tell the browser that it is a module not a normal browser script.
>   | ^^^^^^^^^^^^^^^^^^^^^^^^^^
  3 | import { ReactDOM } from "react"; //import is not a normal js  so that is why , we need to tell the browser that it is a module not a normal browser script.
  4 | 
D:\React js\index.html:17:5
  16 |     <div>jjjjj</div>
> 17 |     <script src="./App.js">
>    |     ^^^^^^^^^^^^^^^^^^^^^^^
> 18 |     </script>
>    | ^^^^^^^^^^^^ The environment was originally created here
  19 | </body>

  20 | 

*so add client
import React from "react";
import ReactDOM from "react-dom/client";  earlier reactdom came from reactdom , now this is a new reactdom and it is inside reactdom/clients


*thats why we need to tell browser that it is module  <script src="./App.js"></script> 
<body>
    <div id="root">
        <h1>hii</h1>
    </div>
    <script type="module" src="./App.js"></script> //it is a module
</body>

*now the react comming from our node modules , not from cdn link



5.conclusion why do we prefer parcel
*as soon as we save the file , it automatically reloads
*it helps to host our app to the server(localhost:1234)
*it is doing HMR  -hot module replacement --(if we change anything in file , it automatically refresh the page)
*it helps in caching
*it also do image optimization.
*helps is compressing of file and mification 
*it gives better error suugestions
*it gives diagnostic(means it gives error clearly)  - go to parcel website
*helps in treeshaking - it will remove unusal code
*it gives different dev and prod build bundles.

6.dist folder
*when we genrate the production build , all files get mimize and stored it in dist folder.
*when we build prod build , it will build inside it.
*this can be deleted , and when we again build it , it will regenerate it.

7.temporary folder
*dist , nodemodule and parcel cahceh is automatucally build if we run the code , so no need to put into prod or git
*so put it in gitignore.
*in gitignore file add
/node_modules
/dist
.parcel-cache
*bcoz ,suppose  in local we have code  , it will push into git and then this code is deployed into a server 
*local is not directly connect to server
*server fetches code from git and this server host our app to end user
*in our loacl we have code buils ... in package.json  , it will run inside server also .
*in server also it will do npm install , here also nodemodule will be cretaed by using server will have package and package-lock 
*and server also have its own dist and parcel chache , no need to put it from local.


8.add browesrlist in package.json
 "browserslist": [
    "last 2 versions"  //it will exactly work for last 2 version of chrome , firfox ...
  ]



-------------------------------------------------------------------------------------------------------------------------------------------------------

EPISODE 3

1.create script for running the application  CREATING SCRIPT FOR PRODUCTION AND DEV 
 *  "scripts": {
    "start": "parcel index.html", //it will run our project in development mode
    "build": "parcel build index.html", // create our project for production mode , we can give ke name anything
    "test": "jest"
  },
 
 *to run project for development we can use "npm run start" or npm start  , before we have use npx parcel index.html.
  ---> it called the parcel index.html
 *to build production we can use "npm run build"  - for production "npm build --wont work

{
  "name": "react-js",
  "version": "1.0.0",
  "description": "\"this is reactjs by pooja\"",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Poojashett/React-js.git"
  },
  "keywords": [
    "react"
  ],
  "author": "pooja",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Poojashett/React-js/issues"
  },
  "homepage": "https://github.com/Poojashett/React-js#readme",
  "devDependencies": {
    "parcel": "^2.11.0",
    "process": "^0.11.10"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "browserslist": [
    "last 2 versions"
  ]
}


2.createelement is not a good way , use jsx
 * what is JSX?
   =jsx is the javascript syntax which is easier to create react elemnt
   =jsx is not a html , it is a html like syntax
   =it looks like html , but it is not a html

3.CREATE code  USING JSX
  
in App.js

import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1>pooja</h1>;//this is not A VALID CODE , BUT IT WORKS IN THE BROWSER bcoz parcel is going to do this. (browser cant understands this code)
//parcel is helps in transpiling , babel helps in transpiling , (so that browser can understand the code).
console.log('jsxheading: ', jsxheading); //this also returns the object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

4.ECMASCRIPT
 *js engine only understands ecmascript.

5.what is babel?
Babel is a JavaScript compiler that allows developers to write code using the latest ECMAScript (ES) standards and features, even if the target environment does not support those features natively. It's a widely used tool in the JavaScript ecosystem for transpiling code.

JavaScript Modernization:

Babel enables developers to use the latest JavaScript features and syntax, such as arrow functions, template literals, destructuring, and more, even in environments that do not support these features.
ECMAScript Compatibility:

Babel helps in maintaining compatibility with different ECMAScript standards. For example, you can write code using ECMAScript 2022 syntax and transpile it to ECMAScript 5 for browsers that don't support the latest standards.
React JSX Transformation:

Babel is commonly used to transform JSX syntax used in React applications into standard JavaScript code. This allows developers to write React components using a more concise syntax.
Plugin System:

Babel has a modular architecture with a rich plugin system. Developers can use plugins to add or customize the transformations applied to their code during the transpilation process. This flexibility allows Babel to adapt to various use cases and configurations.
Integration with Build Tools:

Babel is often integrated into build tools and bundlers, such as Webpack, Parcel, and others. This integration allows developers to seamlessly incorporate Babel into their build pipelines.
Code Transformation:

Babel transforms code by parsing it into an Abstract Syntax Tree (AST), applying specified transformations or plugins to the AST, and then generating the transpiled code. This process allows for targeted code modifications and optimizations.
Polyfilling:

Babel can also be used to include polyfills for features that are not present in the target environment. This helps ensure that the code runs correctly across a wide range of browsers.


6.how jsx works?
const neww = <h1>pooja</h1>;
this (jsx) code converted into react.createElement by using "babel". then it is rendered in to dom to form html elemnt
console.log('neww: ', neww);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(neww);

7.add class to h1 using jsx , in jsx className is used instead of class
const neww = <h1 className="heading">pooja</h1>;
console.log('neww: ', neww);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(neww);

8.add attributes , in jsx camelcase is used while adding attributes.?
const neww = <h1 className="heading" tabIndex="1">pooja</h1>;
console.log('neww: ', neww);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(neww);

it got converted into html classname as class and tabindex - camelcase to smallcase
<div id="root">
<h1 class="heading" tabindex="1">pooja</h1>
</div>
--------------------------------------------------------------------------------------------------------------------------------

COMPONETS

1.calss based component -old way
2.functional based component -new way


1.what is react functinal component?
  *while creatting a functinal component , should be in camelcase
it is a jsfunction  which returns the JSX.element or react element;
it can return bunch of react elemnt , it can be nested;
*we can use normal functin also instaed of arrow functions;

app.js
import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (<h1 className="heading" tabIndex="1">pooja</h1>);

//React component

//2.functinal based component
const HeadingComponent = ()=> {
 return <h1>my first functinal component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //*here we rendered react elemnet in to root
root.render(<HeadingComponent/>); //*now we want render component into root like this



//functinal component
import React from "react";
import ReactDOM from "react-dom/client";

//React component
//2.functinal based component 
const HeadingComponent = ()=> {
 return <h1>my first functinal component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


2.how to use two component ?
const Title = () => {
  return (
    <h2>title component</h2>
  );
};

const HeadingComponent = () => { 
  return (
    <div>
      <Title /> //just add here
      <h1>My first functional component</h1>
    </div>
  );
}; when you use curly bracket we need to use return

*when we use () , no need to add return
import React from "react";
import ReactDOM from "react-dom/client";

//React component
//2.functinal based component

const Title = () => (
    <h2>title component</h2>
);

const HeadingComponent = () => (
    <div>
        <Title />
        <h1>My first functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


3.what is component composition?
component inside a component
=composing component to a another;


4.ELEMENT ISNSIDE A COMPONENT?

{} --any js expression is executed here

import React from "react";
import ReactDOM from "react-dom/client";

//React component
//2.functinal based component

const Title = () => (
    <h2>title component</h2>
);

//element
const Para = (
  <p>hii pooja</p>
)
const number = 100;
const HeadingComponent = () => (
    <div>
        <Title /> 
        {Title()} ----- we can call like this also 
        <h2>{Para}</h2>
        {number}
        {/* WE CAN USE ELEMNET INSIDE THE COMPONENT , it should be in the {} */}
        <h1 className="head">My first functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

5.ELEMENT ISNSIDE ELEMENT
const number = 100;

//element
const Para = (
  <p> {number} hii pooja</p>
)

----------------------------------------------------------------------------------------------------------------------------------------------
EPISODE 4 ---PROJECT BASED LEARNING
1.HEADR
--------LOGO
--------NAV ITEMS

2.BODY
-------SEARCH
-------REASTRAUNT CONTAINER
------------RETRAUNT CARD

3.FOOTER
--------COPYRIGHT,COMPANY ADDRESSS


1.BUILD ONE MAJOR COMPONENT THAT IS APPLAYOUTCOMPONENT
  const AppLayout = () => (
    <div className="main">
        <HeaderComponent />
    </div>
);

2.BUILD HEDER COMPONENT
// header component 
const HeaderComponent = () => (
    <div className="header">
        <div className="logo-container">
            <div className="logo-content">
                <img height="40px" src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png" alt="Logo" />
                <div className="logo-name">CraveX</div>
            </div>
        </div>
        <div className="nav-container">
            <ul className="nav-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

3.BUILD BODY COMPONENT
//BODY COMPONENT

const RestrCard = () => (
    <div className="rest-card">
        <div><img width="100%"  src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-creative-burger-exaggerated-delicious-food-photography-png-image_6687052.png" /></div>
        <div className="rest-card-body">
            <div className="card-name">Burger King</div>
            <div className="address">Andhra Gunpowder Andhra, Biryani Seshadripuram 4.5 km</div>
        </div>
    </div>
)
const BodyComponent = () => (
    <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
            <button className="search-button">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
            </button>
        </div>
        <div className="restr-container">
            <RestrCard />  //this needs to be dynamic
            <RestrCard />
            <RestrCard />
            <RestrCard />
            <RestrCard />
            <RestrCard />
            <RestrCard />
            <RestrCard />
            <RestrCard />
        </div>
    </div>
)

4,NOW CARD NEED TO MAKE DYNAMIC  - WE USE PROPS
-* if we want pass data to some component dynamically we use props
*props are just a normal arguments to a fundtion.
*passing a argument to a function.

In React, "props" is a short form for "properties," and it refers to the data that is passed into a React component

const BodyComponent = () => (
    <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
            <button className="search-button">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
            </button>
        </div>
        <div className="restr-container">
            <RestrCard resName="Burger King" address="Andhra Gunpowder Andhra, Biryani Seshadripuram 4.5 km"/> //passing props
            <RestrCard resName="KFC" address="KFC Seshadripuram 4.5 km" /> //passing props
        </div>
    </div>
)

*inner works ---react will take all these props in the form of object and and pass it into restcard component ;


const RestrCard = (props) => {
    console.log('props: ', props);  //when we console this , it will object
    return <div className="rest-card">
        <div><img width="100%"  src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-creative-burger-exaggerated-delicious-food-photography-png-image_6687052.png" /></div>
        <div className="rest-card-body">
            <div className="card-name">Burger King</div>
            <div className="address">Andhra Gunpowder Andhra, Biryani Seshadripuram 4.5 km</div>
        </div>
    </div>
}

 {
    "resName": "Burger King",
    "address": "Andhra Gunpowder Andhra, Biryani Seshadripuram 4.5 km"
}

{
    "resName": "KFC",
    "address": "KFC Seshadripuram 4.5 km"
}


const RestrCard = (props) => {
    console.log('props: ', props);
    return <div className="rest-card">
        <div><img width="100%"  src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-creative-burger-exaggerated-delicious-food-photography-png-image_6687052.png" /></div>
        <div className="rest-card-body">
            <div className="card-name">{props.resName}</div>  //now its dynamic
            <div className="address">{props.address}</div> //now its dynamic
        </div>
    </div>
}

5.ANOTHER WAY TO BIND  //DESTRUCTURING
const RestrCard = ({resName, address }) => { //WE CAN DO LIKE THIS
    console.log('props: ', props);
    return <div className="rest-card">
        <div><img width="100%"  src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-creative-burger-exaggerated-delicious-food-photography-png-image_6687052.png" /></div>
        <div className="rest-card-body">
            <div className="card-name">{resName}</div>
            <div className="address">{address}</div>
        </div>
    </div>
}

6.or we CAN DESTRUCTURING LIKE THIS
const RestrCard = (props) => {
    const { resName  , address} = props;//DESTRUCTURING
    console.log('props: ', props);
    return <div className="rest-card">
        <div><img width="100%"  src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-creative-burger-exaggerated-delicious-food-photography-png-image_6687052.png" /></div>
        <div className="rest-card-body">
            <div className="card-name">{resName}</div>
            <div className="address">{address}</div>
        </div>
    </div>
}


7.USE DATA IN THE FORM OF JSON (FROM BACKEND)

*first e can loop over the array
*use js map function
//BODY COMPONENT
for example this is the backend data 
const resObj =
    [
        {
            "resName": "Burger King",
            "address": "Andhra Gunpowder Andhra, Biryani Seshadripuram 4.5 km",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4"
        }
        ,
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        },
        {
            "resName": "Nandhini Deluxe",
            "address": "Nandhini Deluxe Seshadripuram 4.5 km",
            "cloudinaryImageId": "zmp84ckarixkz73fzuws",
        },
        {
            "resName": "Starbucks Coffee",
            "address": "Starbucks Coffee Seshadripuram 4.5 km",
            "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "aadw5xxrjtv6xxhtscai",
        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        },

    ]
const RestrCard = (props) => {
    console.log('props: ', props);
    //destructuring
    const { resData } = props;
    // or 
    
    // const resData = props.resData
    
    return <div className="rest-card">
        <div style={{ height: '160px' }}><img width="100%" height="100%" className="rest-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId} /></div>
        <div className="rest-card-body">
            <div className="card-name">{resData.resName}</div>
            <div className="address">{resData.address}</div>
        </div>
    </div>
}


const BodyComponent = () => (
    <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
            <button className="search-button">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
            </button>
        </div>
        <div className="restr-container">
            {
                resObj.map(data => <RestrCard resData={data} />)
            }
        </div>
    </div>
)


8.Each child in a list should have a unique "key" prop. -- there is one console error , 
*each sending props having unique key

const BodyComponent = () => (
    <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
            <button className="search-button">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
            </button>
        </div>
        <div className="restr-container">
            {
                resObj.map(data => <RestrCard key={data.id} resData={data} />)
            }
        </div>
    </div>
)

9.WHY WE NEED KEYS?
*key should be unique 

The key is a special string attribute that helps React identify which items have changed, are added, or are removed. It aids in efficient updates of the virtual DOM and enhances the performance of your application. 

*when backend new card , react can get to know which is to be rendered in ui , other wise it will once again render all the card along with this

 <div className="restr-container">
            {
                resObj.map(data => <RestrCard key={data.id} resData={data} />)
            }
        </div>


or dont use index as key;

------------------------------------------------------------------------------------------------------------------------
EPISODE 5

REACT HOOK

1.CLEAN THE CODE
2.MAKE A SEPARATE FILE FOR EVERY COMPONENT
3.TRY TO MATCH EXACT NAME OF COMPONENT AND FILE NAME

1.CREATE HEADER COMPONENT SEPERATELY and EXPORT IT 
  
 *Header.js
*paste the headr code
*first in header.js , export the header.js

// header component 
const Header = () => (
    <div className="header">
        <div className="logo-container">
            <div className="logo-content">
                <img height="40px" src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png" alt="Logo" />
                <div className="logo-name">CraveX</div>
            </div>
        </div>
        <div className="nav-container">
            <ul className="nav-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header;  //export here

2.IMPORT HEADER FROM HEADER.JS TO APP.JS
import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./Components/Header"; //import here
import Body from "./Components/Body";

const AppLayout = () => (
    <div className="main">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

*SIMILAR TO BODY

3.IN BODY WE HAVE HAEDCODED DATA , THAT IS NOT GOOD PRACTICE TO INCLUDE HARDCODED DATA IN Body.jsand ALSO COMMON URL , USE utils
import RestrCard from "./RestrCard";

//BODY COMPONENT
const resObj =
    [
        {
            "resName": "Burger King",
            "address": "Andhra Gunpowder Andhra, Biryani Seshadripuram 4.5 km",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "id": "1"
        }
        ,
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "id": "2"

        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "id": "3"

        },
        {
            "resName": "Nandhini Deluxe",
            "address": "Nandhini Deluxe Seshadripuram 4.5 km",
            "cloudinaryImageId": "zmp84ckarixkz73fzuws",
            "id": "4"

        },
        {
            "resName": "Starbucks Coffee",
            "address": "Starbucks Coffee Seshadripuram 4.5 km",
            "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
            "id": "5"
        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "aadw5xxrjtv6xxhtscai",
            "id": "6"

        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "id": "7"

        },

    ]

const Body = () => (
    <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
            <button className="search-button">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
            </button>
        </div>
        <div className="restr-container">
            {
                resObj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>
    </div>
)

export default Body ; 


4..IN BODY WE HAVE HAEDCODED DATA , THAT IS NOT GOOD PRACTICE TO INCLUDE HARDCODED DATA IN Body.jsand ALSO COMMON URL , USE utils create contsnat.js
*contsnat.js -- IT SHOULD BE IN Small case-good practice
*const CDN_URL - capital  - good practice

in constant.js
const CDN_URL ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const LOGO_URL = "https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png";


*create one more file to stodre json data , mockData.js
in mockData.jsand export it , and import it in body.js
const resObj =
    [
        {
            "resName": "Burger King",
            "address": "Andhra Gunpowder Andhra, Biryani Seshadripuram 4.5 km",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "id": "1"
        }
        ,
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "id": "2"

        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "id": "3"

        },
        {
            "resName": "Nandhini Deluxe",
            "address": "Nandhini Deluxe Seshadripuram 4.5 km",
            "cloudinaryImageId": "zmp84ckarixkz73fzuws",
            "id": "4"

        },
        {
            "resName": "Starbucks Coffee",
            "address": "Starbucks Coffee Seshadripuram 4.5 km",
            "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
            "id": "5"
        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "aadw5xxrjtv6xxhtscai",
            "id": "6"

        },
        {
            "resName": "KFC",
            "address": "KFC Seshadripuram 4.5 km",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "id": "7"

        },

    ]

export default resObj;


5.IMport all data into particular file

6.if we have multiple variable to export , we have to use this method  -"NAMED EXPORT"
*there are 2 types of export  defult export and named export
*if we use named export we have to use {} while importing -- import { CDN_URL } from "../utils/constants"
*if we use default export , we dont have to use curly -  --import resObj from "../utils/mockData";


export const CDN_URL ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png";

7.HOW TO IMPORT NAMED EXPORT?
import { CDN_URL } from "../utils/constants" //need to import inside a curly bracket
const RestrCard = (props) => {
    //destructuring
    const { resData } = props;
    // or 

    // const resData = props.resData

    return <div className="rest-card">
        <div style={{ height: '160px' }}><img width="100%" height="100%" className="rest-image" src={CDN_URL + resData.cloudinaryImageId} /></div>//binding
        <div className="rest-card-body">
            <div className="card-name">{resData.resName}</div>
            <div className="address">{resData.address}</div>
        </div>
    </div>
}

export default RestrCard ;

8.CLICK HANDLER (EVENT HANDLER)
*.onClick- event , it will pass call back function 

*onclick on button , in ui it should reflect more than 4.0 cards


import RestrCard from "./RestrCard";
import resObj from "../utils/mockData";

//BODY COMPONENT
const Body = () => {

     let takelistfromresobj = resObj; // assigning to variable
     return <div className="body-container">
            <div>
                <button className="top-rated" onClick={() => {   //logic
                    takelistfromresobj = takelistfromresobj.filter((obj) => {
                        return obj.avgRatingString > 4.0;
                    })
                    console.log('takelistfromresobj: ', takelistfromresobj);
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                takelistfromresobj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>
    </div>
}

export default Body;

*but here when we console it , when i click on button it will reflect , but when it is not reflecting in ui
*so create state variable for that , we use "REACT HOOK"


9.REACT HOOK
*normal variable we cant use (ui and dom not in sync) , so we have to go reacthook , (which is having super powerfull variable , which should be wriitten inside an array , both should be in sync);
*react hook is a normal js utility function.(which was written by facebook developer , which is inside the nodemodule)
*there are two most imp hooks
React Hooks are functions that enable functional components to use state, lifecycle methods, and other React features that were previously only available in class components. They were introduced in React 16.8 to provide a more concise and expressive way to handle stateful logic in functional components.
1.useState();
2.useEffect();

1.useState();
*it is used to create state variable
*useState allows you to add state to your functional components. It returns an array with two elements: the current state value and a function that allows you to update the state.
 * first we need to import it from react which is in nodemodule , it should be named import
 * import { useState } from "react";

 * when we call a useState it will give a statevariable
 *we have to write the statevariable inside an array
 const [listfromresobj]

 *we can pass value inside the useState
  const [listfromresobj] = useState(resObj)

 *but when i click on button , in ui it is not updating 
  call one function 
  const [listfromresobj ,setlistfromresobj] = useState(resObj)

 setlistfromresobj - WHENEVER THIS FUNCTION IS CALLED , REACT RE-RENDER THE BODY AGAINNN ---IMPPPP

 *<div>
       <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.avgRatingString > 4.0;
                    })
                    setlistfromresobj(filteredlist)  //pass here the data , when i click on this , in ui it is reflecting
                }}>Top Rated Restaurants</button>
            </div>


 *<div className="restr-container">
            {
                listfromresobj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>


:NOTE :whenever the statevariable updates , react rerender the component 
:note : WHENEVER A STATEVARIABLE UPDATES , REACT WILL RERENDER THE COMPONENT ------ 


//final code 
import RestrCard from "./RestrCard";
import resObj from "../utils/mockData";
import { useState } from "react";

//BODY COMPONENT
const Body = () => {

    // local state variable  - scope is inside this component
    const [listfromresobj ,setlistfromresobj] = useState(resObj) //data is in listfromresobj , when user click button react rerender its component again .
 when setlistfromresobj is called , react start it its reconciliation , (it renders again) , it will find out the div and update it.


    //Normal js variable
    //  let listfromresobj = resObj;

    return <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="d-flex">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
                <button className="search-button">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>
            <div>
                <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.avgRatingString > 4.0;
                    })
                    setlistfromresobj(filteredlist)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                listfromresobj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>
    </div>
}

export default Body;



10.REACT ALGORITHM (HOW REACT WORKS)----- DIFF ALGORITHM
*react uses "Reconciliation algorithm" also known as "REACT FIBRE" which is anew algorithm , which has come up in react16
*DIFF ALGORITHM , it basically try to find the difference btween old and new virtual dom(diff between object) , react doesn not touch the actual dom . then it will update the actual domthats why it is speed
 for ex: initially there is three div
         when button is clicked while filtering , which is more than 4 star , it will give two div now 

 *this is a actual dom
 <div className="header">
        <div className="logo-container">
            <div className="logo-content">
                <img height="40px" src={LOGO_URL} alt="Logo" />
                <div className="logo-name">CraveX</div>
            </div>
        </div>
        <div className="nav-container">
            <ul className="nav-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>


*virtual dom - it is a representation of a actual dom (mainly in the form of object)

{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "name",
        "children": "hello world from react"  //it has props , which is having children and attribute what we have pass;
    },
    "_owner": null,
    "_store": {}
} 




  const [listfromresobj ,setlistfromresobj] = useState(resObj)  when setlistfromresobj is called , react start it its reconciliation , (it renders again)

--------------------------------------------------------------------------------------------------------------------------------
EPISODE 6 -API CALLS and useEffect()

1.useEffect()
*it is just like a normal function
*useEffect will take two argument. first one is callback and second one is dependency array--    useEffect(()=>{},[])
*this callback function will be called , after component renders , 
*if we have to do something after rendering the component , we have to write it inside a useeffect.

*useEffect(()=>{
        console.log("called") - after body component , it will be called.
    },[])

    return <div className="body-container"> --------------------------------------first it is called
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="d-flex">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
                <button className="search-button">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>
            <div>
                <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.avgRatingString > 4.0;
                    })
                    setlistfromresobj(filteredlist)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                listfromresobj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>

* console.log("above") //first called
    useEffect(()=>{
        console.log("called") //lasttcalled
    },[])
    console.log("below") //second called



2.API CALLING
*loads -- component render -- api calling using useEffect -- 

* useEffect(()=>{
        fetchData() //after component render , call this method to fetch data
    },[])

fetchData=()=>{
        const fetchdata = fetch();  //fecth() this will fetch data from api
}


3.USE SWIGGY API
 *fecth() will return a promise
*use async await
*  fetchData = async () => {
        const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    }

*once we get the data , convert it into json
         
 const jsondata = await fetchdata.json;

*resolving cors - allow cors chrome extensiion


  fetchData = async () => {
        const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchdata.json();
        console.log('jsondata: ', json);  //we got the data  from swiggy api
    }


*const Body = () => {
    const [listfromresobj, setlistfromresobj] = useState(resObj)
    //Normal js variable
    //  let listfromresobj = resObj;

    useEffect(() => {
        fetchData()  //we called the swiggy api
    }, [])


    fetchData = async () => {
        const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchdata.json();
        console.log('jsondata: ', json);     //we got the data
    }

    return <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="d-flex">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
                <button className="search-button">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>
            <div>
                <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.avgRatingString > 4.0;
                    })
                    setlistfromresobj(filteredlist)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                listfromresobj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>
    </div>
}


4.RENDER THE PAGE WITH NEW DATA , REMOVE HARDCODED DATA 
1.restcard.js

import { CDN_URL } from "../utils/constants"
const RestrCard = (props) => {
    //destructuring
    const { resData } = props;
    // or 

    // const resData = props.resData

    return <div className="rest-card">
        <div style={{ height: '160px' }}><img width="100%" height="100%" className="rest-image" src={CDN_URL + resData.info.cloudinaryImageId} /></div>
        <div className="rest-card-body">
            <div className="d-flex">
                <div className="card-name">{resData.info.name}</div>
            </div>
            <div className="address">{resData.info.locality}</div>
            <div className="card-name">{resData.info.avgRatingString}</div>
        </div>
    </div>
}

export default RestrCard ;


2.body.js

import RestrCard from "./RestrCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

//BODY COMPONENT
const Body = () => {
    const [listfromresobj, setlistfromresobj] = useState([])
    //Normal js variable
    //  let listfromresobj = resObj;

    useEffect(() => {
        fetchData()
    }, [])


    fetchData = async () => {
        const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchdata.json();
        const finalData = json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setlistfromresobj(finalData)
    }

    return <div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="d-flex">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
                <button className="search-button">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>
            <div>
                <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.info.avgRatingString > 4.0;
                    })
                    console.log('filteredlist: ', filteredlist);
                    setlistfromresobj(filteredlist)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                listfromresobj.map((data) => <RestrCard key={data.id} resData={data} />)
            }
        </div>
    </div>
}

export default Body;


5.WHILE LOADING , IT WILL SHOW BLANK PAGE , IT WILL TAKE TIME - IMPROVE PERFORMNCE -ADD LOADER 
USE SHIMMER UI - SKELETON ,

1.CREATE NEW COMPONENT
const Shimmer = () =>{
    return <div className="shimmer-container">
      <div className="shimmer-card">card</div>
        <div className="shimmer-card">card</div>
        <div className="shimmer-card">card</div>
        <div className="shimmer-card">card</div>
        <div className="shimmer-card">card</div>
    </div>
}
export default Shimmer;

2.IMPORT IT IN BODY.JS
   if(listfromresobj.length === 0){ IF THE LENTH IS 0 ADD THIS
        return <Shimmer/>
    }

3.ADD CONDITIONAL RENDERING  - WE can add terneroy operator
    return listfromresobj.length === 0 ? <Shimmer /> : (<div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="d-flex">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." />
                <button className="search-button">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>
            <div>
                <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.info.avgRatingString > 4.0;
                    })
                    console.log('filteredlist: ', filteredlist);
                    setlistfromresobj(filteredlist)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                listfromresobj.map((data) => <RestrCard key={data.info.id} resData={data} />)
            }

        </div>
    </div>)

----------------------------------------------------------------
1.creaTE CLICK ON LOGIN CHANGE INTO LOGOUT. - (WE HAVE TO USE STATE VARIABLE) -----USE EFFECT EXPLAINED BRIFLY
1.*BY USING usestate , helps in reloading and rerender the component agian where as normal js variable wont do it
*if we use normal variable , we can not able to know wherether this variable updated or not in the ui.
*we cant directly modified by using variable 
let [btnName] = useState(["Login"]);
*USESTATE give variable along with the function
*whenever statevariable is changed , react will rerender this component.


// header component 
const Header = () => {

    let [btnName, setbtnName] = useState(["Login"]); //use state

    return <div className="header">
        <div className="logo-container">
            <div className="logo-content">
                <img height="40px" src={LOGO_URL} alt="Logo" />
                <div className="logo-name">CraveX</div>
            </div>
        </div>
        <div className="nav-container">
            <ul className="nav-list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={
                    ()=>{
                          btnName === "Login" ? setbtnName("Logout") :  setbtnName("Login");
  -- working , when we click the button , this function is called , then btnName is change dto logout and also reloads the whole component. within ms.
                    }
                }>{btnName}</button>
            </ul>
        </div>
    </div>
}

export default Header;

*login is assigned first
*when we click on button , react rerenders the component and and it finds the diff between old and new version on comp . and the update it
*now it only changes the button inside the dom - dom manup[ulation
*component is getting called againa and again.
-----------------------------------------------------------------------------------------------

1.SEARCH FUNCTINALITY
1.binding

  const [searchtext , setSearchtext]=useState([""]);

 <input type="text" className="search-input" placeholder="Search for restaurants and food..." value={searchtext}  onChange={(e)=>{
    setSearchtext(e.target.value) //whenever we change it , react rerenders its component (whole component is getting re-rendered) --re-conceliation cycle
}}/>

*when we type text on input , even single keypress whole component gets rerenderd and its compare older and new comp , and update particular div in the dom.

2.search 
 <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." value={searchtext}  onChange={(e)=>{
                    setSearchtext(e.target.value)
                }}/>
                <button className="search-button" onClick={
                    ()=>{
                        const filteredRestro = listfromresobj.filter((data) => {
                            return data.info.name.toLowerCase().includes(searchtext.toLowerCase());
                        });
                        console.log('filteredRestro: ', filteredRestro);
                        setlistfromresobj(filteredRestro);
                    }
                }>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>

*but here is the problem , whenever i swearch pizza ,it will give result , and again when i search some other name , it wont give result
*listfromresobj  - here only working on pizza

3.search should work for all restr  - FINAL SEARCH FUNCTINALITY
*WE WILL keep another copy of it


import RestrCard from "./RestrCard";
import Shimmer from "./Shimmer";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

//BODY COMPONENT
const Body = () => {
    const [listfromresobj, setlistfromresobj] = useState([]);
    const [filteredrestro, setFilteredrestro] =useState([]);
    const [searchtext , setSearchtext]=useState([""]);
    
   

    useEffect(() => {
        fetchData()
    }, [])


    fetchData = async () => {
        const fetchdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchdata.json();
        const finalData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistfromresobj(finalData)     ------------------------------create 
        setFilteredrestro(finalData)      -----------------------------create copy
    }

    return listfromresobj.length === 0 ? <Shimmer /> : (<div className="body-container">
        <h2 className="body-head">Restaurants with online food delivery</h2>
        <div className="d-flex">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants and food..." value={searchtext}  onChange={(e)=>{
                    setSearchtext(e.target.value)
                }}/>
                <button className="search-button" onClick={
                    ()=>{
                        const filteredRestro = listfromresobj.filter((data) => { //use first variable for itaration
                            return data.info.name.toLowerCase().includes(searchtext.toLowerCase());
                        });
                        setFilteredrestro(filteredRestro);
                    }
                }>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDXZxdU5Q5iVuX08G2QbNyNDjLJy1eEDF2pPRoQGAX_tU3f2eY_wPuii-HwKq8bc7nsc&usqp=CAU" alt="Search Icon" />
                </button>
            </div>
            <div>
                <button className="top-rated" onClick={() => {
                    const filteredlist = listfromresobj.filter((obj) => {
                        return obj.info.avgRatingString > 4.5;
                    })
                    console.log('filteredlist: ', filteredlist);
                    setlistfromresobj(filteredlist)
                }}>Top Rated Restaurants</button>
            </div>
        </div>
        <div className="restr-container">
            {
                filteredrestro.map((data) => <RestrCard key={data.info.id} resData={data} />)  -----///use copy of variable
            }

        </div>
    </div>)
}

export default Body;

-----------------------------------------------------------------------------------------------------------------------------
EPISODE 7 RAOUTING

1.USEEFFECT() ---VIMP -3 cases
  *useEffect is called after component renders everytime.

 * useEffect(()=>{
    console.log('hi')
   },[]) , [] -this is the dependecy array this is not mandatory

* if we withou use [] - dependency array , every time it is called after component renders

*so , if no dependency array useEffect is called every component render , if dependency array is empty , useeffect is called on only initial render
 and just once

*if we put inside the dependecy array or it is not empty , it will only called , when the dependecy changes
 for example 
  let [btnName, setbtnName] = useState(["Login"]);
   useEffect(()=>{
   },[btnName])  //it will called evry time when btnName get upadted

2.ROUTING

1.INSTALLING
*use react router library
*react router INSALL == npm i react-router-dom

2.HOW TO USE LIBRARY
*FIRST go to app.js , create routing configuration in app.js
*what is configuration  - it is some information that will tell the broeser routerthat what will happen on a specific path

*const appRouter = createBrowserRouter([
    
])-- it will takes a list of path
 import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },
    {
        path:"/about",
        element:<About/>
    }
])

3.CONFIGURATION IS DONE , THEN USE IT, we need to provide it

*import privider
 import { createBrowserRouter , RouterProvider } from "react-router-dom";

 RouterProvider  it is a component from react library
*we need to use this component instaed of applayout

import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter , RouterProvider } from "react-router-dom";


const AppLayout = () => (
    <div className="main">
        <Header />
        <Body />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },
    {
        path:"/about",
        element:<About/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //use this provider


4.IF WE GIVE INVALID PATH
*we can also use erroelement - if there is an error 
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>,
    }
])

*Iif we want more detail about error we have to use react hook - that is  in error.js
import { useRouteError } from "react-router-dom";
const Error = () =>{

    const errormsg = useRouteError();
    return (
        <div>
            <h1>Oopsss!! went wrong</h1>
            <h3>{errormsg.status}</h3>
        </div>
    )
}

export default Error;

5.CHILD ROUTES

import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/contact";
import Error from "./Components/Error";


const AppLayout = () => (
    <div className="main">
        <Header />
        <Outlet/> //once we hit the aboutus , it will come to to outlet and fill it <About/>
    </div>
);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[   //children in app layout component
            {
              path:"/",
              element:<Body/>
            },

            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ],
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

*In React Router, an outlet is a placeholder or a designated area in your application's layout where the content for a specific route will be rendered. It's essentially the location where the components associated with a particular route are inserted into the overall UI.

*outlet will be replaced by the component acording to the pathwe have given

6.LINKING THE COMPONENT ON CLICK - ROUTE TO SOME OTHER PAGE
*we can use anchor tag , but when we redirect it , whole page will be loading
*to avoid this , we have to use link from react-dom ------import { Link } from "react-router-dom";  -doesnot load the home page

  <li><Link to="/">Home</Link>  </li>S
  <li><Link to="/about"> About Us</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>  

7.that is WHY IT IS A SINGLE PAGE APPLICATION. IT DOES not load the whole page
SPAs load a single HTML page, and the content is dynamically updated as the user interacts with the application. Instead of navigating to a new page, the application updates the existing page by manipulating the DOM


8.What is difference between Client Side Routing and Server Side Routing?
1.server side routing --full page reloads , for example when we use anchor tag
2. Client Side Routing  - all the components are already loaded , it doesnot do full page reloads

---------------------------------------------------------------------------------
task
9.DYNAMIC ROUTING
1..when u click on particular card , navigate to next page with full details;

2.Create restro-menu page
  incluse path in app.js
 {
                path: "/restraunts : resId", //taking id dynamically
                element: <RestroMenu />,
            }

3.Dynamically get api from swiggy
 *for calling api , use , useEffect() , we want only at once at the time of initial render

const [restrodata, setRestrodata] = useState([]);

   useEffect(
        ()=>{
          fetchMenuitem();
        },[]
    )

    

    const fetchMenuitem  = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=707740&catalog_qa=undefined&submitAction=ENTER")
        const getJsondata = await data.json();
        setRestrodata(getJsondata)
    }

4. add shimmer
return restrodata.length === null ? (<Shimmer/> ): (
        <div className="menu">
            <h1>Name</h1>
            <div>biriani</div>
            <div>biriani</div>
            <div>biriani</div>
            <div>biriani</div>
            <div>biriani</div>
            <div>biriani</div>
        </div>
    )

5.<h1>{restrodata?.data?.cards[0]?.card?.card?.info?.name}</h1>
instead of this destructure it

 const {
        name,
        areaName,
        avgRating,
        city,
        cloudinaryImageId,
        cuisines,
        locality,
        totalRatingsString
    } = restrodata?.data?.cards[0]?.card?.card?.info || {};
    
    return restrodata.length === null ? (<Shimmer />) : (
        <div className="menu">
            <h1>{name}</h1>
            <div>{areaName}</div>
            <div>{avgRating}</div>
            <div>{city}</div>
            <div>{cuisines}</div>
            <div>{locality}</div>
            <div>{totalRatingsString}</div>

            <div><img src={CDN_URL + cloudinaryImageId} /></div>
        </div>
    )

6.Add restro id in routes in api also , it should be dynamic
*pass id in routes and read it in api 

*now when i randamly enter the id , how to read it ?
by using useparams
const{resId} = useParams()


7.Now when i click on particular card on home page , that id should be pass on routes
<div className="restr-container">
            {
                filteredrestro.map((data) => <Link className="linkcard" to={"/restraunts/" + data?.info?.id} key={data.info.id}><RestrCard key={data.info.id} resData={data} /></Link> )
            }

        </div>


*1st step
pass id dynamically , when you click on card

<div className="restr-container">
            {
                filteredrestro.map((data) => <Link className="linkcard" to={"/restraunts/" + data?.info?.id} key={data.info.id}><RestrCard key={data.info.id} resData={data} /></Link> )
            }

        </div>

*2nd step
read that id by using params
 const{resId} = useParams()

*3rd step
 const fetchMenuitem = async () => {
        const data = await fetch( MENU_URL + resId) //bind it in api
        const getJsondata = await data.json();
        setRestrodata(getJsondata)
    }


*when i naviaget , page doesnot reload - SPA

8.link is a special tag which is given by routerdom (behind the scene link is using anchor tag)
 *hmtl does not understand Link , react dom making it anchor tag
----------------------------------------------------------------------------------------------------------------------------------------------------------------
8.EPISODE 8 CLASS BASED COMPONENT
1.Use classed based component in about us page

2.create on file UserClass.js
class UserClass extends React.Component{}
*this extend React.component will make this is a class based component
*class based component  is a class which extend from react.component and which has  render method which return some jsxwhich will be converted in to html
*React.component is a class which is from react
*so we have to import it from react

import React from "react"

class UserClass extends React.Component{
    render(){
        return (
            <div className="about-card">
                <div>Name : pooja</div>
                <div>Kundapur</div>
            </div>
        )
    }
}

export default UserClass

3.passing props by using class

*by  using function 
const About = () => {
    return (
        <div>
            <h2>about us</h2>
            <User name={"poojaaaaa"} /> //using function , get it from user.js
            <UserClass/>
        </div>
    )
}
//get it by using props
const User = ({name}) =>{
    return (
        <div className="about-card">
            <div>Name : pooja</div>
            <div>Kundapur</div>
            <div>{name}</div>
        </div>
    )
 

*by using class
const About = () => {
    return (
        <div>
            <h2>about us</h2>
            <User name={"poojaaaaa"} />
            <UserClass name = {"passing props pooja from class based component"}/> //pass parameter
        </div>
    )
}

how to recive it
in about.js
*use constructor  . when we use class constructor is called.
 constructor will recive the props
*use keyword super()

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log('props: ', props);
    }


    render(){
        return (
            <div className="about-card">
                <div>Name : pooja</div>
                <div>Kundapur</div>
                <div>{this.props?.name}</div>//use this keyword
            </div>
        )
    }
}

4.create state variable by using class

*variable using function 
const User = ({name}) =>{
    
    const [countone] = useState([0]);
    const [counttwo] = useState([1]);


    return (
        <div className="about-card">
            <div>Name : pooja</div>
            <div>Kundapur</div>
            <div>{name}</div>
            <div>countone : {countone}</div>
            <div>conttwo : {counttwo} </div>
        </div>
    )
     
}


*variable using class

*state was created whenever a class instance is created
*earlier there is no hook
* this.state - it is a reservered keyword, which contains a big object , we can create more number of variable withinit
*


 constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }


    render(){
        return (
            <div className="about-card">
                <div>Name : pooja</div>
                <div>Kundapur</div>
                <div>{this.props?.name}</div>
                <div>{this.state.count}</div>
            </div>
        )
    }

*create two state variabel using class
 constructor(props){
        super(props)
        this.state = {
            count : 0,
            countone : 1
        }
    }


    render(){
        return (
            <div className="about-card">
                <div>Name : pooja</div>
                <div>Kundapur</div>
                <div>{this.props?.name}</div>
                <div>{this.state.count}</div>
                <div>{this.state.countone}</div>

            </div>
        )
    }

5.*update state variable 
*in function we use setCount
const User = ({name}) =>{
    
    const [countone , setCountone] = useState(0);
    const [counttwo] = useState([1]);


    return (
        <div className="about-card">
            <div>Name : pooja</div>
            <div>Kundapur</div>
            <div>{name}</div>
            <div>countone : {countone}</div>
            <button onClick={
                ()=>{
                    const result = countone + 1
                    console.log('result: ', result);
                    setCountone(result);
                }
            }>increment the count</button>
            <div>conttwo : {counttwo} </div>
        </div>
    )
     
}

*in class also it not update directly
*use this.setState()
*when state variable is update the count , component will be rerendered and just changed the particular portion
class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countone: 1
        }
    }


    render() {
        return (
            <div className="about-card">
                <div>Name : pooja</div>
                <div>Kundapur</div>
                <div>{this.props?.name}</div>
                <div>{this.state.count}</div>
                <div><button onClick={() => {
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>update state count</button></div>
                <div>{this.state.countone}</div>

            </div>
        )
    }
}

---------------------------
6.lifecycle of class based component
*now about us comp is parent
*when we load about us comp
*inside it it found class based comp -child
*it goes to class based component 
*new instance of class is created , whenever class is instanciated'
*first the constructor is called
*then render is called

*NOW ABOUT US CLASS BASED COMP


// class based component 
import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    //geting props

    constructor(props){
        super(props)
        console.log("parent constructor")
    }
 

    render(){
        console.log("parent render")
        return (
            <div>
                <h2>about us class comp</h2>
                <div>-function based</div>
                <User name={"poojaaaaa"} />
                <div>--------------------------------------------------------</div>
                <div>class based</div>
                <UserClass name={"passing props pooja from class based component"} />
            </div>
        )
    }
}


//function based

// const About = () => {
//     return (
//         <div>
//             <h2>about us</h2>
//             <div>-function based</div>
//             <User name={"poojaaaaa"} />
//             <div>--------------------------------------------------------</div>
//             <div>class based</div>
//             <UserClass name = {"passing props pooja from class based component"}/>
//         </div>
//     )
// }

export default About;

parent constructor
 parent render
 child constructor
child render


7.life cycle of class based component.
Class based comp also have  componentDidMount(){} - imp interview (at the end it is called) --it is called when the component is completly mounted in to webpage
About.js:23 ---parent constructor     ==parent constructor called
About.js:23 -----parent render         ==parent render called then it will go to child comp
UserClass.js:12 ----child constructor  ==then child constructor is called
UserClass.js:21 ---child render  ==child render will be called
UserClass.js:16 ---chiled componentDidMount:   ==then chiled componentDidMount called
About.js:17 ------parent componentDidMount:  //at the end it is called parent componentDidMount

8.use of componentDidMount(){}  - API CALL 
*it is used to call api why?    ---------------imp interview question
*in function we use useEffect() --first load our comp , then we will make api call , so we dont want to wait api to render the comp , first we can render comp , then we will make an api call
*1.quickly render the comp
2.api call
3.fill the data

9.if we use multiple children
About.js:23 parent constructor -1st
About.js:23 parent render -- 2nd
UserClass.js:12 child constructor --3rd 
UserClass.js:21 child render -4th
UserClass.js:12 child constructor -5th
UserClass.js:21 child render -6th

//dom is updated
UserClass.js:16 chiled componentDidMount:  - 2 times it is called (7th 8th)
About.js:17 parent componentDidMount:  -9th

10.ligfecycles - full explaination -What is the order of life cycle method calls in Class Based Components
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ -go to this website

//steps
//mounting phase
*when the component is mounted , it is mounted in two phases
*first - render phase
*second - commit phase

*when the comp is mounting , constructor is called and render is called ----render phase , quickly dom is updated
*then the react updates the dom ,  then componentdidmount is called - commit phase (this is the best place to make an api call)

and this mounting cycle happens for evry parent , child

*react tries to batch up render first
and then tries to bacth up the componentdidmount

-----

11.make api call in class based comp
render the component
update the dom
api call


12.Api call using class based comp
*search git hub user api
*use -- get a user api
*https://api.github.com/users/pooja-2001  - use this api
*in class based comp , we can do compdidmount as async

 async componentDidMount() {
       const data = await fetch("https://api.github.com/users/pooja-2001")
       const jsondata = await data.json();
       console.log('jsondata: ', jsondata);
    }

//it will called after component is rendered


*UPDATE JSON DATE (TO SHOW JSON DATA IN UI)
this.state = {
            count: 0,
            countone: 1 ,
            userinfo:{
                name:"deflt name", //first initialize it by giving duummy data
                location:"default loc"
            }
        }

 async componentDidMount() {
       const data = await fetch("https://api.github.com/users/pooja-2001")
       const jsondata = await data.json();

       this.setState({  //then update here by using setstate
        userinfo:jsondata
       })
    }



 <div>{this.state.userinfo.name}</div> //use it


*life cycle explained  --imp intervieeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
*mounting cycle
*update cycle
*unmounting cycle  -- disabling component from ui(whhen this component is disapper , this is called , - when we navigate to another page)


import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countone: 1 ,
            userinfo:{
                login:"deflt name",
                location:"default loc"
            }
        }

    }

   async componentDidMount() {
       const data = await fetch("https://api.github.com/users/pooja-2001")
       const jsondata = await data.json();

       this.setState({
        userinfo:jsondata
       })

    }

    render() {
        const { login, avatar_url } = this.state.userinfo
        return (
            <div className="about-card">
                <div>{login}</div>
            </div>
        )
    }
}

export default UserClass

*as soon as the userclass is loaded , constructor called
*then state variable is created with some defult value
*after  render () called
*our comp renders with the defoult value first on to webpage
*react will update the dom with dummy data

*next compdidmount() was called with an api call was made 
*it called setstate() , --updated cycle begins (refer diagrem) 
*now setstae updates the state variable , then react triggers the render once again
*constructor called oncee
*but this tym , state variable changed with the updated value
*now react will update the dom with the new value
*now it call compdidupdate()  //it is called after evry update
*componentDidUpdate() - it is called at the end



----------------------------------------------------------------------------------------------------------
EPIOSDE-9 OPTIMIZING THE APP


1.CUSTUM HOOK
why we need it ? - readble , reusabel

2.creating a custom hook in restrauntmenu.js
 *it is used to fectching the data 
 
 *create on e custpm hook
      const data = useRestromenu() //always use - use

// const [restrodata, setRestrodata] = useState([]);//insteaed of this
    
    const restrodata = useRestromenu() use this
*by using particular resid i just want that particular restro

*create filw useRestromenu hook under constant , give same menu

*like i angular we used service , same as we used custrom hook


in useRestromenu.js

import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";



const useRestromenu = (resId) => {
    //fetch the data
   
    const [restrodata, setRestrodata] = useState([])
    console.log('restrodata: ', restrodata);

    useEffect(() => {
        fetchMenuitem();
    }, [])

    const fetchMenuitem = async () => {
        const data = await fetch(MENU_URL + resId)
        const getJsondata = await data.json();
        setRestrodata(getJsondata)
    }

    return restrodata;
}

export default useRestromenu;



//restromenu.js

import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestromenu from "../utils/useRestromenu";

const RestroMenu = () => {
    const { resId } = useParams()

    const restrodata = useRestromenu(resId)  //use here

    if (restrodata.length === null) {
        return <Shimmer />
    }
    const {
        name,
        areaName,
        avgRating,
        city,
        cloudinaryImageId,
        cuisines,
        locality,
        totalRatingsString
    } = restrodata?.data?.cards[0]?.card?.card?.info || {};


    const { itemCards } = restrodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

    return restrodata.length === null ? (<Shimmer />) : (
        <div className="menu">
            <h1>{name}</h1>
            <div>{areaName}</div>
            <div>{avgRating}</div>
            <div>{city}</div>
            <div>{cuisines}</div>
            <div>{locality}</div>
            <div>{totalRatingsString}</div>
            <div><img src={CDN_URL + cloudinaryImageId} /></div>
            <ul>
                {
                    itemCards?.map((data) => {
                        return <li key={data?.card.info?.id}>{data?.card?.info?.name}</li>
                    })
                }

            </ul>
        </div>
    )

}

export default RestroMenu;

-----------------------------------
3.TASK- create whether the user is online or offline - by using custom hooks

1.Create useOnlinestatus file under contstnt
 *to check online or offline - use event listner
 addEventListener("online", (event) => { });
    ononline = (event) => { };

//these event listner given by window object or browser;

2.We just want to add at only once , add eventlistner only once so use useeffect
so use useEffect();

3.If eventlistner is offline dont show the cards , return false or if online - show me the card

in custom hook file 
//check online ststus
//return online stutus (boolean value)

import { useEffect, useState } from "react";

const useOnlinestatus = () => {
    
    const [onlinestatus , setOnlinestatus] = useState(true)
    //check if online
    
    useEffect(()=>{

        window.addEventListener("offline" , ()=>{
            setOnlinestatus(false)
        })

        window.addEventListener("online", () => {
            setOnlinestatus(true)
        })

    },[])

    return onlinestatus;
}

export default useOnlinestatus;


4,Then import it in body.js where the cards are present
 const onlinestatus = useOnlinestatus()
    if(onlinestatus === false){
        return <h1>you are offline , plerase check your connection</h1>
    }

5 .Use it in Whole Application
*create a onlineststus in header.
    const onlinestatus = useOnlinestatus()


<li>Online status
                    {onlinestatus  ? " yes" : "no"}
                </li>


------------
4.OPTIMIZING THE APP

CHUNKING OR DYNAMIC BUDLING OR LAZY LOADING OR ONDEMAND LOADING

*size of the js file is increase a lot 
*actually bundler -- it combines all the code and make into one file 
*so index.js , taking lot of mb if we write unoptimized code
*reduce code as much as possible 

//CHUNKING -- Code splitting 
*to break down our app into smaller logical chunks
*logically splt our website into smaller bundler
*so js file - doeanot take time to load

//aDD BUNDLING TO OUR APP
*lets create instamart inside swiigy 
*so lets create doifferent bundler for instamart and remaing

1.Grocery.js ---this is the whole big comp , which has lot of child comp



//USE LAZY LOADING
*in App.js 

2.const Grocery = lazy()

*lazy() is the function which is given by react
*it will takes a callback function and we can write a import
*import() is basically function , and function will take the path of Grocery(where it comes from)
*now i am not importing grocery comp normally
*i will import it by using lazy

3.const Grocery = lazy(() =>import("./Components/Grocery") )
//coment // import Grocery from "./Components/Grocery"


4.*WORKING 
*in the network tab index.js - bundler is present which contains all the code which we have wriiten 
*now we have applied lazy in grocery comp , so initially in index.js file there is no grocery code
*when i click on grocery , it will create separate bundler named grocery.js 
*splitting the bundler - leads to increase our performance


5.const Grocery = lazy(() =>import("./Components/Grocery") )when we write this code
*now we are getting error
A component suspended while responding to synchronous input.

*when i load the home page first and when i go to grocery grocery.js file bundler takes time to load
*to handle that state react uses suspense
*suspense is the comp , which is comes from react library

6.IMPORTING SUSPENSE
*import React, { lazy , Suspense} from "react";
*wrap suspense in router pathcomponent

{
                path: "/grocery",
                element: <Suspense  fallback={<Shimmer/>}><Grocery /></Suspense> ,
            }

*fallback is aplace holder , there we can wtite some jsx , this is used like a loader
*when i naviate to grocery.js , it will take time to load , so just add this loader


therefor to reduce the bundle sizw we use lazy loading (so that all the code doeanot come at once)

--------------------------------------------------------------------------------------------------------------------------------------------------------------

EPISODE 10 

1.DIFFERENT WAY ADDING CSS
 
 1.index.css

 2.use sass ans sass -Syntactically Awesome Style Sheets , sess

 3.material ui

 4.tailwind

 5.bootsratp

 6.chakra ui

 7.Ant deasign - react framework 


2.USE TAILWIND CSS TO OUR COMPONENT
 *first go to tailwind website - getstred - go to frameworks guide  - go to parcel
*install tailwind css

-------------------------------------------------------------------------------------------------------------------------------------------------------------
Chapter 11 - Data is the new Oil

1.HIGHER ORDER FUNCTION
*higher order function is a function that takes a component and then enhances that component and  returns a new component

2.TASK - ADD isOpen LABEL FOR RESTRO CARD

3 IF THE RESTO IS OPEN ADD OPEN CARD
  
4.NOW CREATE HIGHER ORDER FUNCTION
  *create it in same file RestrCard.js
  *this higher order function will take restrocard as an input and it will return new comp (which is a enhanced retrocard - means restrocard with isopen label)

  1. const withIsOpenLable = (RestrCard) =>{ //TAKE RestrCard AS INPUT
       }

  2.IT WILL RETURN ANOTHER COMPONENT
     const withIsOpenLable = (RestrCard) =>{
       return  () =>{  //return new comp

       }
    }

  3.export const withIsOpenLable = (RestrCard) => { //just do named export
    return () => {

        return (<div>
            <label>isOpen</label>
            <RestrCard /> //with restrocard isOpen tag is added 
        </div>)

    }
  }
   
 4.in body.js , if it isOpen render withIsOpenLable
   *so import it first
   import RestrCard, { withIsOpenLable } from "./RestrCard";

5.creatre a variable in body.js
    const restroCardIsOpen = withIsOpenLable(RestrCard);
 
 *withIsOpenLable it is a higher order function , which we have passed in restro card , it will return us a new comp , which has a label inside it (isOpen)
 *now restroCardIsOpen is new compnent created with enhanced comp

6.then use this comp
 <div className="restr-container">
   {
 filteredrestro.map((data) => <Link className="linkcard" to={"/restraunts/" + data?.info?.id} key={data.info.id}>
  {
    data?.info?.isOpen ? (<restroCardIsOpen key={data.info.id} resData={data} />) : (<RestrCard key={data.info.id} resData={data} />)//also pass pros to new comp i.e restroCardIsOpen
 }
 </Link>)
}
 </div>

7.THEN we need to recive the props in restrocard.js
export const withIsOpenLable = (RestrCard) => {
    return (props) => { //recive the props here

        return (<div>
            <label>Open</label>
            <RestrCard {...props} /> //pass data restrocard using spread operator so that all data is passed to restrocard
        </div>)

    }
}
8.WHY WE NEED THIS
*if we want some extra content without changing the actual card then we can use this higher order function

9.replace with isopen to veg 
-------------------------------------------------------------------------------------------------------------
2.TASK - WHEN I CLICK ON PARTICULAR CARD , GO TO DETAIL PAGE AND SHOWS THE RECOMENDED LIST OF THAT RESTRO

  1.IN RESTROMENU.JS  , First filter out the category

    const { itemCards } = restrodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    
    const filteredCategory = restrodata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
        return item.card?.card ?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

  2.CREATE AN ACCORDIAN WITH HEADING in RESTROMENU.JS
    *there is many category , so create separate componenet

  3.CREATE RestroCategory.js WHERE WE CAN BUILD ACCORDIAN
    * const RestroCategory = () =>{

    return (
        <div>
           {/* accordian header */}
           {/* accordian body */}

        </div>
    )
}
export default RestroCategory ;

4.IN RESTROMENU.JS  , IMPORT RestroCategory , so use map , for each category (we should see 20 different category so we use map)
{
                filteredCategory?.map((data) => {
                    return <RestroCategory />
                })
            }

5.CREATE HEADER FIRST
const RestroCategory = (props) =>{

    const {data} = props;
    const { itemCards } = props?.data;
    console.log('itemCards: ', itemCards);

    return (
        <div>
           {/* accordian header */}
           <h1>{data?.title} ({itemCards.length})<span>
            <button>click here</button>
            </span></h1>

            {/* accordian body */}


        </div>
    )
}
export default RestroCategory ;

6,.ON CLICK ON HEADER NEED TO SHOW BODY 
 *create one more comp itemlist.js  - show all the list

7/FINAL , WHEN I CLICK ON BUTTON NEED TO SHOW LIST , AND WHEN I AGAIN CLICK ON BUTTON NEED TO HIDE IT

import { useState } from "react";
import ListItem from "./ListItem";



const RestroCategory = (props) => {

    const { data } = props;
    const { itemCards } = props?.data;
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    console.log('isButtonClicked: ', isButtonClicked);

    return (
        <div>
            {/* accordian header */}
            <h1>{data?.title} ({itemCards.length})<span>
                <div>
                    <button onClick={() => setIsButtonClicked(!isButtonClicked)}>
                        Click here
                    </button>
                    {/* accordian body */}
                    {isButtonClicked && (
                        <div>
                            {
                                itemCards.map((itemdata, index) => {
                                    return <ListItem key={index} data={itemdata?.card?.info} />
                                })
                            }
                        </div>
                    )}
                </div>
            </span></h1>


        </div>
    )
}
export default RestroCategory;


LIFTING AND UNLIFTING
8. when i click on another one , previous one should not expand. -ITSHOULD HIDE - APPLY CONTROLLED AND UNCONTROLLED (LIFTING AND UNLIFTING) ---- VVVVIMPPPPP
*react developer tools -- add this into your chrome
*we can go to the component - in network tab , we can see the the props and state
*all the restrount cat items we have own states 
const [isButtonClicked, setIsButtonClicked] = useState(false);
*right now each of the  RestroCategory has power to expand , collapse and show (we have a state to show true or false in restrocategory)
*now we want its parent (restromenu ) to control all of these (now we have to set it in restro menu)

*now we dont want react hooks or state variable for each category , will remove it;

9.REMOVE INDIVIDUAL STATE VARIABLE , INCLUDE IT IN RESTROMENU
*IN restromenu.js
 {/* create accordians */}
            {
                filteredCategory?.map((catdata,index) => {
                    return <RestroCategory key={index} data={catdata?.card?.card} isButtonClicked={false}/> //isButtonClicked={false}  include this
             })
  }

*in restrocategory.js , remove the state variable , and recive the props from parent variable
const RestroCategory = ({ dataa, isButtonClicked}) => {
    console.log('props: ', dataa);
    console.log('isButton: ', isButtonClicked);

*Controlled and uncontrolled  - vvvvimp
*this is the controlled component bcoz restromenu comp is controllinmg restrocategory - controlled
  controlled comp is relieng upon parents 
*when it has its own state variabel , it is uncontrolled comp

*now parent has controlled to hide the all accordians , bcoz we set in parent as false
 {/* create accordians */}
            {
                filteredCategory?.map((catdata, index) => {
                    return <RestroCategory key={index} dataa={catdata?.card?.card} isButtonClicked={false} />
                })
            }

*Now we have taken props from parent
const RestroCategory = ({ dataa, isButtonClicked}) => {
    return (
        <div>
            {/* accordian header */}
            <h1>{dataa?.title} ({dataa.itemCards.length})<span>
                <div>
                    <button>
                        Click here
                    </button>
                    {/* accordian body */}
                    {isButtonClicked && (
                        <div>
                            {
                                dataa?.itemCards.map((itemdata, index) => {
                                    return <ListItem key={index} data={itemdata?.card?.info} />
                                })
                            }
                        </div>
                    )}
                </div>
            </span></h1>
        </div>
    )
}

10.NOW USING THIS CONTROLLED COMP , WE NEED TO DO HIDE AND COLLAPSE ON CLICK ON BUTTON
*if we collapse first one set state as 
isButtonClicked={index === 0 && true} //only for first item --if index is zero then set true
 or we can write like this  -  isButtonClicked={index === 0 ? true : false}
*NOW WE HAVE TO MAKE THIS DYNAMIC
 - we can build this by using state

    const [showIndex , setShowIndex] = useState(0) //first one should show

*incluse here isButtonClicked={index === showIndex ? true : false}


*showindex should show dynamically on click on item - need to alter my showindex
*when i click on button in child , we should change the statevariable of my parent
 in retromenu.js//parent comp

    const [showIndex , setShowIndex] = useState(0) //need to set state variable here , eheni click on button in child

{
                filteredCategory?.map((catdata, index) => {
                    return <RestroCategory key={index} dataa={catdata?.card?.card} isButtonClicked={index === showIndex ? true : false} />
                })
            }

*in restrocategory.js //child comp
const RestroCategory = ({ dataa, isButtonClicked}) => {

    const handleclick = ()  =>{  //when i click on here , need to set statevarible in parent

    }
    return (
        <div>
            {/* accordian header */}
            <h1>{dataa?.title} ({dataa.itemCards.length})<span>
                <div>
                    <button onClick={handleclick}>
                        Click here
                    </button>
                    
                    {/* accordian body */}
                    {isButtonClicked && (
                        <div>
                            {
                                dataa?.itemCards.map((itemdata, index) => {
                                    return <ListItem key={index} data={itemdata?.card?.info} />
                                })
                            }
                        </div>
                    )}
                </div>
            </span></h1>
        </div>
    )
}


*we can pass the function in parent that is setShowIndex 
 {
                filteredCategory?.map((catdata, index) => {
                    return <RestroCategory key={index} dataa={catdata?.card?.card} isButtonClicked={index === showIndex ? true : false} setShowIndex = {() => setShowIndex(index)}/>
                })
            }

*pass the usestate function    
setShowIndex = {() => setShowIndex(index)}

*recive it in child 
const RestroCategory = ({ dataa, isButtonClicked, setShowIndex }) => {
    console.log('setShowIndex: ', setShowIndex);

    const handleclick = ()  =>{
        setShowIndex(); //include here
    }


11.FINAL OUTPUT , WE CAN SEE IT IN COMPONENT IN NETWORK , STATE IS MAINTAINED BY RESTROMENU (PARENT) - CONTROLLED
code 
*in Restromenu.js
    const [showIndex , setShowIndex] = useState(0)
{
                filteredCategory?.map((catdata, index) => {
                    return <RestroCategory key={index} dataa={catdata?.card?.card} isButtonClicked={index === showIndex ? true : false} setShowIndex = {() => setShowIndex(index)}/>
                })
            }

*in restrocategory.js

const RestroCategory = ({ dataa, isButtonClicked, setShowIndex }) => {
    console.log('setShowIndex: ', setShowIndex);

    const handleclick = ()  =>{
        setShowIndex();
    }
    return (
        <div>
            {/* accordian header */}
            <h1>{dataa?.title} ({dataa.itemCards.length})<span>
                <div>
                    <button onClick={handleclick}>
                        Click here
                    </button>

                    {/* accordian body */}
                    {isButtonClicked && (
                        <div>
                            {
                                dataa?.itemCards.map((itemdata, index) => {
                                    return <ListItem key={index} data={itemdata?.card?.info} />
                                })
                            }
                        </div>
                    )}
                </div>
            </span></h1>
        </div>
    )
}
--------------------------------------------------------------------------------------------------------------------
3.PROPS DRILLING
*usually data is passing from prent to child by using props 
 for ex , restromenu to restrocategory to listitem
*now the requirment is , if i want to pass the data from restromenu to listitem , how will i pass ? we cant pass it directly
*we ca pass through restromenu to restrocategory to listitem -but it is not a right way
*this is called prop drilling

Prop drilling, also known as "props drilling" or "component chaining", refers to the process in React where props are passed from a parent component to a deeply nested child component through several intermediate components. This happens when data needs to be passed down the component tree to a component that is several levels deep.

To mitigate the issues caused by prop drilling, you can use techniques like React Context API or state management libraries like Redux. These approaches allow you to share data across components without the need to pass props manually through each level of the component tree. This can lead to cleaner and more maintainable code, especially in larger applications with complex component hierarchies.

-------------------------------------------------------------------------
4.React Context API  (to avOID DRILLING)
*for exam , if we use logged in user name , we want that name in all over page 
*so create on useContext.js file in utils for React Context API  

*create createContext() which is comming from react , it has some pice of code which react will hold
*lets create loggedinused , give some default name
const { createContext } = "react";

const userContext = createContext({
    loggedInUser: "default"
})

export default userContext; 

*we can access in anywhere

*WILL ACCESS THIS IN HEADER
*we can access this by using usecontext hook
*in header.js
import { useState, useEffect, useContext } from "react";
import userContext from "../utils/userContext"

const contectData = useContext(userContext); //then we can use it //we can use every where now , just need to import it


*ACCESS THE CONTEXT BY USING CLASS BASED COMPONENT IN ABOUT.JS
*first import it
*by using consumer we can access it
*in html part  <userContext.Consumer></userContext.Consumer> , we need to do like this
*it takes callback function

 <userContext.Consumer>
                    {
                        (data)=><h1>{data.loggedInUser}</h1>  //here we can get the data
                    }
                </userContext.Consumer>
-----------------------

5.USE Context Provider
  *now the usename is default , if i change the username , by calliung api , in api call if we got the userinfo , use context api

*in app.js
 const [userName, setUserName] = useState()

    //authentication
    useEffect(() => {
        //make an api call
        const data = {
            name: "pooja"
        }
        setUserName(data.name)
    })
 this is the authentication logic

*pass this context api to the app use context provider , wrap whole app by this provider , providing new value to it by using provider
 return (
        <userContext.Provider>
            <div className="main">
                <Header />
                <Outlet />
            </div>
        </userContext.Provider>
    )

*return whatever value inside it
 return (
        <userContext.Provider value={{loggedInUser : userName}}>
            <div className="main">
                <Header />
                <Outlet />
            </div>
        </userContext.Provider>
    )

*every where it is updated to pooja instead of default

*final code in app.js
const AppLayout = () => {
    const [userName, setUserName] = useState()

    //authentication
    useEffect(() => {
        //make an api call
        const data = {
            name: "pooja"
        }
        setUserName(data.name)
    })
    return (
        <userContext.Provider value={{loggedInUser : userName}}>
            <div className="main">
                <Header />
                <Outlet />
            </div>
        </userContext.Provider>
    )

}

*if we wrap it only inside header , value will provide only to header
 --pooja name is reflected only in header

*WE CAN CHANGE THE VALUE ALSO FOR DIFFERENT COMP
 return (
        <div className="main">
            <userContext.Provider value={{ loggedInUser: "pooja shetty" }}> //for only header it will show pooja shetty
                <Header />
            </userContext.Provider>
            <userContext.Provider value={{ loggedInUser: userName }}> //rest of the comp it will show username from the aipi
                <Outlet />
            </userContext.Provider>

        </div>
    )

------------------------------------------------------------------------------------------------------------------------------------------

12.REDUX --Let's Build our Store
*redux offers easy debugging
*two libraries we are using now one is Redux Toolkit  another one is react-redux

1.REDUX ARCHITECTURE
*when i click on add item in food , it should increase the number in cart
*we have a redux store , inside redux store there is a slice (it is a small portioon of the redux store)
*we can create multiple slices in redux store
*to keep logical partitions in redux ,  this logical partitions are redux
*suppose if we want to add cart data into cart , we can create separate slice for cart data in redux store
*so in , suppose if we want to create login info , we can create login info slice 

*initially cart slice is empty array
*when i put data into this , it can just modify to the card slice

1.WHEN I CLICK ON ADD ITEM , HOW DATA WILL GO TO REDUX STORE (CART SLICE)?
*we cant dirctly add the data to card slice
*when i click on add item , it dispatches an action , 
*it calls a function , then this function internally modifys the cart
*this function is basically known as a reducer , this reducer function is modies our cart ,(which updates the slice of the reudx store) 
*this is how to write data

2.HOW TO WRITE DATA IS DONE , THEN HOW TO READ DATA?(HOW TO SHOW NUMBER IN CART)?
*for that we use something known as a selector
*selector is used to read the data from our store and this selector is used to modify our data in cart comp.
*this is called subscribing to the stores

2.LETS BUILD OUR STORE

1.INSTALL REDUX TOOLKIT AND REACT-REDUX
npm install @reduxjs/toolkit
npm install react-redux

2.CREATE OUR STORE
*crate store in utils -appStore.js
*we will use a function that is configurestore to create our own store
*configureStore  - this will give a atore of our react appliocation- this job is done by reduxjs toolikt

import { configureStore } from "@reduxjs/toolkit";
const appStore= configureStore();
export default appStore;

3.ADD THIS STORE TO OUR APPLICATION (PROVIDE THE STORE TO OUR APP)
*we need to provide our store to the application(root to this application)
*we need something known as provider that will be import it from react-redux
*this kind of a bridge between react application and redux (redux store) -this job is done by react-redux

*how to use it?
*wrap it with whole root comp and it takes store as the prop
*it will take appStore that we craeted store ; import it from utils

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

<Provider store={appStore }> //wrap it here
            <userContext.Provider value={{ loggedInUser: userName }}>
                <div className="main">
                    <Header />
                    <Outlet />
                </div>
            </userContext.Provider>
 </Provider>

4.ADD SLICE (CREATE A CART SLICE);
*create a cartslice.js in utils
*cartslice can be created by using a function createslice

import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice();

*and this function creates a configuration to create a slice
--first configuration it takes is name 
   
name:"cart",

--second one is initialstate it takes the intitial state ,  take item and initialzw with empty array

initialState:{
            items : []
        },

--then we have reducers object - here we are writing reducer function 
  *inside the reducers object we have a action and reducer function is mapped to this

 reducers:{
            addItem //action : (state , action)=>{ //reducer function
                console.log('action: ', action);
                state.items.push(action.payload)
            }
        }


  *action - add aitem , clear a cart like that
  *this reducer function modifies the data inside our slice
  *addItem is the action here
action -- > reducer function --- > modifies the slice of the store   

  *reducer function takes two parameters , state and an action , it modify the state based on the action
  *state is nothing but initialstate
  *it will take the state and push the action.payload

const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            items : []
        },
        reducers:{
            addItem : (state , action)=>{
                console.log('action: ', action);
                state.items.push(action.payload)
            }
        }

    }
);

*write another reducer removeItem
*so we can use pop()
*removing one item from the top

 removeItem: (state, action) => {
              state.items.pop()
  }


*create one more reducer clear cart
-here we need to make array empty , so we dont need action
clearCart:(state)=>{
                state.items.length = 0; //it will make array empty
            } 


//reducers
const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: []
        },
        reducers: {
            addItem: (state, action) => {
                state.items.push(action.payload)
            },
            removeItem: (state) => {
              state.items.pop()
            },
            clearCart:(state)=>{
                state.items.length = 0;
            }
        }

    }
);

*nnow we will export reducer and actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



//final code
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: []
        },
        reducers: {
            addItem: (state, action) => {
                state.items.push(action.payload)
            },
            removeItem: (state) => {
                state.items.pop()
            },
            clearCart: (state) => {
                state.items.length = 0;
            }
        }

    }
);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


5.ADD SLICE TO OUR STORE
*add cartreducer in appStore
in appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice"

const appStore= configureStore(
    {
        reducer:{
            cart : cartReducer
        }
    }
);

export default appStore;

6.READ THE STORE (SUBSCRIBING THE STORE USING THE SELECTOR) 

*go to header.js
 <li>cart (0 items ) </li>

*lets give item name in cartSlice.js
initialState: {
            items: ["Burger","Pizza","Idli", "vada"]
        },

*use selector in header.js

7.USE SELECTOR IN HEADER.JS
*selector is nothing but hook
*import useSelector hook from react-redux

    const cart = useSelector() 

*use selector gives the acces to opur atore
    const cartItems = useSelector((store) => store.cart.items);

*use it
 <li>cart ({cartItems.length} items ) </li>

--------------------------------------------------------------------------------------------------------------
live EXAMPLE

7.ONCLICK OF ADD BHUTTON , WE NEED TO DISPACTH AND ACTION in listeitem.js
1.FIRST STEP IS PERFORM THE ACTION (dispacth an action)
*for dispacthing the action we need to use hook
    const dispatch = useDispatch()
*earlier we exported the action use that action
*now will use additem action 
*first we need to import it

 const handlebutton = () =>{
        //dispatch
        dispatch(addItem()) //dispatch the items
    }

*and now pass our data inside the addItem

   dispatch(addItem("pizza"))

*whenever we dispatch the action redux will create a payload inside the object and it will take the object and pass it as the second argument
{
payload:"pizza"
}
addItem: (state, action) => { //pass it as a second argument
                state.items.push(action.payload)
            },


done ----- when i click on the button it will add number in cart



------------------------------------------------------------------------------
8.WANT TO PASS ACTUAL DATA , BUILD CART PAGE
1.in list.js
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slice/cartSlice"


const ListItem = (props) =>{

    const {data} = props;
    const dispatch = useDispatch()

    const handlebutton = (item) =>{
        //dispatch
        dispatch(addItem(item))
    }
 
    return (
        <div>
            <ul>
                <li className="fontsize">{data.name}</li>
                <li className="fontsize">{data.price} rupee</li>
                <button onClick={()=>handlebutton(data)}>add item to the cart</button>
            </ul>
        </div>
    )
}

export default ListItem;

2.subscribe in header

3.BUILD CARD PAGE
1.create cart , add router
2.add cartitems in from the store in cart component
3.or we can reuse the comp


4.ADD ITEM TO THE CART
const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items)
    console.log('cartItems: ', cartItems);
    return (
        <div>
            <h1>hii</h1>
                {
                    cartItems.map((data)=>{
                       return <ul>
                            <li key={data.id}>{data?.name}</li>
                        </ul>
                    })
                }
        </div>
    )

}

5.CLEAR THE CART

const cartItems = useSelector((store)=>store.cart.items); //always subscribe to the specific portion of the store for ex this one , this is very much effective---vvvvvimpppp interview question

    const dispatch = useDispatch();


<button onClick={clearcart}>clear the cart</button>






//practice
A.Inception
 episode 1 , part 1
1.create html file , print hello world?
2.how to print hello world by using js?
3.what is cdn?
4.what is crossorigin attribute?
5.why two libraries added in html?
6.how to inject cdn links into project ?
---------------------------------------------------------------------------------------
EPSIDOE 1 PART 2
1.how to create hwllo world by using react?.sss
------------------------------------------------------------------------------------
EPISODE 1 PART 3
1.write js code separatly , 
2.how to add css into it?
3.what is React.createElemnt(); what it returns?
4.what is React.render(); how it works?
-------------------------------------------------------------------
episode 1 part 4
1.how to create nested element?
<div id="parent">
    <div id="child">
        <h1>

        </h1>
    </div>
</div>

2..<div id="parent">
    <div id="child">
        <h1> hi 1</h1>
        <h1> hi 2</h1>
    </div>
</div>   how to create siblings of one child?

-----------------------------------------------------------------------------------------------------------------
episode 1 , part 5
1does order of html code matters?
2if i alreday have children in root in index.html how it works?
3.<body>
    <h1>geee</h1>
    <div id="root">
        <h1>hii</h1>
    </div>
    <div>jjjjj</div>
    
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./App.js">
    </script>
</body>

in js 
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "hiiii h1"),
            React.createElement("h2", {}, "hiiii h2")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  ehat is the output?
-----------------------------------------------------------------------------------------------------------------
● What is Emmet?
● Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? - see my Youtube video ;)

end episode 1
------------------------------------------------------------------------------------------------------------------------
Episode 2 part 1
1.what is npm?
2.what is package.json?
3.why do we need package.json?
4.what is bundler? name those
5.what is caret? how it works?
6.what is the difference between tilde and caret?imp interview questions.
7what is the differnece between package json and package-lock json?
8..what is the differnece between package json and package-lock json?
7.what is integrity in package-lock json?
8.what is there in nodemodules?
9.what is  transitive dependency ?
10.what is gitignore?
11.why do we prefer parcel and uses ?
12.what is HMR?

- What is `NPM`?
● - What is `Parcel/Webpack`? Why do we need it?
● - What is `.parcel-cache`
● - What is `npx` ?
● - What is difference between `dependencies` vs `devDependencies`
● - What is Tree Shaking?
● - What is Hot Module Replacement?
● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
● - What is `.gitignore`? What should we add and not add into it?
● - What is the difference between `package.json` and `package-lock.json`
● - Why should I not modify `package-lock.json`?
● - What is `node_modules` ? Is it a good idea to push that on git?
● - What is the `dist` folder?
● - What is `browserlists`
Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html (MDN Docs)

-------------------------------------------------------------------------------------------------------------------
EPISODE 3 
1HOW TO CREATING SCRIPT FOR PRODUCTION AND DEV?
2.what is jsx? 
3.what is babel? how it works?
4.how to add class and attribute using jsx?
5.what is functinal component?write its syntax?
6.what is component composition?
7.how to put element insdie a component?

● What is JSX?
● Superpowers of JSX
● Role of type attribute in script tag? What options can I use there?
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

Coding Assignment:
● Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
○ Create the same element using JSX
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
● Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice
------------------------------------------------------------------------------------

EPISODE 4
1.what is props?
2.how to pass data from parent to child using props? by using array of object

  Assignment
● Is JSX mandatory for React?
● Is ES6 mandatory for React?
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
● How can I write comments in JSX?
● What is <React.Fragment></React.Fragment> and <></> ?
● What is Virtual DOM?
● What is Reconciliation in React?
● What is React Fiber?
● Why we need keys in React? When do we need keys in React?
● Can we use index as keys in React?
● What is props in React? Ways to
● What is a Config Driven UI ?


Coding Assignment:
● Build a Food Ordering App
○ Think of a cool name for your app
○ Build a AppLayout
○ Build a Header Component with Logo & Nav Items & Cart
○ Build a Body Component
○ Build RestaurantList Component
○ Build RestaurantCard Component
○ Use static data initially
○ Make your card dynamic(pass in props)
○ Props - passing arguments to a function - Use Destructuring & Spread
operator
○ Render your cards with dynamic data of restaurants
○ Use Array.map to render all the restaurants

----------------------------------------------------------------------------------------------------------------------------
EPISODE 5
1.what is named export?
2.how to import named export?
3.name 2 types of export? and how to im[port it?
4.LIST event handler ? and syntax
5.what is state variable , when it is used , why it is used?
6.what is react hookr?name two important hooks? AND EXPLAIN , how dom and ui is connecting


● What is the difference between Named Export, Default export and * as export?
● What is the importance of config.js file
● What are React Hooks?
● Why do we need a useState Hook?
Coding Assignment:
● Clean up your code
● Create a Folder Structure for your app
● Make different files for each Components
● Create a config file
● Use all types of import and export
● Create a Search Box in your App
● Use useState to create a variable and bind it to the input box
● Try to make your search bar work

--------------------------------------------------------------------------------------------------------------------------------------
EPISODE 6
1.what is use effect , how it iused , when it is called?
2.how to fetch the api
3.use swiggy api , remove hardcoded data
4.HOW to use shimmer ui?
5.why use state variabel used instaed of normal variable?
6.CREATE BUTTON LOGIN CLICK ON IT LOGOUT AGAIN click on it login so on
7.Create search functinality
Chapter 06 - Exploring the world
● What is a Microservice?
● What is Monolith architecture?
● What is the difference between Monolith and Microservice?
● Why do we need a useEffect Hook?
● What is Optional Chaining?
● What is Shimmer UI?
● What is the difference between JS expression and JS statement
● What is Conditional Rendering, explain with a code example
● What is CORS?
● What is async and await?
● What is the use of `const json = await data.json();` in getRestaurants()
Coding Assignment :
● Play with the useEffect Hook to see when it is called?(before or after render)
● Play with dependency array in useEffect Hook
● Play with the developer console by putting a debugger in render and useEffect
● Call an actual API to get data
● Handle Error in your API call
● Build Shimmer UI when data in not loaded
● Render your UI with actual API data
● Make Search functionality work
● Make a Login Logout button which toggles with a state
-------------------------------------------------------------------------------------------------------------------
episode 7. ROUTING
Chapter 07 - Finding the Path
Assignment
● What are various ways to add images into our App? Explain with code examples
● What would happen if we do console.log(useState())?
● How will useEffect behave if we don't add a dependency array ?
● What is SPA?
● What is difference between Client Side Routing and Server Side Routing?

Coding Assignment:
● Add Shimmer Effect without installing a library
● Install react-router-dom
● Create a appRouter and Provide it to the app
● Create a Home, About, Contact Page with Link (use child routes)
● Make a Error page for routing errors
● Create a Restaurant Page with dynamic restaurant ID
● (Extra) - Create a login Page using Formik Library


1.what is useeffect() , when it ois called , explain 3 cases 
2.what is the work of dependecy array
3.how to install react router?
4.HOW TO USE THIS LIBRARY ?
5.create invalid path 
6.How to create children routes? keep it header constant
7.what is outlet?
8.How to rdirect to particular page on clicking?
9.what is link tag?

task
1.when u click on particular card , navigate to next page with full details
--------------------------------------------------------------------------------------------------------------------------------
8.EPISODE 8 CLASS BASED COMPONE
Theory Assignment:
● How do you create Nested Routes react-router-dom cofiguration
● Read abt createHashRouter, createMemoryRouter from React Router docs.
● What is the order of life cycle method calls in Class Based Components
● Why do we use componentDidMount?
● Why do we use componentWillUnmount? Show with example
● (Research) Why do we use super(props) in constructor?
● (Research) Why can't we have the callback function of useEffect async?
Coding Assignment:
● Create a Class Based Component
○ Create 2 class based child components
○ Pass props from Parent to child
○ Create a constructor
○ Create a state variable inside child
○ Use this.setState to update it
○ What if there are multiple state variables?
○ Write a console.log for each lifecycle method
○ Play with the console logs to find out the correct order of their execution
● Create interval inside componentDidMount?
○ Use clearInterval to fix the issue caused by that interval

1.how to write class based component?
2.how to pass props by using class compoent?
3.why we need super ()?
4.how to create state variable in class component?
5.how to update state variable in class component?
6 .give the order - What is the order of life cycle method calls in Class Based Components
ans:
About.js:23 ---parent constructor
About.js:23 -----parent render
UserClass.js:12 ----child constructor
UserClass.js:21 ---child render
UserClass.js:16 ---chiled componentDidMount: 
About.js:17 ------parent componentDidMount:  //at the end it is called
7.what is the use of componentDidMount(); why?
8.what is the use og componentDidUpdate and componentWillUnmount()?

----------------------------------------------------------------------------------------------------------------
EPIDOE 9 - optimizing the app
 
Theory -
● When and why do we need lazy()?
● What is suspense?
● Why we got this error : A component suspended while responding to
synchronous input. This will cause the UI to be replaced with a loading indicator.
To fix, updates that suspend should be wrapped with startTransition? How does
suspense fix this error?
● Advantages and disadvantages of using this code splitting pattern?
● When do we and why do we need suspense?
Coding -
● Create your custom hooks
● Try out lazy and suspense
● Make your code clean.

1.how to use custom hooks , why it is needed?
2.create online offline ststus 
3.what is code chunking , or CHUNKING OR DYNAMIC BUDLING OR LAZY LOADING OR ONDEMAND LOADING ?
4.how to do lazy loading?
-----------------------------------------------------------------------------------------------------------
EPISODE 10 -- JO DIKTHA HAI

Theory:
● Explore all the ways of writing css.
● How do we configure tailwind?
● In tailwind.config.js, what does all the keys mean (content, theme, extend,
plugins)?
● Why do we have .postcssrc file?
Coding:
● Configure Tailwind and try to build your whole app using tailwind.

1.what is sass and tailwind?
2.how to insatll tailwind ? what is postcss?
3.npx tailwindcss init ? use of this
---------------------------------------------------------------------------------------------------
Chapter 11 - Data is the new Oil

Theory:
● What is prop drillingor component chaining? -- vvimpp
● What is lifting the state up? (controlled and uncontrolled) - vvimp 
● What is Context Provider and Context Consumer?
● If you don’t pass a value to the provider does it take the default value?
Coding:
● Practice React Context with code examples
● Try out Nested Contexts

1.what is higher order function?
2.how to create higher ordeer function , how to pass data and recive data?
3.create accordian , when i click on title it should expand, all should not expand , when i click on another one , previous one should not expand.
4.what hook is used for context api ? how it works
5.how to use context api in class based comppnent?
6.what are the two ways to access the context?
7.what is tthe difference between redux and context api?
-------------------------------------------------------------------------------------------------------------------
Chapter 12 - Let's Build our Store
Theory:
● useContext vs Redux.
● Advantage of using Redux Toolkit over Redux.
● Explain Dispatcher.
● Explain Reducer.
● Explain slice.
● Explain selector.
● Explain createSlice and the configuration it takes.
Coding:
● Practice making a store, slices and do read and write operations using Redux
Store
● Build Cart Flow using Redux Store

1.how to INSTALL REDUX TOOLKIT AND REACT-REDUX?
2.how to .CREATE OUR STORE ?
3.ADD THIS STORE TO OUR APPLICATION?
4.HOW TO ADD SLICE TO OUR STORE?
5.WHAT IS THE DIFF BTWEEN THESE THREE
<button onClick={handlebutton}>add item to the cart</button>
 <button onClick={handlebutton(item)}>add item to the cart</button>
 <button onClick={() =>{handlebutton(item)}}>add item to the cart</button>






















































 














 





























  













 







 

  






























  
   




