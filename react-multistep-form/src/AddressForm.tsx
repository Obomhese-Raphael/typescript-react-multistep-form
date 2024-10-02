import { FormWrapper } from "./FormWrapper"


type AddressData = {
    street: string
    city: string
    state: string
    zip: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void;
}


export const AddressForm = ({ street, city, state, zip, updateFields }: AddressFormProps) => {
    return (
        <FormWrapper title="Address">
            <label htmlFor="">Street</label>
            <input
                type="text"
                autoFocus
                required
                value={street}
                onChange={e => updateFields({ street: e.target.value })}
            />
            <label htmlFor="">City</label>
            <input
                type="text"
                required
                value={city}
                onChange={e => updateFields({ city: e.target.value })}
            />
            <label htmlFor="">State</label>
            <input
                type="text"
                required
                value={state}
                onChange={e => updateFields({ state: e.target.value })}
            />
            <label htmlFor="">Zip Code</label>
            <input
                type="text"
                required
                value={zip}
                onChange={e => updateFields({ zip: e.target.value })}
            />
        </FormWrapper>

    )
}