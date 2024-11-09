import Link from "next/link";
import styles from "@/styles/app.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Description for Home page',
}

export default function Home() {
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
        </>
    );
}
