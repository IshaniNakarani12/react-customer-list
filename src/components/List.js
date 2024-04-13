import React from "react";

export const List = ({ userList = [] }) => {
  //   const userList = ["Ishani", "Jeni", "Veera"];
  return (
    <div>
      <ul>
        {userList.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
