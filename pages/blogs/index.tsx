import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layouts/layout";
import LeftSide from "../../components/layouts/left_side";
import { BlogInterface } from "../../interfaces/blog_interface";
import prisma from '../../lib/prisma';
import { ColorPicketRamdomly } from "../../utils/color_picket_randomly";

interface BlogsProps {
    blogs: BlogInterface[]
}

const Blogs = ({ blogs }: BlogsProps) => {
    const router = useRouter();
    var color: string;
    return (
        <Layout>
            <div className="row content">
                <LeftSide />

                <div className="col-lg-8 col-md-8 col-xl-8 right-side pad-5 text-justify">
                    {
                        blogs.map((blog: BlogInterface, index: number) => (
                            <div className="card mb-3 cursor-pointer" key={blog.id}>
                                <Link href={`/blogs/${blog.id}`}>
                                    {/* color picket randomly */}
                                    <div className="card-body rounded" style={{
                                        borderTop: `5px solid ${color = ColorPicketRamdomly()}`,
                                    }}>
                                        <div className="d-flex align-items-center">
                                            {/* cicle badge with index */}
                                            <div className="badge rounded-circle me-2 fa-2x" style={{ backgroundColor: color, }}>
                                                {index + 1}
                                            </div>
                                            <h3 className="card-title">{blog.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const blogs = await prisma.post.findMany({
        where: { published: true },
        include: { author: { select: { name: true } } },
    });

    return {
        props: { blogs },
        revalidate: 10,
    };
}

export default Blogs;