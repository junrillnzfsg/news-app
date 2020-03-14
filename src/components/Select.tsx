import React, { FunctionComponent, SyntheticEvent } from 'react'
import { Dropdown, DropdownProps } from 'semantic-ui-react'
import SelectData from '../model/SelectData'

interface OwnProps {
    placeholder: string
    options: SelectData[]
    onChange: (e: SyntheticEvent, formValue: DropdownProps) => void
}

type Props = OwnProps

const Select: FunctionComponent<Props> = props => (
    <Dropdown
        placeholder={props.placeholder}
        fluid
        search
        selection
        options={props.options}
        onChange={props.onChange}
    />
)

export default Select
