import React from "react";
import RightCardContent from "./RightCardContent";
const RightCard = ({ user }) => {
  return (
    <div className="h-full w-80 shrink-0 overflow-hidden relative rounded-4xl">
      <img
        src={user.img}
        alt="Right Card Image"
        className="w-full h-full object-cover rounded-4xl"
      />
      <RightCardContent id={user.id} tag={user.tag} />
    </div>
  );
};

export default RightCard;
