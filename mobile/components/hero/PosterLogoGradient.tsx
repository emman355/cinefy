import { Dimensions, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'

const { height: deviceHeight, width } = Dimensions.get("window");

const PosterLogoGradient = () => {
    return (
        <View className='items-center justify-center h-auto'>
            <Image
                source={require("../../assets/images/logo-poster.png")}
                contentFit="contain"
                style={{ width, height: deviceHeight * 0.49 }}
            />
            <LinearGradient
                colors={['transparent', 'rgba(20,20,20,0.8)', 'rgba(20,20,20,1)']}
                style={{ width, height: deviceHeight * 0.30 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className='absolute bottom-0'
            />
        </View>
    )
}

export default PosterLogoGradient