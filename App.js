/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 * React Element(Object) => HTML(Browser Understands)
 */
const parent = React.createElement("div",{id: "parent"},[
    React.createElement(
        "div",
        {id:"child"},
        [
         React.createElement("h1",{},"I'm an h1 tag"),
         React.createElement("h2",{},"I'm an h2 tag")
        ]
    ),
    React.createElement(
        "div",
        {id:"child"},
        [
         React.createElement("h1",{},"I'm an h1 tag"),
         React.createElement("h2",{},"I'm an h2 tag")
        ]
    )
    ]
);

const heading = React.createElement("h1",
    {id:"heading",xyz:"abc"}, // Adding attributes 
    "Hello World from React!");

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
const header = ReactDOM.createRoot(document.getElementById("header"));

// React can be used in just a small part of the web page.
// React is a library and not a framework.

root.render(parent);