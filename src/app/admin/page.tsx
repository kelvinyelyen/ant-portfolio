"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function AdminPage() {
    useEffect(() => {
        // Include the Netlify Identity widget
        if ((window as any).netlifyIdentity) {
            (window as any).netlifyIdentity.on("init", (user: any) => {
                if (!user) {
                    (window as any).netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                    });
                }
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Script
                src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
                strategy="afterInteractive"
            />
        </div>
    );
}
