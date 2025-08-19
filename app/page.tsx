'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';


export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Home
      </Typography>
      
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Welcome to CraftWani !!!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}