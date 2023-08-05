import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { styled } from 'styled-components'

export const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentModal = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  min-width: 500px;
`

export function AddEditUserModal({ type, onClose, name, email }) {
  const [user, setUser] = useState({ name, email })
  const isEdit = type === 'edit'

  const onChange = (key, value) => setUser((prev) => ({ ...prev, [key]: value }))

  const onSubmit = () => console.log(user)

  return (
    <Modal open={true} onClose={onClose}>
      <ContainerModal>
        <ContentModal>
          <Typography id='modal-modal-title' variant='h6' component='h2' mb={2}>
            {isEdit ? 'Edit' : 'Create'} user
          </Typography>
          <Box display='flex' gap={2} flexDirection='column'>
            <TextField label='Name' value={user?.name} onChange={(e) => onChange('name', e.target.value)} />
            <TextField label='Email' value={user?.email} onChange={(e) => onChange('email', e.target.value)} />
          </Box>
          <Box display='flex' gap={2} mt={5} justifyContent='flex-end'>
            <Button variant='outlined' color='error' onClick={onClose}>
              Cancel
            </Button>
            <Button variant='contained' color='success' onClick={onSubmit}>
              Submit
            </Button>
          </Box>
        </ContentModal>
      </ContainerModal>
    </Modal>
  )
}

export function DeleteUserModal({ onClose, id }) {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Delete user</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure to delete this user?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={() => console.log('delete', id)}>Delete</Button>
      </DialogActions>
    </Dialog>
  )
}
