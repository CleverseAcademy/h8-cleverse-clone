import { FC, ReactNode } from 'react'

interface ITagProps {
  children: ReactNode
}
const Tag: FC<ITagProps> = ({ children }) => (
  <a className="text-description px-2.5 py-0.5 border-title border rounded-full font-montserrat text-sm font-bold">
    {children}
  </a>
)

interface ITagGroupProps {
  tags: string[]
}

const TagGroup: FC<ITagGroupProps> = ({ tags }) => (
  <div className="flex flex-wrap gap-x-4 gap-y-2">
    {tags.map((tag) => (
      <Tag key={tag}>#{tag}</Tag>
    ))}
  </div>
)

export default TagGroup
