import Link from "next/link";
import styles from "@/styles/app.module.css";
import BasicTable from "@/components/BasicTable";

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
            <BasicTable/>
        </>
    );
}
