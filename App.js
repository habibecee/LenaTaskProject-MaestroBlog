import React from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainContextProvider} from './src/context/Context';
import Blogs from './src/pages/Blogs';
import Blog from './src/pages/Blog';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {Logo} from './src/companents/svg';

const Stack = createStackNavigator();

function App() {
  return (
    <MainContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blogs"
            component={Blogs}
            options={{
              headerTitle: () => <Logo />,
            }}
          />
          <Stack.Screen
            name="Blog"
            component={Blog}
            options={({route, navigation}) => {
              return {
                headerLeft: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Blogs')}
                      px={20}
                      height="100%">
                      <Icon name="chevron-back-sharp" color="gray" size={24} />
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContextProvider>
  );
}

export default App;
