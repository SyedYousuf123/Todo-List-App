import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Container = (props) => {
  const InputBox = useRef();

  function InputBoxHandler() {
    props.handler(InputBox.current.value);
    InputBox.current.value = "";
  }

  return (
    <div className="flex flex-col md:flex-row items-center p-3 justify-center md:justify-between">
		<input
			type="text"
			name="task"
			id="task"
			placeholder="Enter your Task"
			className="p-3 mb-3 md:mb-0 focus:outline-none border w-full md:w-[70%] border-slate-400"
			ref={InputBox}
		/>
		<div
			onClick={InputBoxHandler}
			className="cursor-pointer flex justify-center items-center w-full md:w-[20%] h-[50px] bg-[#e74c3c] rounded-full text-white shadow-md"
		>
			<AiOutlinePlus />
		</div>
	</div>
  );
};

export default Container;
