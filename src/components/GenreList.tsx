import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { data, errors, isLoading } = useGenre();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
