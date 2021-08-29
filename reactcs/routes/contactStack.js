import { createStackNavigator } from 'react-navigation-stack';
import Contact from '../screens/contactus';
import Header from '../shared/header';
import React from 'react';


const screens = {
  Contact: {
    screen: Contact,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Contact us' navigation={navigation} />
      }
    },
  },
}

const ContactStack = createStackNavigator(screens);

export default ContactStack;