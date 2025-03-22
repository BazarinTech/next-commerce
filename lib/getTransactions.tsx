
type Props = {
    email: string
}

export default async function getTransactions({email}: Props): Promise<Transactions> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next_backend/main/getTransactions.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}