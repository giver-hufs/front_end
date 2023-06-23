import React, { useState } from "react";
import styled from "styled-components";

const WishlistContainer = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
`;

const WishList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
`;

const WishText = styled.p`
  margin: 0;
`;

const AddWishButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

function Wishlist(props) {}

export default Wishlist;
