type Props = {
    prodID: string
}

export default async function getProduct({prodID}: Props): Promise<Products> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/next_backend/main/product.php`, {
        method: 'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({prodID})
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}