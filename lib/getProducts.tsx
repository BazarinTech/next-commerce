
export default async function getProducts(): Promise<Products[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/products.php`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    return response.json();
}