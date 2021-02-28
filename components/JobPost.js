import React,{useState} from 'react';
import {Textarea,Label , Container,Content, Form, Item, Input,Button } from 'native-base';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import firebase from './firebase';


export default function JobPost({navigation}) {
    const [JobTitle,setJobTitle]=useState('');
    const [JobReq,setJobReq]=useState('');
    const [JobType,setJobType]=useState('');
    const [JobContact,setJobContact]=useState('');
    const [JobWeb,setJobWeb]=useState('');
    const [JobDesc,setJobDesc]=useState('');
    const [CompanyName,setCompanyName]=useState('');
    PostJob=()=>{
        obj={
            title:JobTitle,
            req:JobReq,
            type:JobType,
            contact:JobContact,
            web:JobWeb,
            desc:JobDesc,
            name:CompanyName
        }
        firebase.database().ref('/jobs').push(obj);
        navigation.navigate('CompanyPage');
    }
    const img={uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KX3CRO-idb34mKb7hKKBpW6LJyL7SfXKAg&usqp=CAU'}
    return (
  <ImageBackground source={img} style={styles.image}>
  
    <Content>
    <Form>
    <Item floatingLabel>
              <Label>Company Name</Label>
              <Input 
              onChangeText={text=>setCompanyName(text)}/>
            </Item>
    <Item floatingLabel>
              <Label>Job Title</Label>
              <Input 
              onChangeText={text=>setJobTitle(text)}/>
            </Item>
             <Item floatingLabel>
              <Label>Job Type</Label>
              <Input  
              onChangeText={text=>setJobType(text)}/>
            </Item>
            <Item floatingLabel>
              <Label>Job Requirements</Label>
              <Input  
              onChangeText={text=>setJobReq(text)}/>
            </Item>
            <Item floatingLabel>
              <Label>Contact Number</Label>
              <Input  
              onChangeText={text=>setJobContact(text)}/>
            </Item>
            <Item floatingLabel>
              <Label>Website Link if exist</Label>
              <Input  
              onChangeText={text=>setJobWeb(text)}/>
            </Item>
            <Item>
             <Textarea rowSpan={6} bordered placeholder="Job Description"  
              onChangeText={text=>setJobDesc(text)}/>
            </Item>
            <Button style={styles.post} dark
            onPress={()=>{PostJob()}}>
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
  post:{
    width:250,
    marginLeft:80,
    color:'white'
  },
    image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
});
