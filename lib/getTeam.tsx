
type Props = {
    email: string
}

export default async function getTeam({email}: Props): Promise<TeamResponse> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next_backend/main/getTeam.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}