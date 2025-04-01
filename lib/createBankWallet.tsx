
export default async function createBankWallet({type, email, name, account}: BankPost): Promise<OrderCreate> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/createbank.php`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({type, email, name, account}),
    cache: "no-store"
  })

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
}