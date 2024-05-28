import { useState, useEffect } from 'react'
import Layout from "../../components/layouts/layout"
import LeftSide from "../../components/layouts/left_side"
import BlogInterface from "../../interfaces/BlogInterface"


interface HomeProps {
    posts: BlogInterface[]
}
  
const Blogs = ({ posts }: HomeProps) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
      fetch('/api/posts')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
  
  console.log(data)
    return (
        <Layout>
    
          <div className="row content">
            <LeftSide />
        </div>
    </Layout>
    )
}

export default Blogs
