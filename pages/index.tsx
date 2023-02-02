import PsPdfKitComponent from 'components/psPdfKit'

import NestedLayout from 'components/layout/nestedLayout'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <div className="home-title">Home</div>
      <PsPdfKitComponent />
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default Page
