import React from "react";
import { TableStyled } from "./Table.style";
import { Data } from "../../ApiFake/ApiFake";
import {
  GiAk47,
  GiCharacter,
  GiCoffin,
  GiPlasticDuck,
  GiTrophy,
} from "react-icons/gi";

export const Table = () => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <th>
            <GiCharacter /> Jogador
          </th>
          <th>
            <GiTrophy /> Total de vitorias
          </th>
          <th>
            <GiAk47 /> Matou
          </th>
          <th>
            <GiCoffin /> Morreu
          </th>
          <th>
            <GiPlasticDuck /> Assistencias
          </th>
          <th>Assistencias com flashbang</th>
          <th>Total de rounds jogados</th>
          <th>Rating</th>
        </tr>
      </thead>
      {Data.map((data) => (
        <tbody key={data.user}>
          <tr>
            <td>{data.user}</td>
            <td>{data.total_wins}</td>
            <td>{data.kills}</td>
            <td>{data.deaths}</td>
            <td>{data.assists}</td>
            <td>{data.flashbang_assists}</td>
            <td>{data.total_rounds_played}</td>
            <td>{data.rating}</td>
          </tr>
        </tbody>
      ))}
    </TableStyled>
  );
};
