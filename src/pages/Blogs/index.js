import React, {useContext, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {useNavigation} from '@react-navigation/native';
import {MainContext} from '../../context/Context';
import {styles} from './styles';

const Blogs = () => {
  const {navigate} = useNavigation();

  const {
    blogPosts,
    lastPost,
    refreshing,
    onRefresh,
    loadMoreBlogPosts,
    fetchBlogPosts,
  } = useContext(MainContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const handlePress = () => {};

  const renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.textMore} onPress={handlePress}>
        See more
      </Text>
    );
  };

  const renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.textMore} onPress={handlePress}>
        See less
      </Text>
    );
  };

  const renderLastPost = () => (
    <TouchableOpacity
      key={lastPost?.postId}
      style={styles.lastPostContainer}
      onPress={() => navigate('Blog', {blogId: lastPost?.postId})}>
      <Text style={styles.subTitle}>Last Article</Text>
      {lastPost?.image && (
        <Image source={{uri: lastPost?.banner}} style={styles.lastPostImage} />
      )}
      <View style={styles.lastPostTitleContainer}>
        <Text style={styles.lastPostTitle}>{lastPost?.title}</Text>
        <Text style={styles.lastPostSummary}>{lastPost?.summary}</Text>
        <Text style={styles.lastPostTotalReadingTime}>
          Total Reading Time: {lastPost?.totalReadingTime} min
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    if (item === lastPost) {
      return null;
    }

    return (
      <TouchableOpacity
        key={item?.postId}
        style={styles.listItemContainer}
        onPress={() => navigate('Blog', {blogId: item?.postId})}>
        {item?.image && (
          <Image source={{uri: item?.banner}} style={styles.listItemImage} />
        )}
        <View style={styles.listTitleContainer}>
          <Text style={styles.listTitle}>{item?.title}</Text>

          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
            onReady={handlePress}>
            <Text>{item?.summary}</Text>
          </ReadMore>
          <Text style={styles.listTotalReadingTime}>
            Total Reading Time: {item?.totalReadingTime} min
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderLastPost}
        data={blogPosts}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item?.postId?.toString()}
        contentContainerStyle={styles.flatListContent}
        ListEmptyComponent={() => <ActivityIndicator />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onEndReached={loadMoreBlogPosts}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

export default Blogs;
