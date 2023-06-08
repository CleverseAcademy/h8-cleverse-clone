import { Blog } from '@/app/api/blogs/route'
import { FC } from 'react'
import { Info } from '../Common/Info'
import { MediumTitle } from '../Common/Title'

export interface IPodcastProps extends Required<Omit<Blog, 'tags'>> {}

const Podcast: FC<IPodcastProps> = ({
  author,
  createdAt,
  readingTimeSec,
  title,
  description,
  image,
}) => (
  <div className="flex flex-col w-full gap-2 max-w-lg">
    <Info {...{ author, createdAt, readingTimeSec }} />
    <div className="flex flex-col gap-2 font-fcMinimal">
      <MediumTitle>{title}</MediumTitle>
      <div className="text-lg leading-5 text-description">{description}</div>
    </div>
  </div>
)
