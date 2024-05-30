import { Fragment, useEffect, useState } from "react"
import BlogInterface from "../../../interfaces/BlogInterface"
import Layout from "../../../components/layouts/layout"
import LeftSide from "../../../components/layouts/left_side"
import { useRouter } from "next/router"
import Image from "next/image"
import { substr } from "../../../utils/substr"

const Blog = () => {
    const router = useRouter();
    const [post, setPost] = useState<BlogInterface>({title: '', content: '', image: ''} as BlogInterface)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
        let slug = router.query.slug
    
          fetch(`/api/post?slug=${slug}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data.post)
              setLoading(false)
            })
    }, [router.query.slug])
    
  
    return (
        <Layout title={post?.title}>
    
          <div className="row content">
            <LeftSide />
            
            <div className="col-lg-8 col-md-8 col-xl-8 right-side pad-5 text-justify">
                {isLoading ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    <Fragment>
                        { post?.image &&
                            <div className="mb-4">
                                <Image 
                                    src={post?.image} 
                                    alt={post?.title}
                                    width={'100%'}
                                    height={'100%'}
                                    sizes="100vw"
                                />
                            </div>
                        }
                        
                        <div className="border-top border-bottom text-center cursor-pointer mb-3" onClick={() => router.push('/articles')}>
                            <i className="fa fa-arrow-left me-2"></i> See all articles
                        </div>
                        
                        <h2 className="text-left">{post?.title}</h2>
                        
                        <div className="mt-3" dangerouslySetInnerHTML={{ __html: post?.content}}></div>
                    </Fragment>
                
                )}
            </div>
        </div>
    </Layout>
    )
}

export default Blog
