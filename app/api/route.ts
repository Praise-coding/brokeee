export async function GET() {
    const ee = await fetch("https://localhost:3000/api/getSession");

    return Response.json(ee);
}