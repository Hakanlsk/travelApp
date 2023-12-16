import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { destinationData } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../theme';
import {useNavigation} from '@react-navigation/native'

export default function Destinations() {

  const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
        {
            destinationData.map((item,index) => {
                return(
                    <DestinationCard navigation={navigation}  item={item} key={index} />
                )
            })
        }
    </View>
  )
}


const DestinationCard = ({item, navigation}) => {

    const [isFavourite, toggleFavourite] = useState(false);


    return(
        <TouchableOpacity
        onPress={()=> navigation.navigate('Destination', {...item})}
        style={{width: wp(44), height: wp(65)}}
        className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
            <Image
                source={item.image}
                style={{width: wp(44), height: wp(65), borderRadius: 35}}
                className="absolute"
            />

        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
        />

        <TouchableOpacity 
        onPress={()=> toggleFavourite(!isFavourite)} 
        style={{backgroundColor: 'rgba(255,255,255,0.4)'}} 
        className="absolute top-1 right-3 p-2 rounded-full">
            <AntDesign name="heart" size={20} color={isFavourite ? theme.text : 'white'} />
        </TouchableOpacity>

        <Text style={{fontSize:wp(4.4)}} className="font-semibold text-white">{item.title}</Text>
        <Text style={{fontSize:wp(2.4)}} className="text-white">{item.shortDescription}</Text>

        </TouchableOpacity>
    )
}