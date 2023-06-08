import { FC } from 'react'
import { IBlogProps } from '../Blog/BlogWithImage'
import { toFormattedDate, toReadingTimeInMins } from '../Blog/utils'

export interface IInfoProps
  extends Pick<IBlogProps, 'author' | 'createdAt' | 'readingTimeSec'> {}

export const Info: FC<IInfoProps> = ({ author, readingTimeSec, createdAt }) => (
  <div className="flex flex-row font-montserrat text-xs gap-4">
    <p className="font-semibold text-highlight">{author}</p>
    <p className="text-description">
      {toFormattedDate(createdAt)} - {toReadingTimeInMins(readingTimeSec)}
    </p>
  </div>
)
