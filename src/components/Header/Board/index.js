import React from "react";

const Board = () => {
  return (
    <table
      border="1"
      className="text-center border-collapse border border-gray-50"
    >
      <tbody>
        <tr>
          <td className="p-2 border  w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
          <td className="p-2  border w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
          <td className="p-2 border  w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
        </tr>
        <tr>
          <td className="p-2 border  w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
          <td className="p-2  border w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-one">x</span>
          </td>
          <td className="p-2 border  w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
        </tr>
        <tr>
          <td className="p-2 border  w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
          <td className="p-2  border w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
          <td className="p-2 border  w-[100px] h-[100px] border-gray-400 text-5xl font-extrabold">
            <span className="neon-two">0</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
