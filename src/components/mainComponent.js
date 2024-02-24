import React from "react";
import styled from "styled-components";
import WorldMap from "./map";


export default function MainComponent() {
  return (
    <Div>
      <Block>
        <Title>Security</Title>
        <SpaceBetween>
          <LeftContainer>
            <Node>Nodes</Node>
            <NodeData>192/196</NodeData>
            <NodeHistoryData>NodeHistory (7 Days)</NodeHistoryData>
          </LeftContainer>
          <RightContainer>
            <Countries>Countries</Countries>
            <CountriesData>18</CountriesData>
         <WorldMap/>
          </RightContainer>
        </SpaceBetween>
      </Block>
      <Block>
        <Title>Speed</Title>
        <SpaceBetween>
          <LeftContainer>
            <Node>Best Block</Node>
            <NodeData>#34,014,636</NodeData>
            <NodeHistoryData>Avg Block Time</NodeHistoryData>
          </LeftContainer>
          <RightContainer>
            <Countries>Last Block</Countries>
            <CountriesData>10s ago</CountriesData>
          </RightContainer>
        </SpaceBetween>
      </Block>
      <Block>
        <Title>Security</Title>
        <SpaceBetween>
          <LeftContainer>
            <Node>Gas Price (USD)</Node>
            <NodeData>0.00003</NodeData>
            <NodeHistoryData>Avg Transaction Rate</NodeHistoryData>
          </LeftContainer>
          <RightContainer>
            <Countries>UP Time</Countries>
            <CountriesData>99%</CountriesData>
          </RightContainer>
        </SpaceBetween>
      </Block>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 38px;
  background: #1c3c93 0% 0% no-repeat padding-box;
  display: flex;
`;
const Block = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  max-width: 33.3%;
  color: #ffffff;
  padding: 6px 10px 10px 10px;
  border-color: #c8d1f1;
`;
const Node = styled.div`
  color: #667fc1;
`;
const NodeData = styled.div`
  color: #ffffff;
  font-size:20px;
`;
const NodeHistoryData = styled.div`
  color: #667fc1;
`;
const Countries = styled.div`
  color: #667fc1;
`;
const CountriesData = styled.div`
  color: #ffffff;
  font-size:26px;
`;
const LeftContainer = styled.div``;
const RightContainer = styled.div``;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  background: #103aaa 0% 0% no-repeat padding-box;
  width: 100%;
  height: 230px;
  
`;
