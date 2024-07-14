import React from "react";
import { Game } from "../hooks/useGames";
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import useGenre, { Genre } from "../hooks/useGenre";
import GenreDisplay from "./GenreDisplay";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Wrap spacing={"20px"}>
          <GenreDisplay genre={game.genres} />
        </Wrap>
      </CardBody>
    </Card>
  );
};

export default GameCard;
