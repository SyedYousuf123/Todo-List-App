import React from "react";
import Item from "./Item";

const Box = (props) => {
  const Items = props.data.map((SingleData, index) => (
    <Item
      key={index}
      id={index}
      RemoveHandler={props.RemoveHandler}
      item={SingleData.item}
      time={SingleData.time}
    />
  ));

  return <div className="py-4 px-2 md:px-4">{Items}</div>;
};

export default Box;
