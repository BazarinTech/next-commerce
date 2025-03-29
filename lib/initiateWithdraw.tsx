
export default async function initiateWithdraw({amount, email, type}: Transact):Promise<OrderCreate> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/withdraw.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({amount, email, type})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}