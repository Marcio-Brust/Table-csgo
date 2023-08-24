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
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

export const Table = () => {
  const [open, setOpen] = useState(false);
  const [modalProp, SetModalProp] = useState<object>({});
  console.log(modalProp);
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
            <th></th>
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
              <tbody key={data.user} onClick={() => setOpen(!open)}>
                <TrStyled index={index}>
                  <td
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <img src={eu} alt="img" />
                  </td>
                  <td
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    {data.user}
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
              <tbody
                key={data.user}
                onClick={(e) => {
                  const td = Array.from(e.currentTarget.querySelectorAll("td"));
                  const Arraytd = td.map((item) => item.innerHTML);

                  SetModalProp({
                    img: Arraytd[0]
                      .replace('<img src="', "")
                      .replace('" alt="img">', "")
                      .replace("/src", "../.."),
                    name: Arraytd[1],
                    win: Arraytd[2],
                    kill: Arraytd[3],
                    death: Arraytd[4],
                    assists: Arraytd[5],
                    total_rounds_played: Arraytd[7],
                    rating: Arraytd[8],
                  });
                  setOpen(!open);
                }}
              >
                <TrStyled index={index}>
                  <td
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <img src={eu} alt="img" />
                  </td>
                  <td
                    style={{
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    {data.user}
                  </td>
                  <td>{data.total_wins}</td>
                  <td>{data.kills}</td>
                  <td>{data.deaths}</td>
                  <td>{data.assists}</td>
                  <td>{data.flashbang_assists}</td>

                  <td style={{ display: "none" }}>
                    {data.total_rounds_played}
                  </td>
                  <td style={{ display: "none" }}>{data.rating}</td>
                </TrStyled>
              </tbody>
            ))}
        <Modal
          open={open}
          onClose={() => setOpen(!open)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </TableStyled>
    </>
  );
};
