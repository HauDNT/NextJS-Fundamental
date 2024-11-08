'use client'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import CreateBlogModal from '../Modals/createBlog.modal';
import { useState } from 'react';

interface IProps {
    blogs: IBlog[]
}

function BasicTable(props: IProps) {
    const { blogs } = props;
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

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
                                    <Button variant='primary' className='mx-3'>View</Button>
                                    <Button variant='success' className='mx-3'>Edit</Button>
                                    <Button variant='danger' className='mx-3'>Delete</Button>
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
        </>
    );
}

export default BasicTable;