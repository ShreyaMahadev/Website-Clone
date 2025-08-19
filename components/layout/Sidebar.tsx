'use client';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Avatar,
} from '@mui/material';
import {
  Dashboard,
  Assessment,
  Settings,
  People,
  MonetizationOn,
  ConfirmationNumber,
  Article,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleItemClick = (item: string) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter(i => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };

  const drawerWidth = 280;

  const menuItems = [
    { text: 'TRANSMEDIA', isHeader: true },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#2c3e50',
          color: 'white',
          borderRight: 'none',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'primary.main',
              mr: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              T
            </Typography>
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
              CraftWANI
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: 2, pb: 2 }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#bdc3c7', 
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontWeight: 600,
            mb: 1
          }}
        >
          TRANSMEDIA
        </Typography>
        
        <List sx={{ py: 0 }}>
          <ListItem
            button
            onClick={() => handleItemClick('transmedia-org')}
            sx={{
              py: 0.5,
              px: 1,
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#bdc3c7', minWidth: 32 }}>
              <ExpandMore fontSize="small" />
            </ListItemIcon>
            <ListItemText 
              primary="TRANSMEDIA-Org" 
              primaryTypographyProps={{ 
                variant: 'body2',
                sx: { color: '#bdc3c7' }
              }} 
            />
          </ListItem>
          
          <ListItem
            button
            sx={{
              py: 0.5,
              px: 1,
              ml: 2,
              borderRadius: 1,
              bgcolor: 'rgba(52, 152, 219, 0.3)',
              '&:hover': {
                bgcolor: 'rgba(52, 152, 219, 0.4)',
              },
            }}
          >
            <ListItemText 
              primary="TRANSMEDIA" 
              primaryTypographyProps={{ 
                variant: 'body2',
                sx: { color: 'white', fontWeight: 600 }
              }} 
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;