We can get started with React in two ways - either by using CDN(Content delivery network) or create-react-app,which creates a React project boilerplate outbox.This folder uses CDN.

The root div is the gateway to connect all react components to the index.html. In the script tag we will write our JavaScript, but the script type will be babel. Babel will transpile the react JSX to pure JavaScript on the browser.Inside the babel, we can write any pure JavaScript, JSX and in general any React code.

The babel library is linked to our document and now we can make use of it. The next step is importing React and ReactDOM using CDN or link. In order to link React and ReactDOM, we attach both packages from CDN to the body of index.html. To test if React is linked to the index.html, try to check it by doing console.log(React). Open the browser console and you should get an object. If you see an object containing React methods then you managed to link your project with React CDN and you are ready to use React.

Get the root element using document.querySelect('.root') and assign it to a variable name rootElement. The is the only place we directly interact with DOM.

Now, lets render the JSX element on the browser, in order to do so we need the React and ReactDOM library. In addition to the React and ReactDOM we need babel to transpile the JSX to JavaScript code. The ReactDOM package has a method render. The render method takes two arguments:a JSX element or a component and the root document. 

To render more content, the JSX element should have more HTML elements. For instance, we can create a header of a website and header may have a title, subtitle, author or date etc. Remember, we can render only one JSX element at a time.

To add style to a JSX element we use inline style or className. We inject the style object using {}. Every CSS property becomes a key and every CSS property value becomes a value for the the object. For instance, border is a key and '2px solid orange' is a value, color is a key and 'black' is a value, fontSize is a key and '18px' is a value. All two word CSS properties will change to camelCase when we use them as key in the CSS object in React or JavaScript.

In JSX element we write className instead of class because class is a reserved word in JavaScript. Similar to className, htmlFor instead of for in label tag. See the example below.