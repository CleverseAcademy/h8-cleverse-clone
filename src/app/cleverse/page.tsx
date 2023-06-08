import { Blog } from '../api/blogs/route'
import { BlogBrief, BlogWithImage } from '../components/Blog'
import Navbar from '../components/Navbar'

const Index = async () => {
  const [firstBlog, ...blogs] = await getBlogsData()
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center pt-8 w-full h-max gap-y-8 max-w-4xl mx-auto">
        <div className="px-4">
          <BlogWithImage image={firstBlog.image!} {...firstBlog} />
        </div>
        <section className="flex flex-col w-full gap-3 ">
          <div className="w-full flex items-center font-semibold font-montserrat justify-between text-sectionHeader">
            <h2 className="text-lg">Blog</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
            {blogs.map((blog) => (
              <BlogBrief key={blog.href} {...blog} />
            ))}
          </div>
        </section>

        <section className="flex flex-col w-full gap-3 ">
          <div className="w-full flex items-center font-semibold font-montserrat justify-between text-sectionHeader">
            <h2 className="text-lg">Podcast & Video</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
            {blogs.map((blog) => (
              <BlogBrief key={blog.href} {...blog} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export const getBlogsData = (): Promise<Blog[]> =>
  fetch('http://localhost:3000/api/blogs', {
    next: { revalidate: 60 },
  }).then((r) => r.json())

export default Index
