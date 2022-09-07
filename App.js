import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearshScreen';
import AddItemScreen from './screens/AddItemScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import DetailsScreen from './screens/DetailsScreen';
import Test from './components/Test';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CategoryScreen from './screens/CategoryScreen';
import './services/axios'
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Signup" component={SignupScreen}  />
        <Stack.Screen name="test" component={Test} />
        <Stack.Screen name="Search" component={SearchScreen}  />
        <Stack.Screen name="Details" component={DetailsScreen}  />
        <Stack.Screen name="Category" component={CategoryScreen}  />


        </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="AddItem" component={AddItemScreen}  />
         <Stack.Screen name="Categories" component={CategoriesScreen}  />
      </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


