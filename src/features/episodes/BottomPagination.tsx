import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface BottomPaginationProps {
  nextPage: number | null;
  prevPage: number | null;
  onNewPage: (page: number | null) => void;
}

const getCurrentPage = (nextPage: number | null, prevPage: number | null) => {
  if (nextPage) {
    return nextPage - 1;
  }

  if (prevPage) {
    return prevPage + 1;
  }

  return 1;
};

export default function BottomPagination({
  nextPage,
  prevPage,
  onNewPage,
}: BottomPaginationProps) {
  const disabledPrev = prevPage === null;
  const disabledNext = nextPage === null;
  const page = getCurrentPage(nextPage, prevPage);

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ my: 2, px: 4 }}>
      <Button
        disabled={disabledPrev}
        variant="contained"
        color="primary"
        onClick={() => onNewPage(prevPage)}
      >
        Previous
      </Button>
      <Typography variant="body1">{page}</Typography>
      <Button
        disabled={disabledNext}
        variant="contained"
        color="primary"
        onClick={() => onNewPage(nextPage)}
      >
        Next
      </Button>
    </Stack>
  );
}
