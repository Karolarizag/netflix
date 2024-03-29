import { GetMovieGenres } from "../../../../Services/GetMovieGenres";
import {
  ChevronDownIcon,
  HandThumbsUpIcon,
  PlayCircleIcon,
  PlusIcon,
} from "../../../../Utils/Icons";
import { GenreType, MovieType } from "../../../../Utils/types";
import { Icon } from "../../../Icon";
import {
  HorizontalCardHoveredContainer,
  Container,
  ImageStyled,
  Separator,
  Text,
  CardContent,
  Title,
} from "./styled";

export const HorizontalCardHovered = ({ movie }: { movie: MovieType }) => {
  const img = `${process.env.REACT_APP_API_IMG}${movie.backdrop_path}`;
  const { movieGenres } = GetMovieGenres(movie.genre_ids.slice(0,3));

  return (
    <HorizontalCardHoveredContainer>
      <ImageStyled img={img}>
        <Title>{movie.title}</Title>
      </ImageStyled>
      <CardContent>
        <Container flex="space-between">
          <Separator>
            <Icon
              icon={PlayCircleIcon}
              heightContainer="42px"
              widthContainer="39px"
              height="42px"
              width="39px"
            />
            <Icon
              icon={PlusIcon}
              heightContainer="42px"
              widthContainer="39px"
              height="20px"
              width="20px"
              border="1px solid var(--white)"
              borderRadius="100px"
            />
            <Icon
              icon={HandThumbsUpIcon}
              heightContainer="42px"
              widthContainer="39px"
              height="20px"
              width="20px"
              border="1px solid var(--white)"
              borderRadius="100px"
            />
          </Separator>
          <Icon
            icon={ChevronDownIcon}
            heightContainer="42px"
            widthContainer="39px"
            height="20px"
            width="20px"
            border="1px solid var(--white)"
            borderRadius="100px"
          />
        </Container>
        <Text fontColor="var(--green)" fontWeight="var(--semiBold)">
          {movie.vote_average * 10} % de coincidencia
        </Text>
        <Container flex="">
          {movieGenres.map((genre: GenreType) => {
            return <Text> {genre.name}</Text>;
          })}
        </Container>
      </CardContent>
    </HorizontalCardHoveredContainer>
  );
};
