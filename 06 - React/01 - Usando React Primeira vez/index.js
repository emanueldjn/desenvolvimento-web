const root = document.querySelector("#root");

const element = React.createElement("h1", {id:"Titulo Principal"}, "Hello World")

ReactDOM.render(element, root)