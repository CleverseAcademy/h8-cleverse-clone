import { FC } from 'react'

export interface IBlogProps {
  author: string
  createdAt: Date
  readingTimeSec: number
  title: string
  description: string
  tags: string[]
  image?: string
}

const Blog: FC<IBlogProps> = ({ author, createdAt }) => (
  <div>
    <div className="flex flex-row text-xs gap-2">
      <p className="font-semibold text-highlight">{author}</p>
      <p className="text-description">{createdAt.toString()}</p>
    </div>
  </div>
)

export default Blog
