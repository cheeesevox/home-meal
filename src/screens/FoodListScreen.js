import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import FoodCard from "../components/FoodCard";

const FoodListScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop:40}}>
			{/* render header */}
			<Header headerText={""} headerIcon={"bell-o"} />

			

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"enter your favorate food"} />

			{/* sessiion filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Area</Text>
				{/* session list */}
				<CategoriesFilter />
			</View>

			{/*  List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Menu Meal</Text>
				{/*  list */}

				<FoodCard />
			</View>
		</SafeAreaView>
	);
};

export default FoodListScreen;

const styles = StyleSheet.create({});
