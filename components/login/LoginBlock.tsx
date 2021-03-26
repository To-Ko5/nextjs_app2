import { ChangeEvent, memo, useState, VFC } from 'react'
import {
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
  Button
} from '@chakra-ui/react'

import { useAuth } from '../../hooks/useAuth'

const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('')
  const { login, loading } = useAuth()

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const clickLoginButton = () => {
    login(userId)
  }

  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <Button
            isFullWidth
            isLoading={loading}
            disabled={userId === '' || loading}
            onClick={clickLoginButton}
          >
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
})

export default Login
