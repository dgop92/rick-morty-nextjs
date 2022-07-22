import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@apollo/client";
import BottomPagination from "./components/BottomPagination";
import { EpisodeCard } from "./components/EpisodeCard";
import { ControlledSelect } from "../../components/Select";
import { TextField } from "../../components/TextField";
import { ALL_EPISODES } from "./queries";
import { EpisodeResponseData, EpisodeVarsData } from "./types";

interface FilterData {
  episodeName: string;
  season: string;
}

const seasonsIds = [1, 2, 3, 4, 5];
const seasons = seasonsIds.map((id) => ({
  text: `Season ${id}`,
  value: `S0${id}`,
}));

export default function EpisodesConent() {
  const {
    loading,
    data: responseData,
    refetch,
  } = useQuery<EpisodeResponseData, EpisodeVarsData>(ALL_EPISODES, {
    variables: { page: 1 },
    notifyOnNetworkStatusChange: true,
  });

  const episodes = responseData ? responseData.episodes.results : [];
  const nextPage = responseData ? responseData.episodes.info.next : null;
  const prevPage = responseData ? responseData.episodes.info.prev : null;

  const onSubmit: SubmitHandler<FilterData> = (data) => {
    refetch({ filter: { name: data.episodeName, episode: data.season } });
  };

  const onNewPage = (page: number | null) => {
    if (page) {
      refetch({ page });
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FilterData>({
    defaultValues: {
      season: "",
    },
  });

  return (
    <Container maxWidth="lg">
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.paper",
          px: 4,
          py: 2,
          mb: 4,
        }}
      >
        <Stack direction="row" alignItems="baseline" spacing={2}>
          <TextField
            name="episodeName"
            placeholder="Episode Name"
            inputProps={{
              ...register("episodeName"),
            }}
            InputLabelProps={{ shrink: false }}
            error={!!errors.episodeName}
            helperText={errors.episodeName?.message}
            sx={{ maxWidth: 400 }}
          />
          <ControlledSelect
            name="season"
            label="Season"
            items={seasons}
            control={control}
            errorMessage={errors.season?.message}
          />
        </Stack>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Apply
        </Button>
      </Paper>

      <BottomPagination nextPage={nextPage} prevPage={prevPage} onNewPage={onNewPage} />

      {!loading ? (
        <Box
          sx={{
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(325px, 1fr))",
            display: "grid",
            mt: 4,
          }}
        >
          {episodes.map((d) => (
            <EpisodeCard key={d.id} {...d} />
          ))}
        </Box>
      ) : (
        <LinearProgress sx={{ mt: 5 }} />
      )}
    </Container>
  );
}
