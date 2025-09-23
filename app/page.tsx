import { ThemeToggler } from "@/components/home";
import { MovieCard } from "@/components/home/Moviecard";
import Image from "next/image";
import { MovieCarousel } from "@/components/main";

export default function Home() {
  return (
    <div>
      <MovieCarousel />
      <MovieCard
        title="Example Movie"
        score={8.5}
        image="/example.jpg"
        id={1}
      />
    </div>
  );
}
