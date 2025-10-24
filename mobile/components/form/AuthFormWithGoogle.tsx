import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GoogleIcon from '../icon/GoogleIcon'
import InputText from '../input/InputText'
import { Href, Link } from 'expo-router'
import ClerkIcon from '../icon/ClerkIcon'

interface AuthFormWithGoogleProps {
	title: string,
	subTitle: string,
	googleButtonText: string,
	emailAddressValue: string,
	passwordValue: string,
	onChangeEmail: (text: string) => void,
	onChangePassword: (text: string) => void,
	redirectTo: Href,
	signUp?: boolean,
	formStyles?: string,
}

const AuthFormWithGoogle = ({
	signUp = false,
	formStyles,
	title,
	subTitle,
	googleButtonText,
	emailAddressValue,
	passwordValue,
	redirectTo,
	onChangeEmail,
	onChangePassword }:
	AuthFormWithGoogleProps) => {
	return (
		<View className={`pt-5 pb-20 px-8 ${formStyles}`}>
			<View className='py-5 px-8 border border-gray-600 rounded-t-xl'>
				<View className='gap-8'>
					<View className='items-center gap-2'>
						<Text className='text-3xl text-text-light font-bold'>{title}</Text>
						<Text className='text-xl text-text-muted font-normal'>{subTitle}</Text>
					</View>

					<TouchableOpacity className='flex-row items-center justify-center py-3 px-5 gap-5 border border-gray-600 rounded-xl'>
						<GoogleIcon size={20} />
						<Text className='text-lg font-medium text-text-light'>{googleButtonText}</Text>
					</TouchableOpacity>

					<View className="flex-row items-center">
						<View className="flex-1 border border-gray-500" />
						<Text className="mx-3 text-gray-500 font-medium -translate-y-0.5">or</Text>
						<View className="flex-1 border border-gray-500" />
					</View>

					<View className='gap-4'>
						<InputText
							placeholder="Enter your email address or username"
							value={emailAddressValue}
							onChange={onChangeEmail}
							textContentType='emailAddress'
						/>
						<InputText
							placeholder="Enter your password"
							value={passwordValue}
							onChange={onChangePassword}
							textContentType='password'
						/>
					</View>

					<TouchableOpacity className='flex-row items-center justify-center py-3 px-5 rounded-xl bg-white'>
						<Text className='text-lg font-medium'>{signUp ? "Sign Up" : "Sign In"}</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View className='bg-secondary border-s border-e border-b border-gray-600 rounded-b-lg'>
				<View className='flex-row py-5 justify-center gap-2'>
					<Text className='text-lg font-medium text-text-light'>{signUp ? "Already" : "Don&apos;t"} have an account?</Text>
					<Link href={redirectTo} asChild>
						<TouchableOpacity>
							<Text className='text-lg font-medium text-text-light'>{signUp ? "Sign In" : "Sign Up"}</Text>
						</TouchableOpacity>
					</Link>
				</View>
				<View className="flex-1 border-t border-gray-500" />
				<View className='flex-row py-5 items-center justify-center gap-2'>
					<Text className='text-lg font-medium text-text-light'>Secured By</Text>
					<ClerkIcon />
				</View>
			</View>
		</View>
	)
}

export default AuthFormWithGoogle