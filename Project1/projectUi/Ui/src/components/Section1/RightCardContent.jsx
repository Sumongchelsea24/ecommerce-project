import React from "react";
import { MoveRight } from "lucide-react";
const RightCardContent = ({ id, tag }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full  p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold">
        {id}
      </h2>
      <p className="text-xl leading-relaxed text-white mb-10 ">
        How satisfied are you with our customer support performance?
      </p>

      <div className="flex justify-between">
        <button className="bg-blue-600 font-medium px-8 py-2 rounded-full text-white">
          {tag}
        </button>
        <button className="bg-blue-600 font-medium px-4 py-2 rounded-full text-white">
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
