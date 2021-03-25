import React, { FC } from 'react'
import Head from 'next/head'

import Header from './common/Header'

interface Title {
  title?: string
}

const Layout: FC<Title> = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
