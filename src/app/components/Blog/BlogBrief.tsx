import { Blog } from '@/app/api/blogs/route'
import { FC, ReactNode } from 'react'
import { Info } from '../Common/Info'
import { MediumTitle } from '../Common/Title'
import TagGroup from '../Tag'

export interface IBlogBriefProps extends Omit<Blog, 'image'> {
  readonly TitleComponent?: FC<{ children: ReactNode }>
}
const BlogBrief: FC<IBlogBriefProps> = ({
  title,
  description,
  tags,
  author,
  createdAt,
  readingTimeSec,
  TitleComponent: Title = MediumTitle,
}) => (
  <div className="flex flex-col w-full gap-2 max-w-lg">
    <Info {...{ author, createdAt, readingTimeSec }} />
    <div className="flex flex-col gap-2 font-fcMinimal">
      <Title>{title}</Title>
      <div className="text-lg leading-5 text-description">{description}</div>
    </div>
    <TagGroup tags={tags} />
  </div>
)

export default BlogBrief
