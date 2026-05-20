import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = ({ users }) => {
  return (
    <div className="py-16 pt-6 items-center flex gap-10 h-[90vh] px-16">
      <LeftContent />
      <RightContent users={users} />
    </div>
  );
};

export default Page1Content;
