import { Blog } from '@/app/api/blogs/route'
import { FC } from 'react'
import { Info } from '../Common/Info'
import { ArticleTitle, TitleSize } from '../Common/Title'
import TagGroup from '../Tag'

export interface IBlogBriefProps extends Omit<Blog, 'image'> {
  titleSize?: TitleSize
}
const BlogBrief: FC<IBlogBriefProps> = ({
  title,
  description,
  tags,
  author,
  createdAt,
  readingTimeSec,
  titleSize = TitleSize.Normal,
}) => (
  <div className="flex flex-col w-full gap-2 max-w-lg">
    <Info {...{ author, createdAt, readingTimeSec }} />
    <div className="flex flex-col gap-2 font-fcMinimal">
      <ArticleTitle size={titleSize}>{title}</ArticleTitle>
      <div className="text-lg leading-5 text-description">{description}</div>
    </div>
    <TagGroup tags={tags} />
  </div>
)

export default BlogBrief
