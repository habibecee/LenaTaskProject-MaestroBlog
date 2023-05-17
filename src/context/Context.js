import axios from 'axios';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const MainContext = createContext();

const MainContextProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreBlogPosts = () => {
    const nextPage = page + 1;

    fetch(
      `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${nextPage}&count=10`,
    )
      .then(response => response.json())
      .then(data => {
        const newBlogPosts = data.result;

        setBlogPosts(prevBlogPosts => [...prevBlogPosts, ...newBlogPosts]);
        setPage(nextPage);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  };

  const handleScroll = ({nativeEvent}) => {
    const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;

    if (isEndReached) {
      loadMoreBlogPosts();
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const fetchBlogPosts = () => {
    fetch('https://www.lenasoftware.com/api/v1/en/maestro/1')
      .then(response => response.json())
      .then(data => {
        setBlogPosts(data.result);
      })
      .catch(error => {
        console.error('ERROR:', error);
      });
  };

  useEffect(() => {
    fetchBlogPosts();
    loadMoreBlogPosts();
  }, []);

  return (
    <MainContext.Provider
      value={{
        blogPosts,
        refreshing,
        onRefresh,
        handleScroll,
        loadMoreBlogPosts,
        page,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export {useContext, MainContext, MainContextProvider};
