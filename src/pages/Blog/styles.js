import {StyleSheet} from 'react-native';
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

  renderHTML: {
    flex: 1,
    padding: 15,
  },
});
