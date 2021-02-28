import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './components/login';
import CompanyPage from './components/companypage';
import SignUp from './components/signup';
import UniList from './components/UniList';
import JobPost from './components/JobPost';
import UniStudents from './components/UniStudents';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import AdminPage from './components/AdminPage';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="JobPost" component={JobPost} />
        <Stack.Screen name="JobForm" component={JobForm} />
        <Stack.Screen name="UniList" component={UniList} />
        <Stack.Screen name="UniStudents" component={UniStudents} />
        <Stack.Screen name="JobList" component={JobList} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AdminPage" component={AdminPage} />
        <Stack.Screen name="CompanyPage" component={CompanyPage} />

      </Stack.Navigator>

    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
