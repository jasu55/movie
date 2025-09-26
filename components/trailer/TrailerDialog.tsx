import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export const TrailerDialog = ({
  youtubeKey,
}: {
  youtubeKey: string | undefined;
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Watch Trailer</Button>
        </DialogTrigger>
        <DialogContent className="p-0 sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="hidden">{youtubeKey}</DialogTitle>
            <iframe
              width="898"
              height="600"
              src={`https://www.youtube.com/embed/${youtubeKey}`}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
