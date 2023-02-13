import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

interface MinifigCardProps {
  imageUrl?: string;
  detailsUrl?: string;
  name?: string;
  selected: boolean;
}

export const MinifigCard = ({
imageUrl,
name,
detailsUrl,
selected,
}: MinifigCardProps) => {
  return (
    <CardWrapper selected={selected}>
      <Image src={imageUrl} />
      <Name>{name}</Name>
      <MoreDetails target={"_blank"} href={detailsUrl}>
        Show details
      </MoreDetails>
    </CardWrapper>
  );
};

const CardWrapper = styled(Paper)<{ selected: boolean }>`
    height: 20rem;
    width: 15rem;
    border-radius: 1rem;
    border: 2px solid black;
    margin: 2rem;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  border: ${({ selected }) => (selected ? "6px solid #ff6b00" : "none")};
`;

const Image = styled("img")`
    width: 90%;
    height: 50%;
`;

const Name = styled("p")`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`;

const MoreDetails = styled("a")`
    color: orange;
    text-decoration: none;
    width: 50%;
    text-align: center;
    padding: 4px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: lightgrey;
    }
`;
