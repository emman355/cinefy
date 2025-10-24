import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import PageLoader from '../../components/loader/PageLoader'
const AuthRoutesLayout = () => {    
    const { isLoaded, isSignedIn } = useAuth()
    if (!isLoaded) {
        return (
            <PageLoader />
        )
    }

    if (isSignedIn) {
        return <Redirect href={'/(root)'} />
    }

    return <Stack screenOptions={{ headerShown: false }} />
}

export default AuthRoutesLayout