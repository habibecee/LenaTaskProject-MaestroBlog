import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../utils/GeneralStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  subText: {
    position: 'relative',
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.textDark,
    textAlign: 'center',
    marginVertical: 10,
  },

  content: {
    flex: 1,
    backgroundColor: colors.light,
  },

  postImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },

  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.textLight,
    margin: 10,
  },

  authorText: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    color: colors.textDark,
  },

  renderHTML: {
    flex: 1,
    padding: 15,
  },

  postDate: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },

  postDateText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.textDark,
  },
});
