import React, { useRef } from "react";
import styled from "styled-components";
import BarGraph from "./BarGraph";

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const ListItem = styled.div`
  flex: 0 0 auto;
  width: 400px;
  height: 300px;
  background-color: #f1f1f1;
  margin-right: 10px;
`;
const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

function DonationBar() {
  const scrollContainerRef = useRef(null);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const donationUserSet = [
    {
      title: "User 1",
      image: "image-url-1",
      description: "Description 1",
      percentage: 50,
    },
    {
      title: "User 2",
      image: "image-url-2",
      description: "Description 2",
      percentage: 75,
    },
    {
      title: "User 3",
      image: "image-url-2",
      description: "Description 3",
      percentage: 75,
    },
    {
      title: "User 4",
      image: "image-url-2",
      description: "Description 4",
      percentage: 35,
    },
    {
      title: "User 5",
      image: "image-url-2",
      description: "Description 5",
      percentage: 33,
    },
    // Add more user data as needed
  ];

  return (
    <>
      <button onClick={scrollToPrev}>Previous</button>
      <ScrollContainer ref={scrollContainerRef}>
        {donationUserSet.map((user, index) => (
          <ListItem key={index}>
            <h2>{user.title}</h2>
            <ItemImage src={user.image} alt="Image" />
            <p>{user.description}</p>
            <BarGraph value={user.percentage} />
            <button>모금</button>
          </ListItem>
        ))}
      </ScrollContainer>
      <button onClick={scrollToNext}>Next</button>
    </>
  );
}

export default DonationBar;
