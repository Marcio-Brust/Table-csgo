import { HeaderStyled } from "./Header.style";
import fraterb from "../../assets/image/8142c750135a0999440049cec115651d.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <button>menu</button>
      <nav>
        <li>
          <a href="">Partidas</a>
        </li>
        <li>
          <a href="">Ranking</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </nav>
      <div>
        <img src={fraterb} />
      </div>
    </HeaderStyled>
  );
};
