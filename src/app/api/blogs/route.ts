import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export interface Blog {
  author: string
  createdAt: Date
  readingTimeSec: number
  title: string
  description: string
  tags: string[]
  href: string
  image?: string
}

const blogs: Blog[] = [
  {
    author: 'Arken',
    createdAt: new Date('2023-03-30'),
    description:
      'In 2022, the DEX trading volume reached $1.2T. However, it is unclear where this volume originated from and what kind of trading behavior was exhibited by users. What trading behavior did users engage in and why did they engage in this behavior?',
    readingTimeSec: 180,
    tags: ['web3', 'defi-review'],
    title: 'Uncovering Trading Behaviors on DEX: The DeFi Review January 2023',
    image:
      'https://storage.googleapis.com/cleverse-cms/trading_behavior_thumbnail_de5ddbc5f2/trading_behavior_thumbnail_de5ddbc5f2.png',
    href:
      'https://cleverse.com/blog/uncovering-trading-behaviors-on-dex-the-de-fi-review-january-2023',
  },
  {
    title: 'The DeFi Review by Arken Finance',
    description:
      'DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.',
    tags: ['defi-review', 'web3', 'arken.finance'],
    author: 'Arken Finance',
    createdAt: new Date('2022-11-26'),
    readingTimeSec: 3 * 60,
    href:
      'https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50',
  },
  {
    title: 'Welcome to the World of Web 3.0',
    description:
      'Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?',
    tags: ['introduction', 'web3'],
    author: 'Aikdanai',
    createdAt: new Date('2022-04-26'),
    readingTimeSec: 9 * 60,
    href:
      'https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4',
  },
  {
    title: 'Solidity Made Easy with Hardhat',
    description:
      'A walkthrough guide on how to use Hardhat to develop a smart contract with ease!',
    tags: ['hardhat', 'tutorial'],
    author: 'Aikdanai',
    createdAt: new Date('2022-08-05'),
    readingTimeSec: 6 * 60,
    href:
      'https://blogs.cleverse.com/solidity-made-easy-with-hardhat-91a6972362bb',
  },
  {
    title: 'Solving DApps Problem with Merkle drop',
    description:
      'When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?',
    tags: ['smart contract', 'web3'],
    author: 'Nutchanon',
    createdAt: new Date('2022-09-27'),
    readingTimeSec: 8 * 60,
    href:
      'https://blogs.cleverse.com/solving-dapps-problem-with-merkle-drop-ff656adca942',
  },
]

export const GET = (request: NextRequest) => {
  const tag = request.nextUrl.searchParams.get('tag')
  revalidateTag(tag!)
  return NextResponse.json(blogs)
}
