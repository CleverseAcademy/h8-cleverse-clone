import { FC, ReactNode } from 'react'

export enum TitleSize {
  Huge,
  Normal,
}

interface ITextProps {
  children: ReactNode
}
export interface ITitleProps extends ITextProps {
  size: TitleSize
}

const BigTitle: FC<ITextProps> = ({ children }) => (
  <h1 className="font-bold text-title leading-[2.7rem] text-primaryHeader">
    {children}
  </h1>
)
const MediumTitle: FC<ITextProps> = ({ children }) => (
  <a className="font-bold text-title leading-7 text-secondaryHeader">
    {children}
  </a>
)

export const ArticleTitle: FC<ITitleProps> = ({ children, size }) =>
  size === TitleSize.Huge ? (
    <BigTitle>{children}</BigTitle>
  ) : (
    <MediumTitle>{children}</MediumTitle>
  )
