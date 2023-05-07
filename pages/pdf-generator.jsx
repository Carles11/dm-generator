import Layout from 'components/layout'
import PsPdfKitComponent from 'components/psPdfKit'
import React from 'react'

export default function PdfGeneator() {
  return (
    <Layout>
      <h1>Pdf-Generator</h1>
      <PsPdfKitComponent />
    </Layout>
  )
}
