import { memo, useCallback, useEffect, VFC } from 'react'

import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

import Layout from '../components/Layout'
import UserCard from '../components/users/UserCard'
import { UserDetailModal } from '../components/users/UserDetail'
import { getAllUsers } from '../hooks/getAllUsers'
import { selectUser } from '../hooks/selectUser'

const UserManagement = (users) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { onSelectUser, selectedUser } = selectUser()
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
    },
    [users.users, onSelectUser, onOpen]
  )
  return (
    <Layout title="top page">
      <Wrap p={{ base: 4, md: 10 }}>
        {users.users.map((obj) => (
          <WrapItem key={obj.id} mx="auto">
            <UserCard
              id={obj.id}
              imageUrl="https://source.unsplash.com/random"
              userName={obj.name}
              fullName={obj.username}
              onClick={onClickUser}
            />
          </WrapItem>
        ))}
      </Wrap>
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </Layout>
  )
}

export default UserManagement

export async function getStaticProps() {
  const users = await getAllUsers()
  return { props: { users } }
}
