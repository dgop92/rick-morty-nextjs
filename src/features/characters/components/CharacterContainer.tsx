import Container from "@mui/material/Container";
import { CharacterCard } from "./CharacterCard";
import { Character } from "../types";

interface CharacterContainerProps {
  characters: Character[];
}

export function CharacterContainer({ characters }: CharacterContainerProps) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "95vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "baseline",
        gap: 2,
        mt: 4,
      }}
    >
      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Container>
  );
}
