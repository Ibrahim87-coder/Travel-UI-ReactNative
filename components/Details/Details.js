import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.bgimg}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={32} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.descWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={40} color={colors.orange} />
        </View>
        <View style={styles.descTextWrapper}>
          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
              </View>
              
              <TouchableOpacity style={styles.btnWrapper} onPress={()=> alert("You booked a trip!")}>
                  <Text style={styles.btnText}>Book Now</Text>
              </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
