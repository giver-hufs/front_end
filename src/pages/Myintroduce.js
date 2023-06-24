import React from "react";
import styled from "styled-components";
import BasicHeader from "../components/MainHeader";
import { MainStyled } from "../styles/MainStyled";

const Container = styled.div`
  height: 100vh;
  background: url(/images/background.jpg);
  background-size: cover;
`;

const IntroContent = styled.div``;

const CompanyName = styled.h1`
  font-size: 250px;
  padding: 10%;
  color: black; /* 변경: 회사 이름 색상 */
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: Black; /* 변경: 설명 텍스트 색상 */
  margin: 5px 100px; /* 변경: 상하 여백 추가 */
`;

const MyIntroduce = () => {
  return (
    <>
      <BasicHeader />
      <Container>
        <IntroContent>
          <CompanyName>GIVER</CompanyName>
          <Description>
            4차 산업혁명 시대의 IT기술 발달과 함께 장애인들의 신체적 한계가 4차
            산업혁명 시대의 정보통신기술 발달과 함께 장애인들의 신체적 한계가
            극복되면서 장애인들은 지금보다 훨씬 더 중요한 역할을 맡을 수 있으며,
            더 많은 사회 참여의 기회를 가질 수 있게 되었습니다. 또한 디지털
            하이테크 시대에 발맞추어 장애인들도 수준 높은 기술과 전문성을 익힐
            수 있는 대학 교육이 필요한 시대가 되었습니다. 하지만 이러한 기술이
            필요하지만 아직 장애 학우들의 대학 진학률이 현저히 낮습니다. 그
            이유는 장애의 유형 및 특성에 맞는 대학 교육 여건과 환경 조성이
            열악하기 때문이라고 합니다. 이러한 상황을 해결하기 위해 저희 팀은
            장애인 도우미 앱 Giver를 만들게 되었습니다. 이를 돕지 앱은 직접 장애
            학우를 돕는 것뿐만 아니라 Donation 메뉴를 통해 학교 내 장애 학우들이
            필요한 부분을 펀딩할 수 있습니다.
          </Description>
        </IntroContent>
      </Container>
    </>
  );
};

export default MyIntroduce;
