import { Blog } from '@/app/api/blogs/route'
import { FC } from 'react'
import { Info } from '../Common/Info'
import { ArticleTitle, TitleSize } from '../Common/Title'

export interface IPodcastProps extends Required<Omit<Blog, 'tags'>> {}

const Podcast: FC<IPodcastProps> = ({
  author,
  createdAt,
  readingTimeSec,
  title,
  description,
  image,
}) => (
  <div className="flex flex-row gap-x-6 content-center">
    <div className="w-[26rem]">
      <img src={image} alt={title} />
    </div>
    <div className="flex flex-col w-full gap-2 max-w-lg justify-center">
      <Info {...{ author, createdAt, readingTimeSec }} />
      <div className="flex flex-col gap-2 font-fcMinimal">
        <ArticleTitle size={TitleSize.Normal}>{title}</ArticleTitle>
        <div className="text-lg leading-5 text-description">{description}</div>
      </div>
    </div>
  </div>
)

export default Podcast
