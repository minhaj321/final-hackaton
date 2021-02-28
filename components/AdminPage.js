import React from 'react';
import {Container,Button } from 'native-base';
import { StyleSheet, Text,ImageBackground} from 'react-native';
import firebase from './firebase';


export default function AdminPage({navigation}) {
  const img={uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KX3CRO-idb34mKb7hKKBpW6LJyL7SfXKAg&usqp=CAU'}
  return (
<ImageBackground source={img} style={styles.image}>
         <Button  style={styles.jobBtn} bordered success
         onPress={()=>navigation.navigate('JobList')}
         >
            <Text style={styles.text}>Check Jobs</Text>
          </Button>
          <Button style={styles.uniBtn}  bordered
          onPress={()=>navigation.navigate('UniList',{val:'Admin'})}
         >
            <Text style={styles.text}>Universities List</Text>
          </Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:18,
    marginLeft:50,

    
  },
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  jobBtn:{
    width:250,
    height:100,
    alignSelf:'center',
    marginTop:-150,
    
  },
  uniBtn:{
    width:250,
    height:100,
    alignSelf:'center',
    marginTop:80,
  }
});