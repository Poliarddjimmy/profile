import { useEffect, useState } from "react"
import Layout from "../../components/layouts/layout"
import LeftSide from "../../components/layouts/left_side"
import { useForm, Controller } from "react-hook-form"
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";

const Editor = dynamic(() => import('../../components/editor'), { ssr: false });

interface PostCredentials {
    title: string
    content?: string
    image?: string
}

const CreateBlogs = () => {
    const router = useRouter();
    const [editorData, setEditorData] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const [code, setCode] = useState<string>();
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUploaded, setImageUploaded] = useState();

    const {
        control,
        handleSubmit,
        setError,
        getValues,
        formState: { errors, isValid, }
    } = useForm<PostCredentials>({})

    const handleEditorChange = (event: any, editor: any) => {
        setEditorData(editor.getData());
        // remove error message from content field
        if (errors.content) {
            setError('content', {
                type: "manual",
                message: ''
            })
        }
    };

    const createPost = async (payload: PostCredentials) => {
        setLoading(true);
        try {
            const res = await fetch('/api/add-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                router.push('/articles');
            } else {
                const errorData = await res.json();
                console.error('Error:', errorData.error);
                setLoading(false);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setLoading(false);
        }
    };

    const onSubmit = (payload: PostCredentials) => {
        payload.content = editorData
        payload.image = imageUploaded

        setLoading(true)
        createPost(payload);
    }

    const handleFileChange = (e: any) => {
        setSelectedFile(e.target.files[0]);
    };
    
    useEffect(() => {
        selectedFile && handleSubmitImg(selectedFile);
    }, [selectedFile]);

    const handleSubmitImg = async (img: any) => {
        const formData = new FormData();
        formData.append('file', img);

        const response = await fetch('/api/upload-image', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        setImageUploaded(result.filePath)
        console.log(result);
    };
    
    const onchangeCode = (e: any) => {
        setCode(e.target.value);
        if (e.target.value === '23Jim0488@123#!$') {
            setHasAccess(true);
        }
    }

    return (
        <Layout>

            <div className="row content">
                <LeftSide />

                <div className="col-lg-8 col-md-8 col-xl-8 right-side pad-5 text-justify">

                    {hasAccess ? (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-3">
                                {/* <label htmlFor="title">Title</label> */}
                                <Controller
                                    name="title"
                                    control={control}
                                    // defaultValue=""
                                    rules={{
                                        required: "Title is required",
                                    }}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            className={`form-control ${errors.title && `is-invalid`}`}
                                            id="title"
                                            placeholder="Title"
                                            {...field}
                                        />
                                    )}
                                />
                                {errors.title && (
                                    <div className="invalid-feedback">
                                        {errors.title.message}
                                    </div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <Editor data={editorData} onChange={handleEditorChange} />
                                {errors.content && (
                                    <small className="text-danger">
                                        {errors.content.message}
                                    </small>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                {imageUploaded ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={imageUploaded} alt="Uploaded Image" width="300" />
                                ) : (
                                    <>
                                        <label htmlFor="formFileLg" className="form-label">Upload an Image</label>
                                        <input type="file" className="form-control" onChange={handleFileChange} />
                                    </>
                                )
                                }
                            </div>


                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                // disabled={!isValid}
                                >
                                    {loading ? (
                                        <span
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                    ) : (
                                        "Create post"
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" onChange={onchangeCode} placeholder="Enter your code to continue" aria-label="Enter your code to continue" aria-describedby="basic-addon2" />
                            
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default CreateBlogs
