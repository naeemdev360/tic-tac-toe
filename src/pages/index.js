import Image from "next/image";
import Link from "next/link";

import boardImg from "../assets/board.png";

export default function Home() {
  return (
    <>
      <h3
        data-text="Tic Tac Toe"
        className="text-4xl neon-two font-extrabold mb-6 mt-10"
      >
        Tic Tac Toe
      </h3>
      <Image width={400} src={boardImg} alt="board" />
      <Link
        href="/game"
        className=" py-2 px-4 border border-gray-50 neon-two rounded-lg font-bold text-2xl mt-10"
      >
        Start
      </Link>
    </>
  );
}
