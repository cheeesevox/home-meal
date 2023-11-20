import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Ionicons } from '@expo/vector-icons'
import foods, { colors } from '../Constant'

 const OrderCartScreen =({ navigation })=> {
  const CartCard =({item})=>{
    return <View style={styles.cartcard}>

        <View style={{
          height:100, 
          marginLeft:10,
          paddingVertical:20,
          flex:1
          }}>
            <Text style={{fontWeight:'bold', fontSize:16}}>{item.name}</Text>
            <Text style={{fontSize:13,color:Colors.grey}}>{item.ingredient}</Text>
            <Text style={{fontSize:17,fontWeight:'bold'}}>{item.price}</Text>
        </View>
      </View>
  }
  return (
    <SafeAreaView style={{backgroundColor:Colors.white, flex:1}}>
      <View style={styles.header}>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:80}}
      data={foods}
      renderItem={({item}) => <CartCard item={item}/>}
      />
        <TouchableOpacity
				  onPress={() => navigation.navigate("Wallet")}
				  style={{
            backgroundColor: "#f96163",
            borderRadius: 29,
            paddingVertical: 18,
            width: "80%",
            alignContent:'center',
            marginVertical:30,
            marginLeft:40,
            alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Check out
				</Text>
			</TouchableOpacity>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  header:{
    paddingVertical:20,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20
  },
  cartcard:{
    height:100,
    elevation:15,
    borderRadius:10,
    backgroundColor:Colors.white,
    marginHorizontal:20,
    marginVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    alignItems:'center'
  }
})
export default OrderCartScreen;