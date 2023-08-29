import { Table } from "./Table/Table";
import { DivRowPageStyled, Mainstyled } from "./Main.style";
import background from "../../assets/image/665419.png";
import useMedia from "../../Ultils/Hooks/useMedia";

const Main = () => {
  const mobile = useMedia("(max-width: 55rem)");

  return (
    <Mainstyled
      mobile={mobile ? mobile.toString() : null}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <Table />
      <DivRowPageStyled mobile={mobile ? mobile.toString() : null}>
        <nav>
          <div>
            <span>10</span>
            <span>▼</span>
          </div>
          -
          <div>
            <span>❮</span>
            <span>❯</span>
          </div>
        </nav>
      </DivRowPageStyled>
    </Mainstyled>
  );
};

export default Main;
