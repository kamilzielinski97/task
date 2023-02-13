import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {Services} from "src/constants/services";

export interface Minifigure {
  id: number
  name: string
  set_img_url: string
  set_url: string
  set_num: string
}

interface MinifiguresResponse {
  results: Minifigure[]
}
export const Step1 = () => {
  const [minifigures, setMinifigures] = useState<Minifigure[]>([])

  useEffect(() => {
    const fetchMinifigures = async () => {
      try {
        const response = await axios.get<MinifiguresResponse>(Services.REBRICKABLE_WITH_KEY, {
          params: {
            in_theme_id: 114,
          },
        })

        const randomMinifigures = getRandomMinifigures(
          response.data.results,
          3
        )
        setMinifigures(randomMinifigures)
      } catch (error) {
        console.error(error)
      }
    }

    const getRandomMinifigures = (
      minifigures: Minifigure[],
      number: number
    ) => {
      const shuffled = minifigures.slice(0);
      for (let i = 0; i < shuffled.length - 1; i++) {
        const j = i + Math.floor(Math.random() * (shuffled.length - i));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, number)
    }
    fetchMinifigures();
  }, [])

  return (
    <Wrapper>
      <Title>LEGO MINIFIGS MYSTERY BOX</Title>
      <Link to="/step2" state={{ minifigures: minifigures }}>
        LET'S GO!
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  color: white;
`
export const Link = styled(RouterLink)`
  color: white;
  background: dodgerblue;
  text-decoration: none;
  padding: 10px;
  border-radius: 16px;
  width: 160px;
  text-align: center;
`
