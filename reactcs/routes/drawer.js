 import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
// import  createDrawerNavigator  from '@react-navigation/drawer';
// stacks
import HomeStack from '../routes/homestack';
import AboutStack from '../routes/aboutStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);



//Side bar name should be changed here.