'use client'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";

interface IProps {
    blogs: IBlog[]
}

function BasicTable(props: IProps) {
    const { blogs } = props;

    console.log('>>> Check blogs: ', blogs);


    return (
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
    );
}

export default BasicTable;