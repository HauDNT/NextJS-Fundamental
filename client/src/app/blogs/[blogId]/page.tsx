const BlogDetail = ({ params }: { params: { blogId: string } }) => {
    console.log('--> Check props: ', params);

    return (
        <>Blog detail {params.blogId}</>
    )
}

export default BlogDetail;