import "tachyons";
import styled from "styled-components";

export const Button = styled.button`
  background-color: #e0e5ec;
  border: none;
  color: #ed8f00;
  padding: 10px 20px;
  margin: 4%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 150%;
  font-family: "Sunflower", sans-serif;
  height: 100%;
  width: 100%;
  border-radius: 40px;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;

export const FloatButton = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #ed8f00;
  padding-right: 500%;
`;

export const H1 = styled.h1`
  font-family: "Sunflower", sans-serif;
  color: #ed8f00;
`;

export const H2 = styled.h2`
  font-family: "Sunflower", sans-serif;
  color: #ed8f00;
`;

export const P = styled.p`
  font-family: "Sunflower", sans-serif;
  color: #ed8f00;
`;

export const H3 = styled.h3`
  font-family: "Sunflower", sans-serif;
  color: #ed8f00;
`;

export const Image = styled.img`
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;

export const Divider = styled.div`
  border-radius: 40px;
  height: 20px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;
