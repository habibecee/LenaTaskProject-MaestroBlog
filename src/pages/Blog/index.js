import {
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  Image,
  View,
  TouchableOpacity,
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
        <Image
          alt={blog?.imageAlt}
          source={{uri: blog?.image}}
          style={styles.postImage}
        />

        <View style={styles.authorContainer}>
          {blog?.users?.avatar && (
            <TouchableOpacity>
              <Image
                alt={blog?.imageAlt}
                source={{uri: blog?.users?.avatar}}
                style={styles.avatar}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Text style={styles.authorText}>
              {' '}
              {blog?.users?.name} {blog?.users?.surname}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.renderHTML}>
          <View style={styles.postDate}>
            <Text style={styles.postDateText}>
              created: {blog?.createdAt.slice(0, 10)}
            </Text>
            <Text style={styles.postDateText}>
              modified: {blog?.modifiedAt.slice(0, 10)}
            </Text>
          </View>
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
