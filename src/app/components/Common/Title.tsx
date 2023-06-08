import { FC, ReactNode } from 'react'

export interface ITitleProps {
  children: ReactNode
}
export const BigTitle: FC<ITitleProps> = ({ children }) => (
  <h1 className="font-bold text-title leading-[2.7rem] text-primaryHeader">
    {children}
  </h1>
)
export const MediumTitle: FC<ITitleProps> = ({ children }) => (
  <a className="font-bold text-title leading-7 text-secondaryHeader">
    {children}
  </a>
)
