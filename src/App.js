import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from '@mui/material'
import Add from './components/Add'
import { useState } from 'react'
import { dark, light } from '@mui/material/styles/createPalette'

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack
          direction={'row'}
          spacing={2}
          p={2}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
