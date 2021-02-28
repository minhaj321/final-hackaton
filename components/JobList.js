import React,{useState , useEffect} from 'react';
import {Card,CardItem, Button,Container, Content} from 'native-base';
import { StyleSheet, Text} from 'react-native';
import firebase from './firebase';

export default function JobList({navigation,data}) {
    const [JobList,setJobList]=useState([]);

        firebase.database().ref(`/job`).on('value',function(data){
            setJobList(JobList.push(data.val()))
        })
  

  return (
    <Container style={styles.container}>
<Content>
{
        JobList.map((v)=>{
            <Card>
            <CardItem header>
              <Text>{v.name}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.title}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.type}</Text>
            </CardItem>
            <CardItem>
              <Text>{v.req}</Text>
            </CardItem>
            <CardItem>
              <Text>{v.desc}</Text>
            </CardItem>
            <CardItem footer>
              <Text>{v.contact}</Text>
            </CardItem>
            <CardItem footer>
              <Text>{v.web}</Text>
            </CardItem>
            
            <CardItem footer>
                <Button
                onPress={()=>{navigation.navigate('JobForm',{val:v})}}
                >
              <Text>Apply for Job</Text>
                </Button>
            </CardItem>
         </Card>
        })
}
</Content>
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
