import React from "react";

const Header = () => {
  return (
    <header className=" p-4 flex justify-between">
      <section>
        <p>Player 1 (x): Naeem Hasan</p>
        <p>Score: 0</p>
      </section>
      <section>
        <p>Draw: 4</p>
      </section>
      <section>
        <p>Player 2 (0): Naeem Hasan</p>
        <p>Score: 0</p>
      </section>
    </header>
  );
};

export default Header;
