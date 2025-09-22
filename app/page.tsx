import { ThemeToggler } from "@/components/home";
import { MovieCard } from "@/components/home/Moviecard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ThemeToggler />
      <MovieCard
        title="Example Movie"
        score={8.5}
        image="/example.jpg"
        id={1}
      />
    </div>
  );
}
