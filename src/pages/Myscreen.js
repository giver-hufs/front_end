import React from "react";
import styled from "styled-components";

const rewards = [
  {
    id: 1,
    name: "Reward 1",
    description: "Description of Reward 1",
    points: 100,
  },
  {
    id: 2,
    name: "Reward 2",
    description: "Description of Reward 2",
    points: 200,
  },
  // Add more reward items as needed
];

const ThermometerForm = styled.div`
  display: flex;
  align-items: flex-end;
`;
const ScrollableList = styled.div`
  height: 300px;
  width: 700px;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Thermometer = styled.div`
  position: relative;
  width: 13px;
  height: 100px;
  background-color: #f11112;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: ${({ fillPercentage }) => fillPercentage}%;
    background-color: #ff6555;
    border-radius: 4px 4px 0 0;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: ${({ fillPercentage }) => fillPercentage}%;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    width: 20px;
    height: 20px;
    background-color: #ff6555;
    border-radius: 50%;
  }
`;

const RewardList = () => {
  const calculateFillPercentage = (points) => {
    const maxPoints = Math.max(...rewards.map((reward) => reward.points));
    return (points / maxPoints) * 100;
  };

  return (
    <div>
      <h2>Rewards</h2>

      <ScrollableList>
        <ThermometerForm>
          <Thermometer
            fillPercentage={calculateFillPercentage(rewards.points)}
          />
          <p>37도 입니다.</p>
        </ThermometerForm>
        <ul>
          {rewards.map((reward) => (
            <li key={reward.id}>
              <h3>{reward.name}</h3>
              <p>{reward.description}</p>
              <p>Points: {reward.points}</p>
            </li>
          ))}
        </ul>
      </ScrollableList>
    </div>
  );
};

export default RewardList;
