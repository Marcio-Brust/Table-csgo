import { useState } from "react";
import { TableStyled, TrStyled } from "./Table.style";
import { Data } from "../../ApiFake/ApiFake";
import ak47 from "../../assets/image/ak-47.png";
import crosshair from "../../assets/image/crosshair.png";
import flash from "../../assets/image/flashbang.png";
import skull from "../../assets/image/skull.png";
import target from "../../assets/image/target.png";
import trophy from "../../assets/image/trophy.png";
import eu from "../../assets/image/WhatsApp Image 2023-08-23 at 19.44.26.jpeg";

export const Table = () => {
  const [search, setSearch] = useState("");
  const filteredRepos =
    search.length > 0 ? Data.filter((data) => data.user.includes(search)) : [];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <input
          type="text"
          name="seatch"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <TableStyled>
        <thead>
          <tr>
            <th>
              <img src={target} alt="player" /> Jogador
            </th>
            <th>
              <img src={trophy} alt="trofeu" /> Total de vitorias
            </th>
            <th>
              <img src={ak47} alt="mira" /> Matou
            </th>
            <th>
              <img src={skull} alt="caveira" /> Morreu
            </th>
            <th>
              <img src={crosshair} alt="assistencia" /> Assistencias
            </th>
            <th>
              <img src={flash} alt="assistencia" /> Assistencias com flashbang
            </th>
          </tr>
        </thead>
        {search.length > 0
          ? filteredRepos.map((data, index) => (
              <tbody key={data.user}>
                <TrStyled index={index}>
                  <td
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      gap: "20px",
                    }}
                  >
                    <img src={eu} alt="img" /> {data.user}
                  </td>
                  <td>{data.total_wins}</td>
                  <td>{data.kills}</td>
                  <td>{data.deaths}</td>
                  <td>{data.assists}</td>
                  <td>{data.flashbang_assists}</td>
                </TrStyled>
              </tbody>
            ))
          : Data.map((data, index) => (
              <tbody key={data.user}>
                <TrStyled index={index}>
                  <td
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      gap: "20px",
                    }}
                  >
                    <img src={eu} alt="img" /> {data.user}
                  </td>
                  <td>{data.total_wins}</td>
                  <td>{data.kills}</td>
                  <td>{data.deaths}</td>
                  <td>{data.assists}</td>
                  <td>{data.flashbang_assists}</td>
                </TrStyled>
              </tbody>
            ))}
      </TableStyled>
    </>
  );
};
