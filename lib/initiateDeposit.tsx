
export default async function initiateDeposit({amount, email, type}: Transact):Promise<OrderCreate> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next_backend/main/deposit.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({amount, email, type})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}