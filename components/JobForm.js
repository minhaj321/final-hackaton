import React,{useState} from 'react';
import {Textarea,Label , Container,Content, Form, Item, Input,Button } from 'native-base';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import firebase from './firebase';


export default function JobForm({navigation,data}) {
    const [Name,setName]=useState('');
    const [Qualifi,setQualifi]=useState('');
    const [Certi,setCerti]=useState('');
    const [Goals,setGoals]=useState('');
    const [WhyJoin,setWhyJoin]=useState('');
    const [Exper,setExper]=useState('');
    const [ComName,setComName]=useState('');
    const [Title,setTitle]=useState('');
    PostJob=()=>{
        obj={
            name:Name,
            qual:Qualifi,
            certi:Certi,
            goals:Goals,
            exper:Exper,
            whyjoin:WhyJoin
        }
        firebase.database().ref(`/jobsforms/${data.params.name}/${data.params.title}`).push(obj);
        navigation.navigate('JobList');
    }
    const img={uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KX3CRO-idb34mKb7hKKBpW6LJyL7SfXKAg&usqp=CAU'}
  return (
<ImageBackground source={img} style={styles.image}>

    <Content>
    <Form>
            <Item>
              <Label style={styles.comName}>Company Name:{data.params.name}</Label>
            </Item>
            <Item>
              <Label style={styles.jobTitle}>Job Title:{data.params.title}</Label>
            </Item>
    <Item floatingLabel>
              <Label>Your Name</Label>
              <Input 
              onChangeText={text=>setCompanyName(text)}/>
            </Item>
    <Item floatingLabel>
              <Label>Qualification</Label>
              <Input 
              onChangeText={text=>setJobTitle(text)}/>
            </Item>
             <Item floatingLabel>
              <Label>Extra Certifications</Label>
              <Input  
              onChangeText={text=>setJobType(text)}/>
            </Item>
            <Item floatingLabel>
              <Label>Experience</Label>
              <Input  
              onChangeText={text=>setJobReq(text)}/>
            </Item>
            <Item floatingLabel>
              <Label>Your Future Goals</Label>
              <Input  
              onChangeText={text=>setJobContact(text)}/>
            </Item>
            <Item>
             <Textarea rowSpan={6} bordered placeholder="Why to join our organization?"  
              onChangeText={text=>setJobDesc(text)}/>
            </Item>
            <Button rounded dark
            onPress={()=>{SubmitJobReq()}}>
            <Text>Post Job</Text>
          </Button>
    </Form>    
    </Content> 
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
  comName:{
    fontWeight:'bold',
    fontSize:22,
  },
  jobTitle:{
    fontWeight:'bold',
    fontSize:22,
    marginTop:10
  },
    image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
});
