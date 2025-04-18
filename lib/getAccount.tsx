
type Props = {
    email: string
}

export default async function getAccount({email}: Props): Promise<AccountData> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/account.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}