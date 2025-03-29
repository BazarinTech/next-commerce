type Props = {
    email: string | null
}

export default async function getRolls({email}: Props):Promise<Roll[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/getRolls.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}