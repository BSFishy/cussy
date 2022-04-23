import { ReactElement } from 'react'

export type Option = {
  text: ReactElement
  slug: string
}

export type Page = {
  slug: string
  title: string
  text: ReactElement
  options: Option[]
}

export const pageExists = (slug: string): boolean => {
  return findPage(slug) !== undefined
}

export const findPage = (slug: string): Page | undefined => {
  return PAGES.find(page => page.slug === slug)
}

export enum PageName {
  HOME = '',
  ABOUT = 'cars',
  CAR_GENDER = 'car-gender',
  GENDER = 'gender',
  CUSSY = 'cussy'
}

const PAGES: Page[] = [
  {
    slug: PageName.HOME,
    title: 'Home',
    text: (<p>Are you familiar with the hit Disney-Pixar film series &quot;Cars&quot;?</p>),
    options: [
      {
        slug: PageName.GENDER,
        text: (<a>Yes</a>),
      },
      {
        slug: PageName.ABOUT,
        text: (<a>No</a>),
      },
    ],
  },
  {
    slug: PageName.ABOUT,
    title: 'About Cars',
    text: (<p>Cars is a film</p>),
    options: [
      {
        slug: PageName.CAR_GENDER,
        text: (<a>Ok</a>),
      },
    ],
  },
  {
    slug: PageName.CAR_GENDER,
    title: 'Car Gender',
    text: (<p>In the films, male, female, and child cars can be observed.</p>),
    options: [],
  },
  {
    slug: PageName.GENDER,
    title: 'Car Gender',
    text: (<p>Have you noticed the distinction between male, female, and child cars?</p>),
    options: [
      {
        slug: PageName.CUSSY,
        text: (<a>Yes</a>),
      },
      {
        slug: PageName.CAR_GENDER,
        text: (<a>No</a>),
      },
    ],
  },
  {
    slug: PageName.CUSSY,
    title: 'Cussy',
    text: (<p></p>),
    options: [],
  },
]

export default PAGES
