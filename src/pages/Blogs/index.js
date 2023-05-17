import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  RefreshControl,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../../utils/GeneralStyles';
import {MainContext} from '../../context/Context';
import {ActivityIndicator} from 'react-native';

const Blogs = () => {
  const {navigate} = useNavigation();
  const {blogPosts, refreshing, onRefresh, handleScroll} =
    useContext(MainContext);
  const dimensions = Dimensions.get('window');

  return (
    <SafeAreaView>
      <FlatList
        style={styles.FlatList}
        ListEmptyComponent={() => <ActivityIndicator />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={blogPosts}
        onScroll={handleScroll}
        renderItem={item => {
          return (
            <TouchableOpacity
              key={item.item.id}
              style={styles.itemContainer}
              onPress={() => navigate('Blog', {blogId: item.item.postId})}>
              <View style={item.item.image && styles.imageContainer}>
                {item.item.image && (
                  <Image
                    source={{uri: item.item.banner}}
                    style={styles.itemImage}
                  />
                )}
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>{item.item.title}</Text>

                <Text style={styles.textSummary}>
                  {item.item.summary}{' '}
                  <TouchableOpacity
                    onPress={() => navigate('Blog', {blog: item.item.id})}>
                    <Text style={styles.textMore}>Read More</Text>
                  </TouchableOpacity>
                </Text>

                <Text style={styles.totalReadingTime}>
                  Total Reading Time: {item.item.totalReadingTime}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    width: Dimensions.get('window').width,
    width: '100%',
    height: '100%',
  },

  itemContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.light,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  imageContainer: {
    width: Dimensions.get('window').width - 20,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.light,
    shadowColor: colors.secondary,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: -2,
      height: 2,
    },
  },

  itemImage: {
    width: '100%',
    height: '110%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },

  titleContainer: {
    width: Dimensions.get('window').width - 20,
    padding: 10,
  },

  textTitle: {
    fontFamily: fonts.bold,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    color: colors.textDark,
  },

  textSummary: {
    fontFamily: fonts.regular,
    fontSize: 18,
    textAlign: 'justify',
    color: colors.dark,
  },

  textMore: {
    position: 'relative',
    bottom: -4,
    left: -5,
    fontFamily: fonts.semiBold,
    fontSize: 16,
    textAlign: 'left',
    color: colors.secondary,
    textDecorationLine: 'underline',
  },

  totalReadingTime: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    textAlign: 'left',
    color: colors.secondary,
    marginTop: 10,
  },
});

export default Blogs;
