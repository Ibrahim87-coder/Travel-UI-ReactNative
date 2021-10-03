import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bgimg: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  descWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 40,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },

  itemTitle: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 32,
  },

  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  locationText: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 16,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    height: 64,
    width: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  descTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },

  descTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },

  descText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    marginTop: 20,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },

  infoItem: {},

  infoTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.gray,
  },

  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },

  infoText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange,
  },

  infoSubText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  btnWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: colors.orange,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
});
