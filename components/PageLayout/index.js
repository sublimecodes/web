import Head from 'next/head'
import {Footer} from '../Footer'

export const PageLayout = ({children, description = '', title = '', url}) => (
  <>
    <Head>
      <title>{`${title} - sublime.codes`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {!!url && (
        <meta property="og:url" content={`http://sublime.codes${url}`} />
      )}
      {!!url && <link rel="canonical" href={`http://sublime.codes${url}`} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="sublime_codes" />
      <meta name="twitter:creator" content="sublime_codes" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
        rel="stylesheet"
      />
    </Head>
    <main>{children}</main>
    <Footer />
    <style jsx global>
      {`
        body {
          -webkit-font-smoothing: antialiased;
          font-family: 'Source Code Pro', monospace;
          margin: 0;
          padding: 0;
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          color: #242121;
          font-feature-settings: 'liga' 0;
          line-height: 1.8;
        }
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        a {
          text-decoration: none;
        }
        h1,
        h2,
        h3,
        h4 {
          margin: 0;
        }
      `}
    </style>
  </>
)
