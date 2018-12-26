* index.html - <div id="root"></div> - this is where the React app gets rendered in the browser
* index.js - stores render call from React DOM.  It import App.js components and tells React where to render it.  
* index.css - stores the base styling of the application
* ServiceWorker - web API that helps with caching of assets and other files so when the user is offline or a on a slow network the page will be still working.  

## Async/Await


## Authentication
* [Setting Up Authentication for Server to Server Production Applications](https://cloud.google.com/docs/authentication/production)

## BodyParser
* [How bodyParser() works](https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90)

## Components
### Functional Components
* Javascript functions
* Cannot have states
* Cannot have methods
### Class Components
* Have states, lifecycle hooks (conponentWillMount, componentDidMount), methods
* [React Component State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)


## Concurrently
* [NPM Module](https://www.npmjs.com/package/concurrently)

## Dialogflow
* [nodejs-dialogflow](https://github.com/googleapis/nodejs-dialogflow)
* [Setting up authentication](https://dialogflow.com/docs/reference/v2-auth-setup)

## Javascript
In Javascript `true && expression` will always evaluated to expression
## Redux
Use it when you have a piece of application state that needs to be mapped to multiple components.

## State

In React, each time state changes it is reflected in the render content.
After the component is re-rendered, the method `componentDidUpdate` is called.
When rendering components, we can access DOM nodes of React elements.  We can create a reference by assigning `ref` to the property.  
```javascript
<input 
    type="text" 
    ref={input => this.input = input} 
    value={this.state.currentQuery} 
    onChange={this.handleInput}
/>
```
Then, using `this.input` we have access to all the methods and properties of this `input` element of the DOM.

## Unique Session for Visitors
1. generate unique Id in React 
2. set the Id in the cookie
3. send this id to API endpoint in backend app
4. construct a session from global session and unique id 
5. make a call to Dialogflow with a new session

### `cookies.set('userID', uuid(), { path: '/' })`
* constructor is for setting initial states
* we want cookies initialized before anything
* we set a cookie by calling cookies.set
* the first parameter is the cookie name = userID
* the next parameter is the value that we want to write in the cookie = uuid()
* user id will be a unique id generate by uuid module
* by setting the path we tell uuid module that cookie is accessible on all of the pages
* since we do not want for the cookie to be regenerated when the user reloads the page we will add an if
* set - for setting a cookie
* get - for getting a cookie


export GOOGLE_APPLICATION_CREDENTIALS=/path-to-keys/key-file.json
export GOOGLE_APPLICATION_CREDENTIALS=/Users/vukdukic/JSON/news-5ddff-b5b0dc3d5d7e.json

"proxy": {
    "/api/*": {
      "target": "http://localhost:5000"
    }
  },