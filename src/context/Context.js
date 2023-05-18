import React, {createContext, useCallback, useContext, useState} from 'react';

const MainContext = createContext();

const MainContextProvider = ({children}) => {
  const perCount = 10;
  const [blogPosts, setBlogPosts] = useState([]);
  const [lastPost, setLastPost] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreBlogPosts = () => {
    const nextPage = page + 1;

    fetch(
      `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${nextPage}&count=${perCount}`,
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const fetchBlogPosts = () => {
    fetch(`https://www.lenasoftware.com/api/v1/en/maestro/1`)
      .then(response => response.json())
      .then(data => {
        setBlogPosts(data.result);
        setLastPost(data.result[0]);
      })
      .catch(error => {
        console.error('ERROR:', error);
      });
  };

  return (
    <MainContext.Provider
      value={{
        blogPosts,
        lastPost,
        refreshing,
        onRefresh,
        loadMoreBlogPosts,
        fetchBlogPosts,
        page,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export {useContext, MainContext, MainContextProvider};
