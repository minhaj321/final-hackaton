import React,{useState , useEffect} from 'react';
import {Container,Card,CardItem,Body} from 'native-base';
import { StyleSheet, Text} from 'react-native';
import firebase from './firebase';


export default function UniList({navigation,data}) {
    const [UniNames,setUniNames]=useState([]);
        firebase.database().ref('/Student/UniName').on('value',function(data){
            setUniNames(UniNames.push(data.val()));})
  return (
    <Container style={styles.container}>
        {UniNames &&
            UniNames.map((v)=>{
  <Card>
            <CardItem button onPress={() => navigation.navigate('UniStudents', { val: v.uname,role:data.params.val })}>
              <Body>
                <Text>
                {v.uname}
                </Text>
              </Body>
            </CardItem>
          </Card>
          })
}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
