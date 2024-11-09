'use client'
import useSWR, { Fetcher } from "swr";
import Card from 'react-bootstrap/Card';

const BlogDetail = ({ params }: { params: { blogId: string } }) => {
    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.blogId}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    if (!data) return <>Loading...</>;

    return (
        <Card className="text-center" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Card.Header>{data?.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {data?.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{data?.author}</Card.Footer>
        </Card>
    )
}

export default BlogDetail;