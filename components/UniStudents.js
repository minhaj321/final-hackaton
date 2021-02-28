import React,{useState , useEffect} from 'react';
import {Card,CardItem, Container, Content} from 'native-base';
import { StyleSheet, Text} from 'react-native';
import firebase from './firebase';

export default function UniStudents({navigation,dat}) {
    const [UniName,setUniName]=useState('');
    const [UniStu,setUniStu]=useState([]);

    useEffect=()=>{
        setUniName(dat.params.val);
        firebase.database().ref(`/roles/Student/${UniName}`).on('value',function(data){
            setUniStu(UniStu.push(data.val()))
        }),[]
}
function deleteThis(val){
    firebase.database().ref(`/roles/student/${UniName}`).child(val).remove();
    navigation.navigate('AdminPage');

}

  return (
    <Container style={styles.container}>
<Content>
{
        UniStu.map((v,i)=>{
            <Card>
            <CardItem header>
              <Text>{v.name}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.gender}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.uniname}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.programname}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.uniid}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.uniyear}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.email}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.age}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.address}</Text>
            </CardItem>
            <CardItem header>
              <Text>{v.phone}</Text>
            </CardItem>  
            { data.params.role=="Admin" &&
            <CardItem footer>
                <Button
                onPress={deleteThis(v)}
                >
                    <Text>Delete This record</Text>
                </Button>
            </CardItem>  
            }
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
