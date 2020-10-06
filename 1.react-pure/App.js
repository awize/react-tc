const Property = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.type),
    React.createElement("h3", {}, `${props.bedrooms} cuartos`),
    React.createElement(
      "span",
      {},
      `${props.bathrooms} baño${props.bathrooms.length > 1 ? "s" : ""}`
    ),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    { id: "myapp" },
    React.createElement(
      "h1",
      {},
      React.createElement(Property, {
        type: "Casa",
        bedrooms: "4",
        bathrooms: "2",
      }),
      React.createElement(Property, {
        type: "Departamento",
        bedrooms: "1",
        bathrooms: "1",
      }),
      React.createElement(Property, {
        type: "Casa Duplex",
        bedrooms: "2",
        bathrooms: "1",
      })
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
