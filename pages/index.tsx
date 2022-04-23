import type { NextPage, } from 'next'
import PageComponent from '@/components/Page'
import { findPage, PageName } from '@/lib/pages'

const Home: NextPage = () => {
  const page = findPage(PageName.HOME)!

  return (
    <PageComponent page={page}/>
  )
}

export default Home
