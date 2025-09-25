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
  const genresResponse = await getMoviesGenres();
  console.log("GENRES RESPONSE", genresResponse);
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
        <DropdownMenuItem className="hover:!bg-transparent max-w-[400px] flex flex-wrap gap-2">
          {genresResponse.genres.map((genre: { id: string; name: string }) => (
            <Link key={genre.id} href={`/genre?id=${genre.id}`}>
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
