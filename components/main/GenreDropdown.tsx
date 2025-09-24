import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getMoviesGenres } from "@/utils/get-data";

export async function GenreDropdown() {
  const genres = await getMoviesGenres();
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
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
