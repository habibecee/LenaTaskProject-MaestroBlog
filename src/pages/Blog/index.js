import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {RenderHTML} from 'react-native-render-html';
import {MainContext} from '../../context/Context';
import {colors, fonts} from '../../utils/GeneralStyles';

const Blog = ({route, navigation}) => {
  const {blogPosts} = useContext(MainContext);
  const blogId = route.params.blogId;
  const blog = blogPosts?.find(blog => blog.postId === blogId);
  const {width} = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      title: <Text style={styles.subText}>{blog.title}</Text>,
    });
  }, [blog]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.content}>
        <RenderHTML source={{html: blog.content}} contentWidth={width} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subText: {
    position: 'relative',
    fontFamily: fonts.bold,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },

  content: {
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 15,
  },
});

export default Blog;
