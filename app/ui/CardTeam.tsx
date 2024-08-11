"use client";

import { link } from "fs";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  team: string;
  playerA: string;
  playerB: string;
  score?: string;
};

const CardTeam = (props: Props) => {
  const router = useRouter();
  const { team, playerA, playerB, score } = props;
  const [hasSelectedTeam, setHasSelectedTeam] = React.useState(false);

  // Fonction pour obtenir la valeur d'un cookie
  const getCookieValue = (name: string) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  };

  const handleClick = (e: React.MouseEvent) => {
    // Vérifier si l'équipe actuelle est déjà sélectionnée
    const selectedTeam = getCookieValue("selectedTeam");

    let newHasSelectedTeam;
    if (selectedTeam === team) {
      // Si l'équipe actuelle est déjà sélectionnée, définir hasSelectedTeam sur false
      newHasSelectedTeam = !hasSelectedTeam;
      console.log(
        "selectedTeam",
        selectedTeam,
        "team",
        team,
        "newHasSelectedTeam",
        newHasSelectedTeam
      );
    } else {
      // Sinon, définir hasSelectedTeam sur true
      newHasSelectedTeam = true;
    }

    setHasSelectedTeam(newHasSelectedTeam);
    document.cookie = `hasSelectedTeam=${newHasSelectedTeam}; path=/`;
    if (team) {
      document.cookie = `selectedTeam=${team}; path=/`;
    }

    router.refresh();
  };

  return (
    <div
      className={
        (getCookieValue("selectedTeam") === team &&
        getCookieValue("hasSelectedTeam") === "true"
          ? "bg-slate-400"
          : "hover:bg-slate-200") + " w-1/2 p-4 my-4 border rounded-xl"
      }
      onClick={handleClick}>
      <h1 className="text-l pb-2 mb-4 font-bold text-center border-b-2">
        {team}
      </h1>
      <div className="flex flex-row justify-between">
        <div>
          <p>{playerA}</p>
          <p>{playerB}</p>
        </div>
        <div className="text-2xl font-bold flex items-center">
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
