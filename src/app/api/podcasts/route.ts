import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { Blog } from '../blogs/route'

export interface Podcast extends Required<Omit<Blog, 'tags'>> {}

const podcasts: Podcast[] = [
  {
    author: 'Panjamapong',
    createdAt: new Date('2021-04-09'),
    description:
      'What are the expectations for a senior developer versus a junior developer? What does the company expect from each developer path? How can I advance to senior developer as soon as possible? Let’s find out the answers in this interview!!!',
    href: 'https://www.youtube.com/watch?v=cuZdfMm2iPI',
    image: 'podcasts/the-expectation-ep1.jpg',
    readingTimeSec: 360,
    title: 'THE EXPECTATION EP1 : Senior Developer - Management Overhead',
  },

  {
    author: 'Jakpat',
    createdAt: new Date('2021-07-16'),
    description:
      '"Get stuck in my work. See no way out. What should I do?" Unsure on your own system design? How do we solve these problems? Let’s find out the answers in this interview!!!',
    href: 'https://www.youtube.com/watch?v=cuZdfMm2iPI',
    image: 'podcasts/the-expectation-ep5.jpg',
    readingTimeSec: 300,
    title: 'THE EXPECTATION EP5 : Junior Developer - Survival Skill',
  },
]

export const GET = (request: NextRequest) => {
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag!)
  return NextResponse.json(podcasts)
}
