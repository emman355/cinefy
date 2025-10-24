import { View, ActivityIndicator } from 'react-native'

const PageLoader = () => {
    return (
        <View className='items-center flex-1 justify-center bg-slate-600'>
            <ActivityIndicator size="large" className='bg-red-700' />
        </View>
    )
}

export default PageLoader