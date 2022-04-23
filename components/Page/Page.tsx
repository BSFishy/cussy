import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { Page as PageType } from '@/lib/pages'

type Props = {
  page: PageType
}

const Page: FC<Props> = ({ page }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content="A website to explain what cussy is"/>
      </Head>
      <div>
        <main>
          <section className="text">
            {page.text}
          </section>
          <section className="links">
            {page.options.map(option => (
              <Link key={option.slug} href={`/${option.slug}`}>{option.text}</Link>
            ))}
          </section>
        </main>
        <footer>Made with &#10084;&#65039; by <Link href="https://github.com/BSFishy"><a
          target="_blank">MattProvalone</a></Link></footer>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: auto;
          width: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        @media (min-width: 680px) {
          main {
            width: 50%;
          }
        }

        section {
          width: 90%;
        }
        
        .text {
          text-align: center;
          font-size: 1.3rem;
        }

        .links {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          
          font-size: 1.2rem;
        }
        
        .links :global(*) {
          margin: 15px 30px;
        }

        footer {
          padding: 10px;
        }
      `}</style>
    </>
  )
}

export default Page
