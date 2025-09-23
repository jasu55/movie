import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

const GENRES = [
  { name: "Action" },
  { name: "Adventure" },
  { name: "Animation" },
  { name: "Comedy" },
  { name: "Crime" },
  { name: "Documentary" },
  { name: "Drama" },
  { name: "Family" },
  { name: "Fantasy" },
  { name: "History" },
  { name: "Horror" },
  { name: "Music" },
  { name: "Mystery" },
  { name: "Romance" },
  { name: "Science Fiction" },
  { name: "TV Movie" },
  { name: "Thriller" },
  { name: "War" },
  { name: "Western" },
];

export function GenreDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel className="text-2xl font-bold">
          Genres
        </DropdownMenuLabel>
        <p className="px-2">See list of movie genres</p>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {GENRES.map((genre) => (
            <Link href="/genre">
              <Badge variant="outline">
                {genre.name}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
