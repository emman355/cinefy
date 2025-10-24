import { TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface InputTextProps {
    value: string
    onChange: (text: string) => void,
    textContentType?: TextInputProps['textContentType'],
    placeholder: string,
}
const InputText = ({ value, onChange, textContentType, placeholder }: InputTextProps) => {
    return (
        <TextInput
            textContentType={textContentType}
            keyboardAppearance='dark'
            className='bg-secondary px-3 py-3 rounded-xl text-md text-text-muted focus:outline-none'
            autoCapitalize="none"
            value={value}
            placeholderTextColor="#A0A0A0"
            placeholder={placeholder}
            onChangeText={(emailAddress) => onChange(emailAddress)}
            secureTextEntry={textContentType === 'password'}
        />
    )
}

export default InputText