import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Stack,
  Box,
  Container,
  CardContent,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";

export default function ProductView() {
  return (
    <Card>
      <Stack direction="row" spacing={5}>
        <CardMedia
          component="img"
          sx={{ width: "28%", borderRadius: 5, pl: 1, pb: 1, pt: 1 }}
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564"
          alt="Paella dish"
          /* Rectangle 8 */
        />
        <Stack direction="column" sx={{ pt: 5 }}>
          <Card sx={{ bgcolor: "#E3F9DD" }}>
            <CardContent>
              <Typography sx={{ color: "#229A16" }} variant="subtitle1">
                IN STOCK
              </Typography>
            </CardContent>
          </Card>
          <Typography sx={{ pt: 2, color: "red" }} variant="subtitle1">
            SALE
          </Typography>
          <Typography sx={{ pt: 2 }} variant="h3">
            The Imperfections of Memory
          </Typography>
          <Stack direction="row" sx={{ pt: 10 ,gap:8 }}>
            <Button sx={{}}>Add To Cart</Button>
            <Button>Book Now</Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
