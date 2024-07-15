import { Box, Heading, HStack, Wrap } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import { Game } from "../hooks/useGames";

interface Props {
  genre: Genre[];
}
const GenreDisplay = ({ genre }: Props) => {
  return (
    <>
      {genre.map((each) => (
        <Box bg={"gray"}>
          <Heading fontSize={"small"}>{each.name}</Heading>
        </Box>
      ))}
    </>
  );
};

export default GenreDisplay;
