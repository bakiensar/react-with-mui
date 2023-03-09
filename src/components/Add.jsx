import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  GroupAdd,
  Image,
  MissedVideoCall,
} from '@mui/icons-material'

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          bgcolor={'background.default'}
          color={'text.primary'}
          width={400}
          height={250}
          p={3}
          sx={{
            backgroundColor: 'background.default',

            borderRadius: '20px',
          }}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Typography variant="span" fontWeight="500">
              Remy Sharp
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%', marginTop: '20px' }}
            id="standard-multiline-static"
            multiline
            placeholder="What's new"
            variant="standard"
            rows={3}
          />
          <Stack
            direction="row"
            gap={1}
            mt={2}
            mb={2}
            sx={{ cursor: 'pointer' }}
          >
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <MissedVideoCall color="error" />
            <GroupAdd color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}

export default Add
