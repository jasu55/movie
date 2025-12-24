"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

import { FaSearch, FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { movieResponseType } from "@/types";
import { Getmoviebysearch } from "@/get-data";

type SearchSectionProps = {
  onMobileSearchToggle?: (isActive: boolean) => void;
};

export const SearchSection = ({
  onMobileSearchToggle,
}: SearchSectionProps = {}) => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await Getmoviebysearch(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
    console.log("FOUND MOVIES", foundData);
  };

  const toggleMobileSearch = () => {
    const newState = !isMobileSearchActive;
    setIsMobileSearchActive(newState);
    if (onMobileSearchToggle) {
      onMobileSearchToggle(newState);
    }
  };

  const renderSearchResults = () => (
    <PopoverContent
      className="sm:w-[537px] w-[375px] flex flex-col gap-[25px]"
      onOpenAutoFocus={(e) => e.preventDefault()}
      onCloseAutoFocus={(e) => e.preventDefault()}
    >
      {foundMovies?.results?.slice(0, 5).map((movie, index) => {
        return (
          <div key={index} className="flex gap-4 ml-5">
            <div className="mt-2">
              <img
                className="h-[100px] w-[67px]"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <div className="mt-2">{movie.title}</div>
              <div>
                <span className="flex gap-2 items-center">
                  <FaStar color="#FDE047" />
                  <span className="text-[14px]">{movie.vote_average}</span>
                  /10
                </span>
              </div>
              <div className="mt-4">{movie.release_date}</div>
            </div>
            <div className="ml-52 mt-17.5 sm:ml-[370px] sm:mt-[71px] sm:mb-[10px] absolute bg-foreground rounded-md">
              <Link href={`/detail/${movie.id}`}>
                <Button>See more</Button>
              </Link>
            </div>
          </div>
        );
      })}
      <div className="border flex justify-center rounded-md py-2">
        {foundMovies?.results?.length === 0 ? (
          <Link href={`/Search/${searchValue}`}>Not results found</Link>
        ) : (
          <Link href={`/Search/${searchValue}`}>
            See all results for "{searchValue}"
          </Link>
        )}
      </div>
    </PopoverContent>
  );

  return (
    <div>
      <Popover
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(false);
        }}
      >
        {/* Mobile - Show search icon or input */}
        <div className="sm:hidden">
          {!isMobileSearchActive ? (
            <Button variant="outline" size="icon" onClick={toggleMobileSearch}>
              <FaSearch className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          ) : (
            <PopoverTrigger asChild>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  <Input
                    value={searchValue}
                    onChange={handleChange}
                    className="w-[250px] pl-10"
                    placeholder="Search.."
                    type="search"
                    autoFocus
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleMobileSearch}
                  type="button"
                >
                  <IoMdClose className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </div>
            </PopoverTrigger>
          )}
        </div>

        {/* Desktop - Show full search input */}
        <PopoverTrigger asChild>
          <div className="relative hidden sm:block">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchValue}
              onChange={handleChange}
              className="w-[180px] pl-10"
              placeholder="Search.."
              type="search"
            />
          </div>
        </PopoverTrigger>

        {renderSearchResults()}
      </Popover>
    </div>
  );
};
