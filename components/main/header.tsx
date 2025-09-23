import { Search } from "lucide-react";
import { ThemeToggler } from "../home";
import { Input } from "../ui/input";
import { GenreDropdown } from "./GenreDropdown";
import { SearchSection } from "./SearchSection";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-[1280px] flex justify-between m-auto items-center py-3">
        <div>
          <img src="/images/film.png" className="h-5" />
          <p>Movie Z</p>
        </div>
        <div className="flex gap-5">
          <GenreDropdown />
          <div className="flex items-center">
            <Search className="-mr-8" />
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
