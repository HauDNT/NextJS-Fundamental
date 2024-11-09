'use client'
import { useState, useEffect } from 'react';
import { mutate } from "swr";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

interface IProps {
    blogId: number;
    showUpdateModal: boolean;
    setShowUpdateModal: (value: boolean) => void;
    deleteBlogSelect: (value: undefined) => void;
}

function UpdateBlogModal(props: IProps) {
    const { blogId, showUpdateModal, setShowUpdateModal, deleteBlogSelect } = props;
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const handleLoadBlogData = async () => {
        try {
            fetch(`http://localhost:8000/blogs/${blogId}`)
                .then(res => res.json())
                .then(res => {
                    setTitle(res.title);
                    setAuthor(res.author);
                    setContent(res.content);
                });
        } catch (error) {
            toast.error('Error when loading blog data');
            return;
        }
    };

    const handleSubmit = () => {
        if (!title || !author || !content) {
            toast.warning('Empty data is not accept!');
            return;
        }

        try {
            fetch(`http://localhost:8000/blogs/${blogId}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, author, content })
            })
                .then(res => res.json())
                .then(res => {
                    toast.success('Update success!');
                    handleCloseModal();
                    mutate('http://localhost:8000/blogs');
                });
        } catch (error) {
            toast.success('Create error!');
        };
    };

    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setShowUpdateModal(false);
        deleteBlogSelect(undefined);
    };

    useEffect(() => {
        if (blogId) {
            handleLoadBlogData();
        }
    }, []);

    return (
        <>
            <Modal
                show={showUpdateModal}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update A Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="..." value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="..." value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateBlogModal;