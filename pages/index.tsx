import { Button, Typography, Box } from '@mui/material';
// import { useWeather } from '../pages/context/WeatherContext';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom>
        Weather Cities App
      </Typography>
      <Link href="/cities" passHref>
        <Button variant="contained">Click Me</Button>
      </Link>
    </Box>
  );
}
