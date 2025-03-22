type Props = {
    id: number
    type: string,
    user: string,
    setIsLoading: (isLoading: boolean) => void
}

export default async function orderRolls({id, type, user, setIsLoading}: Props): Promise<OrderCreate> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next_backend/main/createOrder.php`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id, type, user})
  })

  if (!response.ok){
    setIsLoading(false)
    throw new Error(`HTTP error! Status: ${response.status}`);
  } 
    setIsLoading(false)
    return response.json();
}