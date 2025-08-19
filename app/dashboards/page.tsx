'use client';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Dashboards = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Dashboards
      </Typography>
      
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Dashboard content will be implemented here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboards;