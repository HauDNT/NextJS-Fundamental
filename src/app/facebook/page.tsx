'use client'
import { useRouter } from "next/navigation";

function Facebook() {
    const router = useRouter();

    const handleBtn = () => {
        router.push('/')
    };

    return (
        <>
            <h1>Facebook</h1>
            <button onClick={() => handleBtn()}>Back Home</button>
        </>
    );
}

export default Facebook;