import { KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { isIOS } from '@/constants/platform'
import { useHeaderHeight } from '@react-navigation/elements'
import AuthWrapper from '@/components/wrapper/AuthWrapper'
import AuthFormWithGoogle from '@/components/form/AuthFormWithGoogle'
import PosterLogoGradient from '@/components/hero/PosterLogoGradient'

const SignInScreen = () => {
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
          title="Sign in To Cineefy"
          subTitle="Welcome Back, Please sign in to continue"
          googleButtonText="Sign in with Google"
          emailAddressValue={emailAddress}
          passwordValue={password}
          redirectTo="/sign-up"
          onChangeEmail={setEmailAddress}
          onChangePassword={setPassword}
        />
      </AuthWrapper>
    </KeyboardAvoidingView>
  )
}

export default SignInScreen