import { VFC } from 'react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
  onOpen: () => void
}

const MenuIconButton: VFC<Props> = (props) => {
  const { onOpen } = props
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  )
}
export default MenuIconButton
