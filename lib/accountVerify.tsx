type Props = {
    email: string
    code: string,
}

export default async function accountVerify({email, code}: Props): Promise<FAUTH> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/verify.php`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, code})
  })

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}