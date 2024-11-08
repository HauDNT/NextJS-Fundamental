'use client'
import Link from "next/link";
import styles from "@/styles/app.module.css";
import BasicTable from "@/components/BasicTable";
import { useEffect } from "react";

export default async function Home() {
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:8000/blogs');
            const data = await res.json();
            console.log(">>> Check res: ", data);
        };

        fetchData();
    }, [])


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
            <BasicTable />
        </>
    );
}
