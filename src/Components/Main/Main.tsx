import { Table } from "./Table/Table";
import { Mainstyled } from "./Main.style";
import background from "../../assets/image/665419.png";

const Main = () => {
  return (
    <Mainstyled
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Table />
    </Mainstyled>
  );
};

export default Main;
