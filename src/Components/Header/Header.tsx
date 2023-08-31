import { HeaderStyled } from "./Header.style";
import fraterb from "../../assets/image/8142c750135a0999440049cec115651d.png";
import useMedia from "../../Ultils/Hooks/useMedia";
import { useState } from "react";

export const Header = () => {
  const mobile = useMedia("(max-width:75rem)");
  const [isVisible, setIsVisible] = useState(false);

  if (mobile === false && isVisible) {
    setIsVisible(false);
  }

  const html = document.documentElement;
  function handleClick({ target }: Event) {
    const ul = html.querySelector("ul");
    const span = html.querySelector("span");
    const button = html.querySelector("button");

    if (target !== ul && target !== span && target !== button) {
      setIsVisible(false);
      html.removeEventListener("click", handleClick);
    }
  }
  html.addEventListener("click", handleClick);

  return (
    <HeaderStyled
      mobile={mobile ? mobile.toString() : null}
      isvisible={isVisible.toString()}
    >
      <nav>
        <div>
          <img src={fraterb} />
        </div>
        <button onClick={() => setIsVisible(!isVisible)}>
          <span></span>
        </button>
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
              Discord
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};
