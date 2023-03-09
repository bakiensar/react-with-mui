import {
  AutoStories,
  DarkMode,
  Diversity1,
  Diversity3,
  Home,
  LocalGroceryStore,
  PeopleAlt,
  Settings,
} from '@mui/icons-material'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material'
import React from 'react'

const Sidebar = (props) => {
  console.log('props', props)
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#pages">
              <ListItemIcon>
                <AutoStories />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#groups">
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#marketplace">
              <ListItemIcon>
                <LocalGroceryStore />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#friends">
              <ListItemIcon>
                <Diversity1 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#profile">
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#profile">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch
                onChange={(e) =>
                  props.setMode(props.mode === 'light' ? 'dark' : 'light')
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
