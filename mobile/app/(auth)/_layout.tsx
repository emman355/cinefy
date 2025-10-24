import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import PageLoader from '../../components/PageLoader'
const AuthRoutesLayout = () => {    
    const { isLoaded, isSignedIn } = useAuth()
    if (!isLoaded) {
        return (
            <PageLoader />
        )
    }

    if (isSignedIn) {
        return <Redirect href={'/(root)/index'} />
    }

    return <Stack screenOptions={{ headerShown: false }} />
}

export default AuthRoutesLayout