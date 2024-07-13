import { data } from "@prisma/client";
import { split } from "postcss/lib/list";
import React from "react";
import CardTeam from "./CardTeam";

type Props = {
  data: data;
};

const Card = ({ data }: Props) => {
  const returnPlayer = (player: string) => {
    let playerToArray = split(player, [" "], false);
    // filter array values that not contains '(' or ')'
    playerToArray.shift();
    playerToArray = playerToArray.filter((value) => {
      return !value.includes("(") && !value.includes(")");
    });
    return playerToArray.join(" ");
  };

  return (
    <div className="w-[80%] m-auto p-4 my-4 border hover:bg-slate-100 rounded-xl">
      <h1>
        {data.game} - le {data.date}
      </h1>
      <div className="flex flex-row">
        <CardTeam
          team={data.team1!}
          playerA={returnPlayer(data.playera1!)}
          playerB={returnPlayer(data.playerb1!)}
        />
        <CardTeam
          team={data.team2!}
          playerA={returnPlayer(data.playera2!)}
          playerB={returnPlayer(data.playerb2!)}
        />
      </div>
      <p>{data.score}</p>
    </div>
  );
};

export default Card;
