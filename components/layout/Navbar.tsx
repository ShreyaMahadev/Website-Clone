'use client';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  Avatar,
  IconButton,
} from '@mui/material';
import { Menu, Search, Notifications } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(0);

  const mainTabs = [
    { label: 'Dashboards', path: '/dashboards' },
    { label: 'Reports', path: '/reports' },
    { label: 'General Settings', path: '/general-settings' },
    { label: 'Manager', path: '/manager' },
    { label: 'Monetization', path: '/monetization' },
    { label: 'Ticketing', path: '/ticketing' },
    { label: 'Logs', path: '/logs' },
  ];

  useEffect(() => {
    const currentTabIndex = mainTabs.findIndex(tab => 
      pathname.startsWith(tab.path)
    );
    if (currentTabIndex !== -1) {
      setValue(currentTabIndex);
    }
  }, [pathname]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(mainTabs[newValue].path);
  };

  return (
    <>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          bgcolor: 'white',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ minHeight: 64 }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onMenuClick}
            sx={{ mr: 2, color: 'text.primary' }}
          >
            <Menu />
          </IconButton>

          <Tabs
            value={value}
            onChange={handleTabChange}
            sx={{ flexGrow: 1 }}
            textColor="primary"
            indicatorColor="primary"
          >
            {mainTabs.map((tab, index) => (
              <Tab 
                key={index}
                label={tab.label} 
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                }}
              />
            ))}
          </Tabs>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit" sx={{ color: 'text.primary' }}>
              <Search />
            </IconButton>
            <IconButton color="inherit" sx={{ color: 'text.primary' }}>
              <Notifications />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              <Typography variant="body2">T</Typography>
            </Avatar>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              Transmedia
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;