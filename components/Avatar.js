import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
`;

const ImageContainer = styled.View`
    align-items: center;
`

const ProfileImage = styled.Image`
    align-items: center;
    width: 125px;
    height: 125px;
    border-radius: 200px;
    border-color: white;
    border-width: 3px; 
    border-width: 3px; 
`;

const Text = styled.Text`
    margin-left: 5px;
    margin-top: 8px;
    color: black;
    font-size: 25px;
`

const General = styled.Text`
    margin-top: 10px;
    color: black;
    margin-left: 10px;
`

const Avatar = () => {
    return(
        <Container>
            <ImageContainer>
            <ProfileImage source={require('../assets/relajao.webp')} />
            <Text>Iker Mendoza</Text>
            </ImageContainer>
            <General>Generales:</General>
            <General>Atributos:</General>
            <General>Enfermedades:</General>
        </Container>
    )
}

export default Avatar;