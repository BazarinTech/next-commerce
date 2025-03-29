
export default async function createBonusOrder({reward, user, reward_type, id}: BonusOrder): Promise<OrderCreate> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/createOrder.php`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({reward, user, reward_type, id, type:'bonus'})
    })
  
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
  }