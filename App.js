
// <div id="parent">
//     <div id="child">
//         <h1> hi 1</h1>
//         <h1> hi 2</h1>
//     </div>
// </div> 


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
