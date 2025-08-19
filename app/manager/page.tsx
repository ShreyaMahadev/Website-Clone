'use client';
import { Box, Typography, Card, CardContent } from '@mui/material';

const Manager = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Manager
      </Typography>
      
      <Card>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manager content will be implemented here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Manager;