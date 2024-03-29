import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	StepperInput,
	Pressable,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FoodCard = () => {
	const navigation = useNavigation();
	return (
		<View style={{justifyContent:"center"}}>
			<FlatList
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("FoodDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
						}}
					>
						<Image
							source={item.image}
							style={{ width: 150, height: 150, resizeMode: "center" }}
						/>
						<Text>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text>{item.price} </Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									name="star"
									size={16}
									color={colors.COLOR_PRIMARY}
								/>
							</View>
							
						</View>
						<View><View><Text>{item.area}</Text></View>
						</View>
						<View>
	
							<TouchableOpacity 
							style={{paddingTop:20}}
							onPress={()=>navigation.navigate("Feedback")}>
								<Text style={{borderWidth:2, borderRadius:10, padding:5, borderColor:'grey'}}>
									Feedback Of Kitchen
								</Text>
							</TouchableOpacity>
						</View>
					</Pressable>

				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-around", flexWrap: "wrap", flexDirection:"row"
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default FoodCard;

const styles = StyleSheet.create({});
