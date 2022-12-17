import React from "react";
import PopularGamesSlider from "./PopularGamesSlider";
import RecentGamesList from "./RecentGamesList";
export function HomePage() {
  return (
    <div>
      <PopularGamesSlider />
      <RecentGamesList />
    </div>
  );
}
