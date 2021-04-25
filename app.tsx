import React, { ComponentType } from 'react'
import './style/index.css'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <>
      <head>
        <title>Alfredo Salzillo</title>
        <meta name="description" content="Alfredo Salzillo personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main>
        <Page {...pageProps} />
      </main>
    </>
  )
}
