import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: 'Anek Malayalam', sans-serif;
    letter-spacing:2.5px;
}
 body{
  background: #f1f1f1;
 }

 img{
  width:100%;
  display:block;
  object-fit:cover;
 }

  li{
    list-style:none;
  }
  a{
    display:block;
    text-decoration:none;
    }

`;
