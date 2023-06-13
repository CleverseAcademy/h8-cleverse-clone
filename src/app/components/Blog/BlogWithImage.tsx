import { Blog } from '@/app/api/blogs/route'
import { FC } from 'react'
import { TitleSize } from '../Common/Title'
import BlogBrief from './BlogBrief'
import styles from './blog.module.css'

export interface IBlogProps extends Required<Blog> {}

const BlogWithImage: FC<IBlogProps> = ({ image, ...blogCardProps }) => (
  <div className="flex justify-between flex-row gap-7">
    <div className="flex w-1/2 max-w-lg">
      <BlogBrief {...blogCardProps} titleSize={TitleSize.Huge} />
    </div>
    <div className="grid w-1/2 drop-shadow-thumbnail content-center">
      <img className={styles.blog} src={image} alt={blogCardProps.title} />
    </div>
  </div>
)

export default BlogWithImage
