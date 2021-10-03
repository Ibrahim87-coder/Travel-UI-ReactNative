import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';
import activitiesData from '../../assets/data/activtiesData';
import discoverCategoriesData from '../../assets/data/discoverCategoriesData';
import discoverData from '../../assets/data/discoverData';
import learnMoreData from '../../assets/data/learnMoreData';
import colors from '../../assets/colors/colors';
import profile from '../../assets/images/person.png';
import Entypo from 'react-native-vector-icons/Entypo';

Feather.loadFont();

const Home = ({navigation}) => {
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" color={colors.white} size={18} />
            <Text style={styles.discoverItemLocation}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const renderActivitiesItem = ({item}) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          {
            marginLeft: item.id === 'activities-1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const renderLearnMoreItem = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {marginLeft: item.id === 'learnMore-1' ? 20 : 0},
        ]}
        imageStyle={styles.learnMoreItemImage}>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover Section */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivitiesItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
