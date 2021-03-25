import Link from 'next/link'
import {
  Box,
  Flex,
  Heading,
  useColorMode,
  useDisclosure,
  Button,
  IconButton
} from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Flex
        as="nav"
        boxShadow="xs"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            Title
          </Heading>
        </Flex>

        <Flex
          align="center"
          fontSize="sm"
          display={{ base: 'none', md: 'flex' }}
          flexGrow={2}
        >
          <Box pr={4}>
            <Link href="/">ユーザー一覧</Link>
          </Box>
          <Box>
            <Link href="/login">設定</Link>
          </Box>
        </Flex>

        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>
    </header>
  )
}

export default Header
