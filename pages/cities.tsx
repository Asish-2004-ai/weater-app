import { useEffect, useState } from 'react';
import axios from 'axios';
import { CityRecord } from '../types/city';
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Autocomplete,
  TextField, Button
} from '@mui/material';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useWeather  } from '@/pages/context/WeatherContext';


export default function CitiesPage() {
  const [cities, setCities] = useState<CityRecord[]>([]);
  const [filteredCities, setFilteredCities] = useState<CityRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [sortConfig, setSortConfig] = useState<{ key: keyof CityRecord['fields'], direction: 'asc' | 'desc' } | null>(null);
  const { weatherData } = useWeather();


  const sortedCities = [...filteredCities].sort((a, b) => {
    if (!sortConfig) return 0;
    const aValue = a.fields[sortConfig.key];
    const bValue = b.fields[sortConfig.key];

    if (aValue === undefined || bValue === undefined) return 0;

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });


  const fetchCities = async () => {
    try {
      const rowsPerPage = 50;
      const response = await axios.get(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=${rowsPerPage}&start=${page * rowsPerPage}`
      );
      const newCities = response.data.records;

      setCities((prev) => [...prev, ...newCities]);
      setFilteredCities((prev) => [...prev, ...newCities]);
      setHasMore(newCities.length > 0);
    } catch (error) {
      console.error('Error fetching cities', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, [page]);

  const handleSearch = (value: string) => {
    if (value.trim() === '') {
      setFilteredCities(cities);
    } else {
      const lower = value.toLowerCase();
      const filtered = cities.filter((city) =>
        city.fields.name.toLowerCase().includes(lower)
      );
      setFilteredCities(filtered);
    }
  };

  const handleSort = (key: keyof CityRecord['fields']) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  


  return (
    <div style={{ padding: '20px', backgroundColor: 'white' }}>
     <div style={{display:'flex', justifyContent:'space-between'}}>
     <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
        Cities Table
      </Typography>
      <Link href="/weather/current" passHref>
        <Button variant="contained">Location</Button>
      </Link>
     </div>

      {/* Autocomplete search box */}
      <Autocomplete
        options={cities.map((city) => city.fields.name)}
        renderInput={(params) => (
          <TextField {...params} label="Search city..." variant="outlined" />
        )}
        onInputChange={(event, value) => handleSearch(value)}
        freeSolo
      />

      {loading && cities.length === 0 ? (
        <Typography>Loading...</Typography>
      ) : (
        <InfiniteScroll
          dataLength={filteredCities.length}
          next={() => setPage((prev) => prev + 1)}
          hasMore={hasMore}
          loader={<Typography style={{color: 'black'}}>Loading more cities...</Typography>}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                    City Name
                  </TableCell>
                  <TableCell onClick={() => handleSort('cou_name_en')} style={{ cursor: 'pointer' }}>
                    Country
                  </TableCell>
                  <TableCell onClick={() => handleSort('timezone')} style={{ cursor: 'pointer' }}>
                    Timezone
                  </TableCell>
                  <TableCell onClick={() => handleSort('population')} style={{ cursor: 'pointer' }}>
                    Population
                  </TableCell>
                  <TableCell onClick={() => handleSort('coordinates')} style={{ cursor: 'pointer' }}>
                    Day Min/Max
                  </TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {sortedCities.map((city, index) => (

                  <TableRow key={index}>
                    <TableCell>
                      <Link href={`/weather/${encodeURIComponent(city.fields.name)}`}>
                        {city.fields.name}
                      </Link>
                    </TableCell>
                    <TableCell>{city.fields.cou_name_en}</TableCell>
                    <TableCell>{city.fields.timezone}</TableCell>
                    <TableCell>{city.fields.population}</TableCell>
                    <TableCell>
        {weatherData[city.fields.name]
          ? `${weatherData[city.fields.name].min}°C / ${weatherData[city.fields.name].max}°C`
          : 'N/A'}
      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </InfiniteScroll>
      )}
    </div>
  );
}
