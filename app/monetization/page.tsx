'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import dynamic from 'next/dynamic';

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
// Dynamic imports — which means loading a component only when it’s needed instead of bundling it upfront.
// Usually done when the component is heavy
// Loads the chart only when needed (not during server build).
//{ ssr: false } → disables server-side rendering for this component (important because ApexCharts depends on window, which doesn’t exist on the server).

//In ApexCharts, the chart config is divided into two main parts: options and series
//options :how the chart looks and behaves
//series : actual data being plotted. It is always an array of objects.
const MonetizationDashboard = () => {
  // Chart data for New Users & Impressions Analysis
  const newUsersData = {
    options: { //options : styling, layout and behaviour
      chart: {
        type: 'area',
        toolbar: { show: false }, //hides the entire toolbar (no zoom/reset/download buttons).
      },
      colors: ['#8B5CF6'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: {
        categories: ['10:00AM', '11:00AM', '8:00AM', '6:00AM', '5:00AM', '0:00AM'],
      },
      title: {
        text: 'Current Day New Users - Trend',
        style: { fontSize: '12px' },
      },
    },
    series: [ //actual data being plotted i.e DataSet
      {
        name: 'New Users', //Label 
        data: [1, 2, 1, 1, 1, 1],
      },
    ],
  };

  const newUsersBarData = {
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false }, //set of interactive tools : download, zoom-in, zoom-out
      },
      colors: ['#3B82F6'],
      dataLabels: { enabled: true }, // shows value of each bar/point displayed directly on the chart.
      xaxis: {
        categories: ['26', '27', '28', '29', '30', '31', '01', '02', '03', '04', '05'],
      },
      title: {
        text: 'New Users - Last 10 Days',
        style: { fontSize: '12px' },
      },
    },
    series: [
      {
        name: 'New Users',
        data: [16, 12, 28, 21, 20, 18, 29, 31, 27, 21, 37],
      },
    ],
  };

  const impressionsData = {
    options: {
      chart: {
        type: 'area',
        toolbar: { show: false },
      },
      colors: ['#EC4899'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: {
        categories: ['11:00AM', '10:30AM', '10:00AM', '9:30AM', '8:00AM', '7:30AM', '7:00AM', '6:30AM', '5:30AM', '4:30AM', '3:00AM', '2:15AM', '1:15AM', '0:15AM'],
      },
      title: {
        text: 'Current Day Impressions - Trend',
        style: { fontSize: '12px' },
      },
    },
    series: [
      {
        name: 'Impressions',
        data: [5, 10, 11, 8, 7, 6, 5, 6, 8, 4, 3, 2, 1, 0],
      },
    ],
  };

  const newUserConnectedData = {
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false },
      },
      colors: ['#EF4444'],
      dataLabels: { enabled: true },
      xaxis: {
        categories: ['25', '26', '27', '28', '29', '30', '31', '01', '02', '03', '04'],
      },
      title: {
        text: 'Impressions - Last 10 Days',
        style: { fontSize: '12px' },
      },
    },
    series: [
      {
        name: 'Connected Users',
        data: [407, 745, 561, 532, 556, 832, 749, 765, 845, 798, 1089],
      },
    ],
  };

  const connectionsAreaData = {
    options: {
      chart: {
        type: 'area',
        toolbar: { show: false },
      },
      colors: ['#F97316'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: {
        categories: ['Current Day'],
      },
      title: {
        text: 'Current Day Connections - Trend',
        style: { fontSize: '12px' },
      },
    },
    series: [
      {
        name: 'Connections',
        data: [0],
      },
    ],
  };

  const connectionsBarData = {
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false },
      },
      colors: ['#F97316'],
      dataLabels: { enabled: true },
      xaxis: {
        categories: ['7-08-2025', '4-08-2025', '6-08-2025', '5-08-2025', '3-08-2025', '2-08-2025', '1-08-2025', '0-08-2025', '8-08-2025'],
      },
      title: {
        text: 'Connections - Last 10 Days',
        style: { fontSize: '12px' },
      },
    },
    series: [
      {
        name: 'Connections',
        data: [7, 4, 6, 5, 3, 9, 8, 7, 9],
      },
    ],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, display: 'flex', alignItems: 'center' }}>
        <Box component="span" sx={{ mr: 2 }}>📊</Box>
        Monetization Dashboard
      </Typography>

      {/* New Users & Impressions Analysis */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            <span style={{ color: '#3B82F6' }}>New Users</span> & 
            <span style={{ color: '#EC4899' }}> Impressions</span> Analysis:
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Chart
                  options={newUsersData.options}
                  series={newUsersData.series}
                  type="area"
                  height={250}
                />
              </Paper>
            </Grid>
            
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    New Users 👥
                  </Typography>
                </Box>
                <Chart
                  options={newUsersBarData.options}
                  series={newUsersBarData.series}
                  type="bar"
                  height={220}
                />
              </Paper>
            </Grid>
            
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Returning Users 👥
                  </Typography>
                </Box>
                <Chart
                  options={impressionsData.options}
                  series={impressionsData.series}
                  type="area"
                  height={220}
                />
              </Paper>
            </Grid>
            
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    New User who connected 👥
                  </Typography>
                </Box>
                <Chart
                  options={newUserConnectedData.options}
                  series={newUserConnectedData.series}
                  type="bar"
                  height={220}
                />
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Connections Analysis */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#F97316' }}>
            Connections Analysis:
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Chart
                  options={connectionsAreaData.options}
                  series={connectionsAreaData.series}
                  type="area"
                  height={250}
                />
              </Paper>
            </Grid>
            
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Connections 👥
                  </Typography>
                </Box>
                <Chart
                  options={connectionsBarData.options}
                  series={connectionsBarData.series}
                  type="bar"
                  height={220}
                />
              </Paper>
            </Grid>
            
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Unique Connections 👥
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mt: 10 }}>
                  No data available
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} lg={3}>
              <Paper sx={{ p: 2, height: 300 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Avg Connections Per User 👥
                  </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                    PDO Location Connections ↓
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Items per page: 3 | 0 of 0
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MonetizationDashboard;