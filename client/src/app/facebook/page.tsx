'use client'
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

function Facebook() {
    const router = useRouter();

    const handleBtn = () => {
        router.push('/')
    };

    return (
        <>
            <h1>Facebook</h1>
            <Button variant="primary">Bootstrap</Button>
            <button onClick={() => handleBtn()}>Back Home</button>
        </>
    );
}

export default Facebook;