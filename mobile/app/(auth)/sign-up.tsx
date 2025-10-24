import { KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { isIOS } from '@/constants/platform'
import PosterLogoGradient from '@/components/hero/PosterLogoGradient'
import AuthWrapper from '@/components/wrapper/AuthWrapper'
import AuthFormWithGoogle from '@/components/form/AuthFormWithGoogle'
import { useHeaderHeight } from '@react-navigation/elements'

const SignUpScreen = () => {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const height = useHeaderHeight();

    return (
        <KeyboardAvoidingView
            behavior={isIOS ? "padding" : "height"}
            keyboardVerticalOffset={isIOS ? 20 : height}
            className='flex-1'
        >
            <AuthWrapper>
                <PosterLogoGradient />

                <AuthFormWithGoogle
                    formStyles='absolute inset-0 mx-auto top-1/2 -translate-y-3/2'
                    signUp
                    title="Sign up to Cineefy"
                    subTitle="Please sign up to continue"
                    googleButtonText="Sign up with Google"
                    emailAddressValue={emailAddress}
                    passwordValue={password}
                    redirectTo="/sign-in"
                    onChangeEmail={setEmailAddress}
                    onChangePassword={setPassword}
                />
            </AuthWrapper>
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen