import Header from "@/components/Header";
import { lato } from "@/components/Layout";
import Board from "@/components/Header/Board";

export default function Home() {
  return (
    <>
      <h3
        data-text="Tic Tac Toe"
        className="text-4xl neon-two font-extrabold mb-6"
      >
        Tic Tac Toe
      </h3>
      <Board />
    </>
  );
}
