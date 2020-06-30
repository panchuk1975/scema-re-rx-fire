import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "brown", "black", "blue", "green"];
  const randomColour = colors[Math.floor(Math.random() * 4)];
  //const className = randomColour + "-text";
  return (props) => {
    return (
      <div style={{ color: randomColour }}>
        <div>
          <h1 style={{ color: randomColour }}>
            Connect and HOK for random text color
          </h1>
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
