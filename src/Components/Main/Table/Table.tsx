import { useState } from "react";
import { DivModal, DivModalRating, TableStyled, TrStyled } from "./Table.style";
import { Data } from "../../../ApiFake/ApiFake";
import ak47 from "../../../assets/image/ak-47.png";
import crosshair from "../../../assets/image/crosshair.png";
import flash from "../../../assets/image/flashbang.png";
import skull from "../../../assets/image/skull.png";
import target from "../../../assets/image/target.png";
import trophy from "../../../assets/image/trophy.png";
import eu from "../../../assets/image/WhatsApp Image 2023-08-23 at 19.44.26.jpeg";
/* import fraterb from "../../assets/image/8142c750135a0999440049cec115651d.png"; */
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  background: "#0480bd",
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
          onChange={(e) =>
            setSearch(
              e.target.value.length <= 1
                ? e.target.value.toLocaleUpperCase()
                : e.target.value
            )
          }
        />
      </div>
      <TableStyled>
        <thead>
          <tr>
            <th></th>
            <th>
              <div>
                <img src={target} alt="player" /> Jogador
              </div>
            </th>
            <th>
              <div>
                <img src={trophy} alt="trofeu" /> Total de vitorias
              </div>
            </th>
            <th>
              <div>
                <img src={ak47} alt="mira" /> Matou
              </div>
            </th>
            <th>
              <div>
                <img src={skull} alt="caveira" /> Morreu
              </div>
            </th>
            <th>
              <div>
                <img src={crosshair} alt="assistencia" /> Assistencias
              </div>
            </th>
            <th>
              <div>
                <img src={flash} alt="assistencia" /> Assistencias com flashbang
              </div>
            </th>
          </tr>
        </thead>
        {search.length > 0
          ? filteredRepos.map((data, index) => (
              <tbody
                key={data.user}
                onClick={(e) => {
                  const td = Array.from(e.currentTarget.querySelectorAll("td"));
                  const Arraytd = td.map((item) => item);
                  if (e.target === Arraytd[1]) {
                    SetModalProp({
                      img: Arraytd[0].innerHTML
                        .replace('<img src="', "")
                        .replace('" alt="img">', ""),
                      name: Arraytd[1].innerHTML,
                      victories: Arraytd[2].innerHTML,
                      kill: Arraytd[3].innerHTML,
                      death: Arraytd[4].innerHTML,
                      assists: Arraytd[5].innerHTML,
                      assistsflash: Arraytd[6].innerHTML,
                      total_rounds_played: Arraytd[7].innerHTML,
                      rating: Arraytd[8].innerHTML,
                    });
                    setOpen(!open);
                  }
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
                    {data.user.toLocaleUpperCase()}
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
            ))
          : Data.map((data, index) => (
              <tbody
                key={data.user}
                onClick={(e) => {
                  const td = Array.from(e.currentTarget.querySelectorAll("td"));
                  const Arraytd = td.map((item) => item);
                  if (e.target === Arraytd[1]) {
                    SetModalProp({
                      img: Arraytd[0].innerHTML
                        .replace('<img src="', "")
                        .replace('" alt="img">', ""),
                      name: Arraytd[1].innerHTML,
                      victories: Arraytd[2].innerHTML,
                      kill: Arraytd[3].innerHTML,
                      death: Arraytd[4].innerHTML,
                      assists: Arraytd[5].innerHTML,
                      assistsflash: Arraytd[6].innerHTML,
                      total_rounds_played: Arraytd[7].innerHTML,
                      rating: Arraytd[8].innerHTML,
                    });
                    setOpen(!open);
                  }
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
                    {data.user.toLocaleUpperCase()}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                background: "#161415",
                textAlign: "center",
                color: "#c1c0c0",
              }}
            >
              <h1>👑 {modalProp?.name}</h1>
            </div>
            <DivModal>
              <section>
                <img src={modalProp?.img} />
              </section>
              <div>
                {" "}
                <p>
                  <img src={trophy} alt="" /> Total de vitorias:{" "}
                  <span> {modalProp?.victories}</span>
                </p>
                <p>
                  <img src={ak47} alt="" /> Matou:{" "}
                  <span> {modalProp?.kill}</span>
                </p>
                <p>
                  <img src={skull} alt="" /> Morreu:{" "}
                  <span> {modalProp?.death}</span>
                </p>
                <p>
                  <img src={target} alt="" /> Assistencias:{" "}
                  <span> {modalProp?.assists}</span>
                </p>
                <p>
                  <img src={flash} alt="" /> Assistencias com flashbang:{" "}
                  <span> {modalProp?.assistsflash}</span>
                </p>
              </div>
              <DivModalRating>
                Rating
                <h1>{modalProp?.rating}</h1>
              </DivModalRating>
            </DivModal>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                background: "#161415",

                color: "#c1c0c0",
              }}
            >
              <h1>
                🚀 Total de rounds jogados:{" "}
                <span style={{ fontWeight: "400" }}>
                  {modalProp?.total_rounds_played}
                </span>
              </h1>
            </div>
          </Box>
        </Modal>
      </TableStyled>
    </>
  );
};
