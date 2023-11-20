import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import FoodListScreen from "../screens/FoodListScreen";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";
import OrderCartScreen from "../screens/OrderCartScreen";
import WalletScreen from "../screens/WalletScreen";
import PaymentScreen from "../screens/PaymentScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import FeedBackScreen from "../screens/FeedBackScreen";


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="FoodList" component={FoodListScreen} />
				<Stack.Screen name="FoodDetail" component={FoodDetailsScreen} />
				<Stack.Screen name="OrderCart" component={OrderCartScreen} />
				<Stack.Screen name="Wallet" component={WalletScreen} />
				<Stack.Screen name="Payment" component={PaymentScreen} />
				<Stack.Screen name="UserProfile" component={UserProfileScreen} />
				<Stack.Screen name="Regiter" component={RegisterScreen} />
				<Stack.Screen name="Feedback" component={FeedBackScreen} />

			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default AppNavigator;

const styles = StyleSheet.create({});
