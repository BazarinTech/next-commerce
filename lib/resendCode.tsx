type Props = {
    email: string
}

export default async function resendCode({email}: Props): Promise<FAUTH> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/resend.php`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email})
  })

  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    return response.json();
}