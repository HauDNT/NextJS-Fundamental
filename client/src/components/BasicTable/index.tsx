'use client'
import { useState } from 'react';
import Link from 'next/link';
import { mutate } from "swr";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import CreateBlogModal from '../Modals/createBlog.modal';
import UpdateBlogModal from '../Modals/updateBlog.modal';
import { toast } from 'react-toastify';

interface IProps {
    blogs: IBlog[]
}

function BasicTable(props: IProps) {
    const { blogs } = props;
    const [blogSelectId, setBlogSelectId] = useState<number | undefined>(undefined);
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);

    const handleDeleteBlog = async (blog: IBlog) => {
        const text = `Do you want to delete blog ${blog.id}?`;

        if (confirm(text) === true) {
            try {
                fetch(`http://localhost:8000/blogs/${blog.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(res => {
                        toast.success(`Delete blog ${blog.id} success!`);
                        mutate('http://localhost:8000/blogs');
                    });
            } catch (error) {
                toast.success('Create error!');
            };
        }
        else {
            toast.info('Delete cancel!');
        }
    };

    return (
        <>
            <div
                className='mb-3'
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <h3>Table Blogs</h3>
                <Button
                    variant='secondary'
                    onClick={() => setShowCreateModal(true)}
                >
                    Add new
                </Button>
            </div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs?.map(blog =>
                            <tr>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Link className='btn btn-primary mx-3' href={`/blogs/${blog.id}`}>
                                        View
                                    </Link>
                                    <Button
                                        variant='success'
                                        className='mx-3'
                                        onClick={() => {
                                            setBlogSelectId(blog.id);
                                            setShowUpdateModal(true);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant='danger'
                                        className='mx-3'
                                        onClick={async () => handleDeleteBlog(blog)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <CreateBlogModal
                showCreateModal={showCreateModal}
                setShowCreateModal={setShowCreateModal}
            />
            {
                blogSelectId &&
                <UpdateBlogModal
                    blogId={blogSelectId}
                    showUpdateModal={showUpdateModal}
                    setShowUpdateModal={setShowUpdateModal}
                    deleteBlogSelect={setBlogSelectId}
                />
            }
        </>
    );
}

export default BasicTable;