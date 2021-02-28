import React,{useState} from 'react';
import {Left,Icon ,Label , Container, ListItem , Content, Form, Item, Input, Picker,Button } from 'native-base';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import firebase from './firebase';

export default function SignUp({navigation}) {
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [Name,setName]=useState('');
    const [Phone,setPhone]=useState('');
    const [Address,setAddress]=useState('');
    const [Age,setAge]=useState('');
    const [Gender,setGender]=useState('');
    const [UniName,setUniName]=useState('');
    const [ProgramName,setProgramName]=useState('');
    const [UniYear,setUniYear]=useState('');
    const [UniId,setUniId]=useState('');
    const [Purpose,setPurpose]=useState('Admin');
    const [showpasswordA,setShowPasswordA]=useState('Show Password');
    const [show,setShow]=useState(true);
    const [hidepassword,setHidePassword]=useState('Hide Password');
  
signupFun=()=>{
  emailsWwithRoles={
    role:Purpose
  }
  var obj={
    name :Name,
    phone:Phone,
    address:Address,
    email:Email,
    age:Age,
    purpose:Purpose,
    gender:Gender,
    uniname:UniName,
    programname:ProgramName,
    uniyear:UniYear,
    uniid:UniId,
}
  firebase.database().ref(`/emails/${Name}/${Password}`).push(emailsWwithRoles);
  if(Purpose=='Student')
  {
  firebase.database().ref(`/roles/${Purpose}/${UniName}`).push(obj);
  firebase.database().ref(`/roles/${Purpose}/UniName`).push({uname:UniName});
  }
  else 
  {
    firebase.database().ref(`/roles/${Purpose}`).push(obj);
  }
  firebase.auth().createUserWithEmailAndPassword(Email, Password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    navigation.navigate('Login')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
const img={uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KX3CRO-idb34mKb7hKKBpW6LJyL7SfXKAg&usqp=CAU'}
return (
<ImageBackground source={img} style={styles.image}>
  <Content>
        <Form>
 {/* Purpose */}

 <Item picker
 style={styles.picker}
 >
     <Picker
         mode="dropdown"
         iosIcon={<Icon name="arrow-down" />}
         style={{ width: undefined }}
         placeholder="Select Your Purpose"
         selectedValue={Purpose}
         onValueChange={text => setPurpose(text)}
     >
         <Picker.Item label="Admin" value="Admin" />
         <Picker.Item label="Student" value="Student" />
         <Picker.Item label="Company" value="Company" />
     </Picker>
 </Item>
 <Item floatingLabel
            style={styles.input}
            >
                        <Label>{Purpose} Name</Label>
                        <Input 
                        value={Name}
                        onChangeText={text => setName(text)}
                        />
                    </Item>
              {/* for students */}
{Purpose=="Student"?
(       <View>
                      <Item floatingLabel
            style={styles.input}
            >
                        <Label>Age</Label>
                        <Input  
                        value={Age}
                        onChangeText={text => setAge(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Phone No.</Label>
                        <Input  
                        value={Phone}
                        onChangeText={text => setPhone(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Address</Label>
                        <Input  
                        value={Address}
                        onChangeText={text => setAddress(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Uni Name</Label>
                        <Input  
                        value={UniName}
                        onChangeText={text => setUniName(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Uni Year</Label>
                        <Input  
                        value={UniYear}
                        onChangeText={text => setUniYear(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Program Name</Label>
                        <Input  
                        value={ProgramName}
                        onChangeText={text => setProgramName(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Uni Id</Label>
                        <Input  
                        value={UniId}
                        onChangeText={text => setUniId(text)}
                        />
                    </Item>    
                    {/* Gender */}

                    <Item picker
                    style={styles.picker}
                    >
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Your Gender"
                            selectedValue={Gender}
                            onValueChange={ text => setGender(text) }
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </Item>
</View>)
:(null)
}
{/* end of student parrt */}
 <Item floatingLabel
            style={styles.input}
            >
                        <Label>Email</Label>
                        <Input 
                        onChangeText={text => setEmail(text)}
                        />
                    </Item>
                    <Item floatingLabel
            style={styles.input}
            >
                        <Label>Password</Label>
                        <Input 
                         value={Password}
                         onChangeText={text => setPassword(text)}
                         secureTextEntry={show}/>
                    </Item>
       <ListItem
            style={styles.input}
            >
            <Left>
            <Text 
            onPress={()=>setShow(!show)}
            >
{show ? showpasswordA : hidepassword}
            </Text>
            </Left>
        </ListItem>
        <Button block success onPress={()=>{signupFun()}}>
            <Text>Submit</Text>
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
   picker:{
    marginTop:10,
},
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
input:{
    width:500,
    marginLeft:5
}
});
