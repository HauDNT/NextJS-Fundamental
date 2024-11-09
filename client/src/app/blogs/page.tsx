'use client'
import useSWR from "swr";
import BasicTable from "@/components/BasicTable";

const BlogsPage = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/blogs',
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    if (!data) return <>Loading...</>;

    return (
        <div className="mt-3">
            <BasicTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
        </div>
    );
}

export default BlogsPage;