import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Modal } from 'react-native';
import { useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import tokenAuth from '../../helpers/tokenAuth';
import { storeUserData, getUserData } from '../../helpers/asyncStorageUser';


const Container = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const HalfScreenContainer = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`

const LoginContainer = styled.TouchableOpacity`
  height: 60px;
  width: 85%;
  background: #f2f2f2;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const GoogleIcon = styled.Image`
  width: 35px;
  height: 35px;
  margin-left: -20px;
`

const LoginText = styled.Text`
  font-size: 18px;
  color: #515151;
  font-weight: 500;
`

const LogoText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: white;
`

const BackgroundEpicImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

const SpinnerContainer = styled.View`
  width: 130px;
  height: 130px;
  background-color: white;
  border-radius: 30px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const SpinnerText = styled.Text`
  font-size: 16px;
  color: #515151;
  font-weight: 500;
`


export default function Login({modalVisible, setModalVisible}) {

  const [spinnerVisible, setSpinnerVisible] = useState(false);

  return (

    <>
      <BackgroundEpicImage source={require('../../assets/epicLoginBackground.jpg')} resizeMode="cover" >
        <Container>

          <HalfScreenContainer>
          <LogoText>Character Craft</LogoText>
          </HalfScreenContainer>

          <BottomHalfScreen isSpinnerVisible={spinnerVisible} setSpinnerVisibleFunction={setSpinnerVisible}
                            modalVisible={modalVisible} setModalVisible={setModalVisible}
          />
         
        </Container>
      </BackgroundEpicImage>
    </>
    
  )  
}

function BottomHalfScreen({isSpinnerVisible, setSpinnerVisibleFunction, modalVisible, setModalVisible}){

  GoogleSignin.configure({
    webClientId: '462528477646-rpjlttrvq98ef6eqi7t5g8stvpt23nlr.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
  
    try{
   // Check if your device supports Google Play
   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
   console.log("PLAY SERVICES CHECKED")
   // Get the users ID token
   const { idToken } = await GoogleSignin.signIn();
  
   console.log(`**************************************************************************`)
   console.log(`ID TOKEN`)
  console.log(`--------`)
   console.log(idToken)
  
   // Create a Google credential with the token
   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  
  console.log(`**************************************************************************`)
  
  console.log(`GOOGLECREDENTIAL`)
  console.log(`----------------`)
  
   console.log(googleCredential);
  
   console.log(`**************************************************************************`)
  
   // Sign-in the user with the credential
   const signInWithCredential = await auth().signInWithCredential(googleCredential);
  
   console.log("SIGNINWITHCREDENTIAL")
   console.log(signInWithCredential);
  
   const idTokenResult = await auth().currentUser.getIdTokenResult();
   console.log('Get the token from the current User')
   console.log(idTokenResult.token);
   const userData = await tokenAuth(idTokenResult.token);
  
    await storeUserData(userData);  

      const data = await getUserData();

      console.log("DATOS DE USER DESPUES DE getUserData")
      console.log(data)

      setModal(data);
  
    }catch(e){
      console.error(e)
    }
  }

  async function setModal(data){

    if(data != null){
      setModalVisible(false);
      console.log("FUNCIÓN setModalVisible. Valor de modalVisible")
      console.log(modalVisible);
    }
  }

  if(isSpinnerVisible){

    return(
      <HalfScreenContainer>
        <SpinnerContainer>
          <ActivityIndicator size="large" color="#8e54c8" />
          <SpinnerText>Loading...</SpinnerText>
      </SpinnerContainer>
    </HalfScreenContainer>
    )
  }else{
    return(
      <HalfScreenContainer>
        <LoginContainer       onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
          <GoogleIcon source={require('../../assets/epicGoogleIcon.png')} />
          <LoginText>Continue with Google</LoginText>
        </LoginContainer>
      </HalfScreenContainer>
    )
  }
}