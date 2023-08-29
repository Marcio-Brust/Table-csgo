import { HeaderStyled } from "./Header.style";
import fraterb from "../../assets/image/8142c750135a0999440049cec115651d.png";
import discord from "../../assets/image/icons8-discord-24.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <button>menu</button>
        <div>
          <img src={fraterb} />
        </div>
        <ul>
          <li>
            <a href="">Partidas</a>
          </li>
          <li>
            <a href="">Ranking</a>
          </li>
          <li>
            <a
              href="https://discord.gg/fXUQGCYDbB"
              target="_blank"
              rel="discord"
            >
              <img src={discord} alt="discord" /> Discord
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
