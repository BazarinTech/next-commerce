type Props = {
    id: number
    type: string,
    quantity: number
    income: number,
    user: string
    cost: number
}

export default async function createGrab({id, type, quantity, income, user, cost}: Props): Promise<OrderCreate> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/createOrder.php`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id, type, quantity, income, user, cost})
  })

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}