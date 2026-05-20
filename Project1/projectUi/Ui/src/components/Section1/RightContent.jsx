import React from "react";
import RightCard from "./RightCard";

const RightContent = ({ users }) => {
  return (
    <div className="h-full flex  rounded-4xl overflow-x-auto gap-10 p-6 w-2/3">
      {users.map((user) => (
        <RightCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default RightContent;
