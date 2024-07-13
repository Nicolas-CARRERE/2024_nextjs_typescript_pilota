"use client";

import React from "react";

type Props = {
  team: string;
  playerA: string;
  playerB: string;
};

const CardTeam = (props: Props) => {
  const { team, playerA, playerB } = props;

  // Fonction pour obtenir la valeur d'un cookie
  const getCookieValue = (name: string) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    console.log("match", match);
    return match ? match[2] : null;
  };

  const handleClick = (e: React.MouseEvent) => {
    // Mettre à jour le cookie selectedTeam avec l'équipe actuelle
    document.cookie = `selectedTeam=${team}; path=/`;
    console.log("selectedTeam", getCookieValue("selectedTeam"), team);
  };

  return (
    <div
      className={
        (getCookieValue(team) === team
          ? "bg-slate-400"
          : "hover:bg-slate-200") + " w-1/2 p-4 my-4 border rounded-xl"
      }
      onClick={handleClick}>
      <h1 className="text-l pb-2 mb-4 font-bold text-center border-b-2">
        {team}
      </h1>
      <p>{playerA}</p>
      <p>{playerB}</p>
    </div>
  );
};

export default CardTeam;
