import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Detail of blog",
    description: "Detail of blog",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
