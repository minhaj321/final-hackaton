import React ,{useState , useEffect} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import firebase from './firebase'
import { Container, Label ,ListItem,Left,Right , Header, Content, Form, Item, Input ,Button ,Radio} from 'native-base';


export default function LogIn({navigation}) {
  const [name,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showpassword,setShowPassword]=useState('Show Password');
  const [show,setShow]=useState(true);
  const [hidepassword,setHidePassword]=useState('Hide Password');
  const [Role,setRole]=useState('');
  signupFun=()=>{
    navigation.navigate('SignUp');
  }
  
  loginFun=()=>{
 // sir i am suffering from low quality laptop with a lot of lacking which cause an error of timer setting long period of time but there is  
 // no error of anything thats why i have commented it. 
 
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    // Signed in
          console.log('before fun call')

    firebase.database().ref(`/emails/${name}/${password}`).on('child_added',function(data){
      console.log(data.val().role)
setRole(data.val().role)
if(data.val().role=='Student'){
  navigation.navigate('JobList');
}
else if(data.val().role=='Admin'){
  navigation.navigate('AdminPage');
}
else{
  navigation.navigate('CompanyPage');
}

})
    // ...
  // })
  }

  const img={uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KX3CRO-idb34mKb7hKKBpW6LJyL7SfXKAg&usqp=CAU'}
  return (
  <ImageBackground source={img} style={styles.image}>
  
        <Content>
        <Form>
            <Item floatingLabel
            style={styles.input}
            >
            <Label>Name</Label>
              <Input 
              value={name}
              onChangeText={text=>setEmail(text)}
              />
            </Item>
            <Item last floatingLabel
            style={styles.input}
            >
            <Label>Password</Label>
              <Input 
             value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={show}
              />
            </Item>
            <ListItem
            style={styles.input}
            >
            <Left>
            <Text 
            onPress={()=>setShow(!show)}
            >
{show ? showpassword : hidepassword}
            </Text>
            </Left>
        </ListItem>
          </Form>
          <Button block info
            onPress={()=>loginFun()}>
            <Text>login</Text>
          </Button>
          <Text
          style={styles.create_account}
          >
            Or Create an account.   
            </Text>
            <Button block success
            onPress={()=>signupFun()}>
              <Text>
              SignUp
              </Text>            
            </Button>
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
  input:{
    marginLeft:0,
    width:350,

  },
    image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  create_account:{
    width:350,
    marginTop:10,
    marginBottom:10,
    textAlign:'center',
  }
});
