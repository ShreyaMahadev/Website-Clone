'use client';
import { Tabs, Tab, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SecondaryNavbarProps {
  tabs: Array<{ label: string; path: string; }>;
}

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({ tabs }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const currentTabIndex = tabs.findIndex(tab => 
      pathname === tab.path
    );
    if (currentTabIndex !== -1) {
      setValue(currentTabIndex);
    }
  }, [pathname, tabs]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(tabs[newValue].path);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ px: 3 }}
      >
        {tabs.map((tab, index) => (
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
    </Box>
  );
};

export default SecondaryNavbar;