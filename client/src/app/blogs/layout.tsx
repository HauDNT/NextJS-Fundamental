import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs list",
    description: "List blogs",
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
