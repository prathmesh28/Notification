import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import OneSignal from 'react-native-onesignal';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

class App extends React.Component{
  async componentDidMount() {
          //OneSignal Init Code
      OneSignal.setLogLevel(6, 0);
      OneSignal.setAppId("fbb03985-ee1c-40fa-9a08-83ef34bb3e5b");
      //END OneSignal Init Code

      //Prompt for push on iOS
      OneSignal.promptForPushNotificationsWithUserResponse(response => {
        console.log("Prompt response:", response);
      });

      //Method for handling notifications received while app in foreground
      OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
        console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
        let notification = notificationReceivedEvent.getNotification();
        console.log("notification: ", notification);
        const data = notification.additionalData
        console.log("additionalData: ", data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      });

      //Method for handling notifications opened
      OneSignal.setNotificationOpenedHandler(notification => {
        console.log("OneSignal: notification opened:", notification);
      });
  }
  render(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="One"
          component={PageOne}
          options={{ title: 'One' }}
        />
        <Stack.Screen name="Two" component={PageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  }
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
