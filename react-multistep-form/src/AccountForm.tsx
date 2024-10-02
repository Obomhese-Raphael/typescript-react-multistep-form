import { FormWrapper } from "./FormWrapper"

type AccountData = {
    email: string,
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (field: Partial<AccountData>) => void,
}

export const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
    return (
        <FormWrapper title="Create Account">
            <label>Email</label>
            <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={e => updateFields({ email: e.target.value })}
            />
            <label>Password</label>
            <input  
                type="password" 
                required
                value={password}
                onChange={e => updateFields({ password: e.target.value })} 
            />
        </FormWrapper>
    )
}