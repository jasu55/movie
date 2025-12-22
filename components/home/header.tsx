import { Search } from "lucide-react";
import { ThemeToggler } from "../home";
import { GenreDropdown } from "@/components/genre/GenreDropdown";
import Link from "next/link";
import { SearchSection } from "../search/SearchSection";

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-[1280px] flex justify-between m-auto items-center py-4 px-4">
        <div className="flex items-center gap-2">
          <img src="/images/film.png" className="h-6 w-6" alt="Movie Z Logo" />
          <h2 className="text-base font-bold leading-4 text-indigo-700">
            <Link href="/">Movie Z</Link>
          </h2>
        </div>
        <div className="flex gap-3 items-center">
          <GenreDropdown />
          <div className="flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
            <SearchSection />
          </div>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};
