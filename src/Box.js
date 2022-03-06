import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "none",
  };
  console.log(props.on);
  return <div style={styles} className="box"></div>;
}
