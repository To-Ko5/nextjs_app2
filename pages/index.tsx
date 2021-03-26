import { memo, VFC } from 'react'

import Layout from '../components/Layout'

const index: VFC = memo(() => {
  return (
    <Layout title="top page">
      <div>top</div>
    </Layout>
  )
})

export default index
