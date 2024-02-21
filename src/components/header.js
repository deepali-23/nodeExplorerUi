import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Div>
      <SpaceBetween>
        <LeftContainer>
          <Img src="XDC-Logo.svg" />
          <Img src="VerticalLine.svg" />
          <Title>Network Stats</Title>
        </LeftContainer>
        <RightContainer>
          
          <Tour><Img src="Play.svg" />Start Guided Tour</Tour>

          <Img src="Hamburger.svg" />
        </RightContainer>
      </SpaceBetween>
    </Div>
  );
}

const Div = styled.div`
  background: #2149b9 0% 0% no-repeat padding-box;
  height: 25px;
  padding: 14px 17px 14px 17px;
`;
const Img = styled.img``;
const Title = styled.span`
  font: normal normal normal 20px/24px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  margin-left: 10px;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Tour = styled.div`
  background: #2a52c1 0% 0% no-repeat padding-box;
  color: #ffffff;
  margin-right:15px;
  display:flex;
  align-items:center;
  padding: 4px 8px 4px 10px;
`;
