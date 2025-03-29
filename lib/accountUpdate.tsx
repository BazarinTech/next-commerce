type Error = {
    message: string
    input: string
}

type Results = {
    status: string,
    message: string,
    error?: Error[]
}
type Props = AccountData & {
    setIsLoading: (isLoading: boolean) => void
}


async function accountUpdate({ name, email, phone, old_password, new_password, con_password, setIsLoading }: Props): Promise<Results> {
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
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/next_backend/main/editAccount.php`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({ name, email, phone, old_password, new_password, con_password })
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


export default accountUpdate