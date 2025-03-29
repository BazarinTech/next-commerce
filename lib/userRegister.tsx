type Error = {
    message: string
    input: string
}

type Results = {
    status: string,
    message: string,
    error?: Error[]
}
type Props = {
    name: string,
    email: string,
    phone: string,
    password: string,
    conPassword: string,
    upline: string | null,
    setIsLoading: (prev: boolean) => void
}

async function userRegister({ name, email, phone, password, conPassword, setIsLoading, upline }: Props): Promise<Results> {
    setIsLoading(true)
    if (name == '') {
        setIsLoading(false)
        return {
            status: 'Error',
            message: 'Name is required',
            error: [
                {
                    input: 'name',
                    message: 'Name is required!',
                }
            ]
        }
    }
    if (email == '') {
        setIsLoading(false)
        return {
            status: 'Error',
            message: 'Email is required',
            error: [
                {
                    input: 'email',
                    message: 'Email is required!',
                }
            ]
        }
    }
    if (phone.length < 10) {
        setIsLoading(false)
        return {
            status: 'Error',
            message: 'Phone is required',
            error: [
                {
                    input: 'phone',
                    message: 'Enter Correct Phone number!',
                }
            ]
        }
    }
    if (password == '') {
        setIsLoading(false)
        return {
            status: 'Error',
            message: 'Passowrd is required',
            error: [
                {
                    input: 'password',
                    message: 'Password is required',
                }
            ]
        }
    }
    if (conPassword == '') {
        setIsLoading(false)
        return {
            status: 'Error',
            message: 'Password Confirmation is required',
            error: [
                {
                    input: 'conPassword',
                    message: 'Password Confirmation is required',
                }
            ]
        }
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/register.php`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ name, email, phone, password, conPassword, upline })
        })
        setIsLoading(false)
        return response.json()
    } catch (error) {
        setIsLoading(false)
        return {
            status: 'Failed',
            message: `${error}`,
        }
    }

}

export default userRegister