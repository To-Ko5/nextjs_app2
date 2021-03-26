import { memo, VFC } from 'react'

import Layout from '../components/Layout'
import LoginBlock from '../components/login/LoginBlock'

const login: VFC = memo(() => {
  return (
    <Layout title="login page">
      <LoginBlock />
    </Layout>
  )
})

export default login
