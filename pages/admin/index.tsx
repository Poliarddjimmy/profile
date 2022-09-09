import Link from "next/link"
import { useEffect, useState } from "react"
import withAuth from "../../components/hocs/withAuth"
import SEO from "../../components/seo"
import useAuth from "../../hooks/useAuth"

const AdminPage = () => {
    const [editBlock, setEditBlock] = useState<string | ''>('')
    const {currentUserData} = useAuth()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('window', window.location.hostname)
        }
    }, [])
    // console.log(currentUserData)
    return (
        <div className="container main-container">
            <SEO
                title="Admin panel"
            />
            <div className="main shadow bg-ligh min-vh-100">
                <div className="container">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-12 d-flex align-items-center p-5">
                                {
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src="/images/me.png" alt="" style={{ width: 150 }} className="rounded-circle mr-4" />
                                }
                                <div className="d-flex flex-column justify-content-center">
                                    <h1 className="text-primarys">Djimmy Poliard</h1>
                                    <h5 className="text-muted">Full-Stack Software Engineer</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row contents">
                        <div className="col-lg-12 px-5 text-justify">
                            <div className="blocks">
                                <div>
                                    <h6 className='w-100  border-bottom mb-3 text-uppercase pb-1 d-flex align-items-center'>
                                        <span className="mr-3">Profile</span>
                                        
                                        <small className="cursor-pointer" onClick={()=> editBlock === 'profile' ? setEditBlock('') : setEditBlock('profile')}>
                                            <span className="material-icons">{editBlock === 'profile' ? 'cancel' : 'edit_note'}</span>
                                        </small>
                                    </h6>
                                    {Boolean(editBlock === 'profile') ? (
                                        <></>
                                    ) : (
                                        <p>
                                            Full-stack Engineer with {(new Date()).getFullYear() - 2015}+ years of experience building scalable web
                                            applications and internal tools that drastically improve efficiency. <br />
                                            Throughout my career {`I've`} built applications like fintech platform,
                                            communication, e-commerce, Point Of Sale(POS), HR management, School management,
                                            Social network and so on using PHP, laravel, Ruby on Rails, Sinatra, Bootstrap,
                                            Javascript, React JS, React Native, Next.Js, TypeScript GraphQL and other technologies.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="block mt-5">
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(AdminPage)