import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'


const WalletScreen = ({navigation}) => {
  return (
    <View style={{}}>
      <View style={{}}>
        <Text style={styles.walletText}>
          Wallet
        </Text>
      </View>
    
      <View>
        <Text style={{fontWeight:'500', fontSize:20,marginLeft:40, color:'blue'}}>
          Your Balance 
        </Text>
      </View >
      <View style={styles.wallet}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>100.000</Text>
          <Text style={{paddingLeft:3, fontWeight:'bold', color:'white'}}>vnđ</Text>
        </View>
        <Text style={{color:'white', fontWeight:'bold', marginTop:40,textAlign:'center', fontSize:15}}>See More</Text>
            <TouchableOpacity
            style={{color:'white'}}
            >
              <Ionicons style={{alignContent:'center' ,justifyContent:'center',color:'white', fontWeight:'bold', textAlignVertical:'center',alignItems:'center', fontSize:20}}name='caret-down-circle-outline' ></Ionicons>
            </TouchableOpacity>
        </View>

        <View style={{}}>
          <View>
            <Text>Body</Text>

          </View>
        </View>


       <TouchableOpacity
				  onPress={() => navigation.navigate("Payment")}
				  style={{
            backgroundColor: "#f96163",
            borderRadius: 29,
            paddingVertical: 18,
            width: "60%",
            alignContent:'space-between',
            marginVertical:30,
            marginLeft:80,
            alignItems: "center",
				}}
			  >
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Payment with credit card
				</Text>
			</TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  wallet:{
    backgroundColor: 'rgba(98, 83, 196, 0.8)',
              borderRadius: 29,
              paddingVertical: 18,
              width: '80%',
              height: '30%',
              alignContent:'space-between',
              alignItems:'center',
              justifyContent:'center',
              marginVertical:10,
              marginLeft:40,
  },
    walletText:{
      fontWeight:'600',
      justifyContent:'center',
        fontSize:26,
        alignContent:'center',
        color:'#e65332',
        borderColor:'white',
        backgroundColor:'#fab3a2',
        marginLeft:150,
        paddingLeft:20, 
        fontWeight:'bold',
        marginTop:40, 
        width:'28%', 
        borderRadius:10,
        borderWidth:2
  }
})

export default WalletScreen