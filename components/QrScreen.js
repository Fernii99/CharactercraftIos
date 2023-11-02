import React, {useState} from "react";
import QRCode from "react-qr-code";
import { View, Text } from "react-native";
import { getUserData } from "../helpers/asyncStorageUser";

export default function QRCodeScreen(){

    const [qrVisible, setQrVisible] = useState(false);
    const [qrValue, setQrValue] = useState([]);


    async function setQrValuef(){

        const data = await getUserData();
        if(data.email != null){
            setQrValue(data.email);
            setQrVisible(true);
        }
    }
    setQrValuef();
    
    if(qrVisible){
        return(
            <View>
                <QRCode value={qrValue}/>
            </View>
        )
    }
    return(
        <View> 
            <Text>Qr could not load</Text>
        </View>
    )
}