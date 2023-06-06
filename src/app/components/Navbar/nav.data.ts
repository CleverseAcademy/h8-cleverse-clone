export interface INavLinkProps {
  text: string;
  url: string;
}

const DefaultNavData: INavLinkProps[] = [
  {
    text: "About Us",
    url: "https://about.cleverse.com/"
  },
  {
    text: "Blog",
    url: "https://cleverse.com/web3"
  },
  {
    text: "Career",
    url: "https://careers.cleverse.com/"
  }
]

export default DefaultNavData