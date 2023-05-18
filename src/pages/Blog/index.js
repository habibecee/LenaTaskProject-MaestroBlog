import {
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  Image,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {RenderHTML} from 'react-native-render-html';
import {MainContext} from '../../context/Context';
import {styles} from './styles';

const Blog = ({route, navigation}) => {
  const {width} = useWindowDimensions();
  const {blogPosts} = useContext(MainContext);
  const blogId = route.params.blogId;
  const blog = blogPosts?.find(blogPost => blogPost?.postId === blogId);

  useEffect(() => {
    navigation.setOptions({
      title: <Text style={styles.subText}>{blog?.title}</Text>,
    });
  }, [navigation, blog]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Image source={{uri: blog?.banner}} style={styles.postImage} />
        <View style={styles.renderHTML}>
          <RenderHTML
            source={{html: blog?.content}}
            contentWidth={width - 20}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Blog;
