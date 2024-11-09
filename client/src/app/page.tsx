'use client'
import useSWR from "swr";
import Link from "next/link";
import styles from "@/styles/app.module.css";
import BasicTable from "@/components/BasicTable";

export default function Home() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        'http://localhost:8000/blogs',
        fetcher,
        {
            revalidateIfStale: true,
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
        }
    );

    // console.log(">>> Check data -->: ", data);

    if (!data) return <>Loading...</>;

    return (
        <>
            <ul>
                <li>
                    <Link href={"/facebook"} className={styles["red"]}>
                        Facebook
                    </Link>
                </li>
                <li>
                    <Link href="/youtube">Youtube</Link>
                </li>
                <li>
                    <Link href="/google">Google</Link>
                </li>
            </ul>
            <BasicTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
        </>
    );
}
