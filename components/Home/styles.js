import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    height: 52,
    width: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginTop: 20,
  },

  discoverTitle: {
    fontFamily: 'Lato-Bold',
    color:colors.black,
    marginHorizontal: 20,
    fontSize: 32,
  },

  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },

  discoverCategoryText: {
    marginRight: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },

  discoverItemImage: {
    borderRadius: 20,
  },

  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },

  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  discoverItemLocation: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    marginRight: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical:20
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight:20,
  },

  learnMoreItemImage: {
    borderRadius:20,
  },

  learnMoreItemText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical:20
  },
});
