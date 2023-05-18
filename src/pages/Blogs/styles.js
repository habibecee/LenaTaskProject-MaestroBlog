import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils/GeneralStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  flatListContent: {
    padding: 10,
    gap: 15,
  },

  lastPostContainer: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: colors.primary,
    shadowColor: colors.bgDark,
    shadowOpacity: 0.7,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  subTitle: {
    fontFamily: fonts.bold,
    fontSize: 24,
    color: colors.warn,
    textAlign: 'left',
    margin: 10,
  },
  lastPostImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  lastPostTitleContainer: {
    padding: 15,
  },
  lastPostTitle: {
    fontFamily: fonts.bold,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: colors.textDark,
  },
  lastPostSummary: {
    fontFamily: fonts.regular,
    fontSize: 18,
    textAlign: 'justify',
    color: colors.dark,
  },
  lastPostTotalReadingTime: {
    fontFamily: fonts.bold,
    fontSize: 16,
    textAlign: 'left',
    color: colors.secondary,
    marginTop: 10,
  },
  listItemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.light,
    shadowColor: colors.dark,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: -2,
    },
  },
  listItemImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  listTitleContainer: {
    padding: 5,
  },
  listTitle: {
    fontFamily: fonts.bold,
    fontSize: 16,
    textAlign: 'center',
    color: colors.textDark,
  },
  listSummary: {
    fontFamily: fonts.regular,
    fontSize: 14,
    textAlign: 'justify',
    color: colors.dark,
  },
  listTotalReadingTime: {
    fontFamily: fonts.semiBold,
    fontSize: 12,
    textAlign: 'left',
    color: colors.textLast,
    marginVertical: 15,
  },
});
