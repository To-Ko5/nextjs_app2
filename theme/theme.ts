import { extendTheme, ColorMode } from '@chakra-ui/react'

interface ChakraConfig {
  initialColorMode: ColorMode
  useSystemColorMode: boolean
}

const config: ChakraConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config })
export default theme
