import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import PageComponent from '@/components/Page'
import PAGES, { findPage, pageExists } from '@/lib/pages'

type Props = {
  slug: string
}

type Params = {
  slug: string
}

const Page: NextPage<Props> = ({ slug }) => {
  if (!slug) {
    return null
  }

  const page = findPage(slug)!

  return (
    <PageComponent page={page}/>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = () => {
  return {
    paths: PAGES.filter(page => page.slug.trim() !== '').map(page => ({ params: { slug: page.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  if (!params || !pageExists(params.slug)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      slug: params.slug,
    },
  }
}

export default Page
