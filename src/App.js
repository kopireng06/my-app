import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

import { Container, ContainerActions, PencilIcon, TrashIcon } from './_appStyle'
import { AddEditUserModal, DeleteUserModal } from './components/modals/user'
import { Button } from '@mui/material'

const columns = [
  {
    name: 'Name',
    selector: (row) => row.name
  },
  {
    name: 'Email',
    selector: (row) => row.email
  },
  {
    name: 'Actions',
    selector: (row) => row.action
  }
]

const data = [
  {
    id: 1,
    name: 'Beetlejuice',
    email: 'Beetlejuice@gmail.com',
    action: <Action />
  },
  {
    id: 2,
    name: 'Ghostbusters',
    email: 'Ghostbusters@gmail.com',
    action: <Action />
  }
]

function Action({ onEdit, onDelete }) {
  return (
    <ContainerActions>
      <PencilIcon onClick={onEdit} />
      <TrashIcon onClick={onDelete} />
    </ContainerActions>
  )
}

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [totalRows, setTotalRows] = useState(0)
  const [perPage, setPerPage] = useState(10)
  const [userModal, setUserModal] = useState(null)
  const [deleteUserModal, setDeleteUserModal] = useState(null)

  const dataWithActions = data.map((d) => ({
    ...d,
    action: (
      <Action
        {...d}
        onEdit={() => setUserModal({ ...d, type: 'edit' })}
        onDelete={() => setDeleteUserModal({ ...d })}
      />
    )
  }))

  // useEffect(() => {
  //   fetchData(1, perPage)
  // }, [perPage])

  // const handlePageChange = (page) => {
  //   fetchData(page, perPage)
  // }

  // const handlePerRowsChange = async (newPerPage, page) => {
  //   setPerPage(newPerPage)
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>
  // } else {
  return (
    <Container>
      {!!userModal && <AddEditUserModal {...userModal} onClose={() => setUserModal(null)} />}
      {!!deleteUserModal && <DeleteUserModal {...deleteUserModal} onClose={() => setDeleteUserModal(null)} />}
      <Button
        onClick={() => setUserModal({ type: 'create' })}
        variant='contained'
        sx={{ width: '200px', marginLeft: 'auto' }}
      >
        Create
      </Button>
      <DataTable
        columns={columns}
        data={dataWithActions}
        // pagination
        // paginationServer
        // paginationTotalRows={totalRows}
        // onChangePage={handlePageChange}
        // onChangeRowsPerPage={handlePerRowsChange}
      />
    </Container>
  )
  // }
}

export default App
