type Error = {
    message: string
    input: string
}

type Results = {
    status: string,
    message: string,
    user_status: string,
    error?: Error[]
}
type Props = {
    email: string,
    password: string,
    setIsLoading: (prev: boolean) => void
}

async function userLogin({ email, password, setIsLoading }: Props): Promise<Results> {
    setIsLoading(true)
    if (email == '') {
        setIsLoading(false)
        return {
            status: 'Error',
            message: 'Email is required',
            user_status: '',
            error: [
                {
                    input: 'email',
                    message: 'Email is required!',
                }
            ]
        }
    }
    if (password == '') {
        setIsLoading(false)
        return {
            status: 'Error',
            message: 'Passowrd is required',
            user_status: '',
            error: [
                {
                    input: 'password',
                    message: 'Password is required',
                }
            ]
        }
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/login.php`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ email, password })
        })
        setIsLoading(false)
        return response.json()
    } catch (error) {
        setIsLoading(false)
        return {
            status: 'Failed',
            message: `${error}`,
            user_status: '',
        }
    }

}

export default userLogin