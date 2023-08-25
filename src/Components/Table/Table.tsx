import { useState } from "react";
import { DivModal, DivModalRating, TableStyled, TrStyled } from "./Table.style";
import { Data } from "../../ApiFake/ApiFake";
import ak47 from "../../assets/image/ak-47.png";
import crosshair from "../../assets/image/crosshair.png";
import flash from "../../assets/image/flashbang.png";
import skull from "../../assets/image/skull.png";
import target from "../../assets/image/target.png";
import trophy from "../../assets/image/trophy.png";
import eu from "../../assets/image/WhatsApp Image 2023-08-23 at 19.44.26.jpeg";
import fraterb from "../../assets/image/8142c750135a0999440049cec115651d.png";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  border: "2px solid #07032a",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  gap: 5,

  background: "linear-gradient(120deg,#00adee 30%,#000)",
};

interface ModalProps {
  img: string;
  name: string;
  victories: string;
  kill: string;
  death: string;
  assists: string;
  assistsflash: string;
  total_rounds_played: string;
  rating: string;
}

export const Table = () => {
  const [open, setOpen] = useState(false);
  const [modalProp, SetModalProp] = useState<ModalProps>();

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
              <tbody
                key={data.user}
                onClick={(e) => {
                  const td = Array.from(e.currentTarget.querySelectorAll("td"));
                  const Arraytd = td.map((item) => item.innerHTML);
                  SetModalProp({
                    img: Arraytd[0]
                      .replace('<img src="', "")
                      .replace('" alt="img">', ""),
                    name: Arraytd[1],
                    victories: Arraytd[2],
                    kill: Arraytd[3],
                    death: Arraytd[4],
                    assists: Arraytd[5],
                    assistsflash: Arraytd[6],
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
                      .replace('" alt="img">', ""),
                    name: Arraytd[1],
                    victories: Arraytd[2],
                    kill: Arraytd[3],
                    death: Arraytd[4],
                    assists: Arraytd[5],
                    assistsflash: Arraytd[6],
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
            <img
              src={modalProp?.img}
              style={{
                width: "250px",
                objectFit: "contain",
                border: "solid 2px #07032a",
              }}
              alt="img"
            />
            <DivModal>
              <h1>Jogador: {modalProp?.name}</h1>
              <div>
                <p>
                  <img src={trophy} /> Total de vitorias: {modalProp?.victories}
                </p>
                <p>
                  <img src={ak47} /> Matou: {modalProp?.kill}
                </p>
                <p>
                  <img src={skull} /> Morreu: {modalProp?.death}
                </p>
                <p>
                  <img src={crosshair} /> Assistencias: {modalProp?.assists}
                </p>
                <p>
                  <img src={flash} /> Assistencia com flashbang:{" "}
                  {modalProp?.assistsflash}
                </p>
                <p>
                  🚀 Total de rounds Jogados: {modalProp?.total_rounds_played}
                </p>
              </div>
            </DivModal>
            <DivModalRating>
              <img src={fraterb} alt="fraterb" />
              <h1>Rating</h1>
              <p>{modalProp?.rating}</p>
            </DivModalRating>
          </Box>
        </Modal>
      </TableStyled>
    </>
  );
};
