import { BlogInterface } from "../../interfaces/blog_interface";
import prisma from "../../lib/prisma";

interface BlogProps {
    blog: BlogInterface
}

const Blog = ({ blog }: BlogProps) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-xl-8 right-side pad-5 text-justify">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{blog.title}</h3>
                            <p className="card-text">{blog.content}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    By {blog.author.name}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths = async () => {
    const blogs = await prisma.post.findMany({
        where: { published: true },
    });

    const paths = blogs.map((blog: { id: { toString: () => any; }; }) => ({
        params: { id: blog.id.toString() },
    }));

    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }: { params: { id: any; }; }) => {
    const blog = await prisma.post.findUnique({
        where: { id: Number(params.id) },
        include: { author: { select: { name: true } } },
    });

    return { props: { blog } };
}

export default Blog;