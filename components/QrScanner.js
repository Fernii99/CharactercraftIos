import { Camera, useCameraDevice, useCodeScanner, useCameraPermission} from 'react-native-vision-camera';
import {  View , StyleSheet  } from 'react-native';


export default function QrScanner(){

  const { hasPermission, requestPermission } = useCameraPermission();
  requestPermission();

  const device = useCameraDevice('back')
  const codeScanner = useCodeScanner({
  codeTypes: ['qr', 'ean-13'],
  onCodeScanned: (code) => {
    console.log(code[0].value)
  }
})

 if (device == null) {

  return <View />
 } 
 return (
   <Camera
    style={StyleSheet.absoluteFill}
     device={device}
     isActive={true}
     codeScanner={codeScanner}
   />
 )
}