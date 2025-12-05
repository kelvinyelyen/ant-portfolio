import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Content Manager",
    icons: {
        other: [
            {
                rel: "cms-config-url",
                url: "/admin/config.yml",
                type: "text/yaml",
            },
        ],
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
