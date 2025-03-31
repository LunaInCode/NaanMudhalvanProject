"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import axios, { CanceledError } from "axios";
import { GameModeCard } from "@/components/gamemode-card";

interface GameMode {
  displayName: string;
  displayIcon: string;
  description: string;
  duration: string;
}

export default function Page() {
  const [gameModes, setGameModes] = useState<GameMode[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    axios
      .get("https://valorant-api.com/v1/gamemodes", {
        signal: controller.signal,
      })
      .then((res) => {
        setGameModes(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-destructive m-10 uppercase">{error}</p>}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      )}
      {!loading &&
        gameModes
          .sort((a, b) => a.displayName.localeCompare(b.displayName))
          .map(
            (gameMode) =>
              gameMode.displayIcon &&
              gameMode.duration && (
                <GameModeCard
                  key={gameMode.displayName}
                  name={gameMode.displayName}
                  image={gameMode.displayIcon}
                  description={gameMode.description}
                  duration={gameMode.duration}
                />
              )
          )}
    </>
  );
}
