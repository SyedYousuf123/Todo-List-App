import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const Item = (props) => {
  const [done, setDone] = useState(false);

  return (
    <div className="flex justify-between p-3 border-b-2 items-center hover:bg-gray-100 transition duration-300">
      <div>
        <span className="pr-4 text-xs text-slate-400">{props.time}</span>
        <span
          onClick={() => setDone(!done)}
          className={`${
            done ? "line-through" : ""
          } select-none text-gray-900 cursor-pointer transition-colors duration-300`}
        >
          {props.item}
        </span>
      </div>
      <div onClick={() => props.RemoveHandler(props.id)}>
        <BsTrash className="text-[#e74c3c] cursor-pointer" />
      </div>
    </div>
  );
};

export default Item;
