import React from "react";
import styled from "styled-components";
import BasicHeader from "../components/BasicHeader";
import Map from "../components/Map";
import List from "../components/List";

const PageContainer = styled.div`
  background-color: #f1f1f1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const ListContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

function Mainpage(props) {
  return (
    <PageContainer>
      <BasicHeader />
      <ContentContainer>
        <MapContainer>
          <Map />
        </MapContainer>
        <ListContainer>
          <List />
        </ListContainer>
      </ContentContainer>
    </PageContainer>
  );
}

export default Mainpage;
