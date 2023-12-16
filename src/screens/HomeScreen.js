import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';

const ios = Platform.OS=='ios';
const topMargin = ios? 'mt-3':'mt-10'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll} className={"space-y-6" + topMargin}>
        {/* avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text style={{fontSize:wp(7)}}>Let's Discover</Text>
          <TouchableOpacity>
            <Image 
              source={require('../../assets/images/avatar.png')}
              style={{width: wp(12), height: wp(12)}}
            />
          </TouchableOpacity>
        </View>

        {/* searchbar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
              <Feather name="search" size={24} color="black"/>
              <TextInput
                placeholder='Search Destination'
                placeholderTextColor={'gray'}
                className="flex-1 text-base mb-1 pl-1 tracking-wider"
              />
          </View>
        </View>

        {/* categories */}
        <View>
          <Categories/>
        </View>

        {/* sort categories */}
        <View className="mb-4">
          <SortCategories/>
        </View>

        {/* destination */}
        <View>
          <Destinations/>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  scroll:{
    marginVertical:28
  },
  Icon:{
    fontWeight:'700'
  }
})