import Blog from '../components/Blog'
import Navbar from '../components/Navbar'

const Index = async () => {
  const blogs = await getBlogsData()
  return (
    <>
      <Navbar />
      <Blog {...blogs[0]} />
    </>
  )
}

export const getBlogsData = () =>
  fetch('http://localhost:3000/api/blogs').then((r) => r.json())

export default Index
