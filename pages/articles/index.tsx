import { useState, useEffect } from 'react'
import Layout from "../../components/layouts/layout"
import LeftSide from "../../components/layouts/left_side"
import BlogInterface from "../../interfaces/BlogInterface"
import { substr } from '../../utils/substr'
import Link from 'next/link'

const Blogs = () => {

    const [posts, setPosts] = useState<BlogInterface[]>([])
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
      fetch('/api/posts')
        .then((res) => res.json())
        .then((data) => {
            setPosts(data.posts)
          setLoading(false)
        })
    }, [])
  
    return (
        <Layout>
    
          <div className="row content">
            <LeftSide />
            
            <div className="col-lg-8 col-md-8 col-xl-8 right-side pad-5 text-justify">
                {isLoading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) :
                posts?.map((post: BlogInterface, index: number) => (
                    <Link href={`/articles/${post.slug}`} key={index}>
                        <div className="blog rounded shadow mb-3 d-flex align-items-center">
                            {
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={post.image} alt="Uploaded Image" width="100" />
                            }
                            <div className='p-2 '>
                                <h3 className='text-left'>{post.title}</h3>
                                {/* <div className="mt-n1" dangerouslySetInnerHTML={{ __html: substr(post.content)}}></div> */}
                                
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </Layout>
    )
}

export default Blogs
