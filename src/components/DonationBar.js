import React, { useRef } from "react";
import styled from "styled-components";
import BarGraph from "./BarGraph";

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 30px 120px;
`;

const ListItem = styled.div`
  flex: 0 0 auto;
  width: 400px;
  height: 260px;
  background-color: #f1f1f1;
  margin-right: 10px;

  padding: 14px;

  button {
    padding: 13px 30px;
    background: white;
    border-radius: 20px;
    box-shadow: 3px 3px 5px gray;
  }
`;
const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

function DonationBar() {
  const scrollContainerRef = useRef(null);
  
  const donationUserSet = [
    {
      title: "어렸을 적 앓은 열병으로 인해 실명의 위기에 처한 이탈리어아학과 이경화 학우",
      image: "image-url-1",
      description: "어렸을 적 앓은 열병으로 인해 실명의 위기에 처한 이탈리어아학과 이경화 학우",
      percentage: 50,
    },
    {
      title: "장애가족의 행복한 일상을 함께 응원해주세요",
      image: "image-url-2",
      description: "장애가족의 행복한 일상을 함께 응원해주세요",
      percentage: 75,
    },
    {
      title: "장애인들을 위한 무료세탁서비스",
      image: "image-url-2",
      description: "장애인들을 위한 무료세탁서비스",
      percentage: 75,
    },
    {
      title: "장애인의 따뜻한 겨울 나기",
      image: "image-url-2",
      description: "장애인의 따뜻한 겨울 나기",
      percentage: 35,
    },
    {
      title: "사랑의 동전 모금함을 나눠주기",
      image: "image-url-2",
      description: "사랑의 동전 모금함을 나눠주기",
      percentage: 33,
    },
    {
      title: "틱장애 환우 모금캠페인",
      image: "image-url-2",
      description: "틱장애 환우 모금캠페인",
      percentage: 33,
    },
  ];

  return (
    <>
      <ScrollContainer ref={scrollContainerRef}>
        {donationUserSet.map((user, index) => (
          <ListItem key={index}>
            <h2>{user.title}</h2>
            <p>{user.description}</p>
            <BarGraph value={user.percentage} />
            <button>모금 함께하기</button>
          </ListItem>
        ))}
      </ScrollContainer>
    </>
  );
}

export default DonationBar;
