import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const host = request.headers.get("host");

    if (!code) {
        // Redirect to GitHub OAuth
        const clientId = process.env.OAUTH_CLIENT_ID;
        if (!clientId) {
            return NextResponse.json({ error: "Missing OAUTH_CLIENT_ID" }, { status: 500 });
        }
        const redirectUri = `https://${host}/api/auth/callback`;
        const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&redirect_uri=${redirectUri}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}
