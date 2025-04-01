
type Props = {
    email: string
}

export default async function getBank({email}: Props): Promise<BankDetails> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/getBank.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
        cache: "no-store"
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}