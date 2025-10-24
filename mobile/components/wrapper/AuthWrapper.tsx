import { ScrollView } from "react-native"
import { isWeb } from "../../constants/platform"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import React from "react";


interface AuthWrapperProps {
    children: React.ReactNode;
}
// Wrapper that switches between web and mobile
const AuthWrapper = ({ children }: AuthWrapperProps) => {
    if (isWeb) {
        return (
            <ScrollView
                className="bg-primary"
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        )
    }

    return (
        <KeyboardAwareScrollView
            className="bg-primary"
            enableOnAndroid
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            {children}
        </KeyboardAwareScrollView>
    )
}

export default AuthWrapper