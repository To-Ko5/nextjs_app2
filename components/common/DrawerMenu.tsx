import Link from 'next/link'

import { VFC, memo } from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from '@chakra-ui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody as="nav" p={0} bg="black.100">
            <Box p={4}>
              <Link href="/">
                <Button w="100%"> TOP</Button>
              </Link>
            </Box>
            <Box p={4}>
              <Button w="100%">
                <Link href="/">ユーザー一覧</Link>
              </Button>
            </Box>
            <Box p={4}>
              <Button w="100%">
                {' '}
                <Link href="/">設定</Link>
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
