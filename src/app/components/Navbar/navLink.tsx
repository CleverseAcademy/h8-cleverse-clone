import { FC } from 'react'
import { INavLinkProps } from './nav.data'

const NavLink: FC<INavLinkProps> = ({ text, url }) => (
  <a href={url} className="font-fcMinimal">
    {text}
  </a>
)

export default NavLink
