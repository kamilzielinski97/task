import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, Minifigure } from "src/components/Step/Step1";
import { MinifigureCard } from "src/components/MinifigureCard";

interface State {
  minifigures: Minifigure[];
}

export const Step2 = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();
  const { minifigures }: State = location.state;
  console.log('location', location)
  return (
    <Wrapper>
      <CardsWrapper>
        {minifigures.map((minifigure) => (
          <div onClick={() => setSelected(minifigure.set_num)}>
            <MinifigureCard
              key={minifigure.set_num}
              selected={minifigure.set_num === selected}
              imageUrl={minifigure.set_img_url}
              name={minifigure.name}
              detailsUrl={minifigure.set_url}
            />
          </div>
        ))}
      </CardsWrapper>
      <StyledLink
        selected={selected}
        to={"/step3"}
        state={{ selected: selected, minifigures: minifigures }}
      >
        Proceed to shipment
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardsWrapper = styled(Box)`
    display: flex;
    flex-direction: row;
`

const StyledLink = styled(Link)<{ selected: string }>`
    ${({ selected }) =>
  !selected.length && "pointer-events: none; background: grey;"}
`
