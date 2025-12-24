"use client";

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
import { Badge } from "../ui/badge";
import Link from "next/link";
import { getMoviesGenres } from "@/utils/get-data";
import { GenreResponseType } from "@/types";
import { useEffect, useState } from "react";

export function GenreDropdown() {
  const [genresResponse, setGenresResponse] =
    useState<GenreResponseType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getMoviesGenres();
        setGenresResponse(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="start">
        <DropdownMenuLabel className="text-2xl font-bold">
          Genres
        </DropdownMenuLabel>
        <p className="px-2">See list of movies by genre</p>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:!bg-transparent max-w-[400px] flex flex-wrap">
          {isLoading ? (
            <p className="px-2 text-sm text-muted-foreground">Loading...</p>
          ) : genresResponse ? (
            genresResponse.genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/genre?id=${genre.id}&name=${genre.name}`}
              >
                <Badge variant="outline">
                  {genre.name}
                  <ChevronRight />
                </Badge>
              </Link>
            ))
          ) : (
            <p className="px-2 text-sm text-muted-foreground">
              Failed to load genres
            </p>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
