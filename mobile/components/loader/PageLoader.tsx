import { View, ActivityIndicator } from 'react-native'

const PageLoader = () => {
    return (
        <View className='items-center flex-1 justify-center bg-primary'>
            <ActivityIndicator size={50} className='color-red-900' />
        </View>
    )
}

export default PageLoader