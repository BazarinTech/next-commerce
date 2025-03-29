type Props = {
    email: string,
}

export default async function getGrabOrders({email}: Props): Promise<OrderGrab[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/getOrder.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, orderType: 'grab'})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}