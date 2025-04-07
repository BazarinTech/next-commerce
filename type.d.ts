type Register = {
    status: string,
    response: {
        message: string,
        input: string,
    }
}

type Login = {
    status: string,
    message: string,
    token: string,
    input: string
}

type Products = {
    id: number,
    title: string,
    price: number,
    income: number,
    grabs: number;
    description: string,
    image: string,
    status: string,
    created_at: string,
}

type OrderCreate = {
    status: string,
    message: string,
}

type OrderGrab = {
    id: number,
    title: string,
    price: number,
    income: number,
    grabs: number,
    time: string,
    status: string,
    image: string
}

type Wallet = {
    balance: number,
    total_income: number,
    rolls: number,
    invite_income: number,
    bonus_income: number,
    status: string,
}

type Roll = {
    id: number,
    name: string,
    cost: number,
    rolls: number,
    status: "Active" | "Buy",
    time: string,
    media: string
}

type BankDetails = {
    dep_name: string,
    dep_account: string,
    with_name: string,
    with_account: string,
}

type BankPost = {
    type: string,
    name: string,
    account: string,
    email: string | null,
}

type Transact = {
    type: 'Withdraw' | 'Deposit',
    amount: string,
    email: string | null,
}

type Transaction = {
    ID: number,
    type: 'Withdraw' | 'Deposit',
    amount: number,
    time: string,
    fees: number,
    status: 'Success' | 'Failed' | 'Pending',
    account: string
}
type Transactions = {
    deposits: Transaction[],
    withdraws: Transaction[],
    total_deposits: number,
    total_withdraws: number,
}
type Team = {
    id: number,
    email: string,
    date_joined: string,
    status: "Active" | "Inactive",
    comission: number
}

type TeamResponse = {
    level1_users: Team[],
    level2_users: Team[],
    level1_active_users: number,
    level2_active_users: number,
    level1_income: number,
    level2_income: number,
    userID: number
}
type Bonus = {
    id: number
    name: string,
    status: string,
    target: number,
    target_type: string,
    reward:  number,
    reward_type: 'money' | 'package'
    reached: number
}
type BonusOrder = {
    user: string | null,
    id: number,
    reward: number,
    reward_type: string,
}
type AccountData = {
    name: string
    email: string
    phone: string,
    old_password: string,
    new_password: string,
    con_password: string
}
type FAUTH = {
    status: string,
    message: string
}