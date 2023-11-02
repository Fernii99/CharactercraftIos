import React, {useState} from "react";
import styled from "styled-components/native";
import { FlatList , Item,TouchableOpacity, Button, Modal} from "react-native";

const Container = styled.View`
    flex: 1;
    height: 100%;
    background-color: #1d1a39;
`
const Header = styled.View`
    flex-direction: row;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: purple;
`

const Body = styled.View`
    flex-direction: row;
    height: 660px;
    align-items: center;
    justify-content: left;
    // margin-left: 10px;
    padding: 15px;
`
const SecondTitle = styled.Text`
    margin-bottom: 10px;
    font-size: 25px;
    color: black;
    font-weight: bold;
`

const Title = styled.Text`
    font-size: 25px;
    color: #E8bcb9;
`

const Text = styled.Text`
    color: black;
    font-size: 10px;
    margin-bottom: 5px;
    margin-left:5px;
`

const View = styled.View`
    margin-top:30px;
    margin-left:15px;
`
const Ingredients = styled.View`
    background-color: lightblue;
    margin-bottom: 28px;
    margin-top: 5px;
    height: 100px;
    width: 99%;
    flex-direction:row;
`

const Ingredient = styled.View`
    // background-color: grey;
    margin-top: 0px;
    height: 100px;
    width: 50%;
    border-width: 2px;
    border-color: black;
`

const Potion = styled.View`
    // background-color: orange;
    height:200px;
    width: 99%;
`

const PotionBackgroundEpicImage = styled.ImageBackground`
  margin-left: -15px;
  margin-top: -15px;
  width: 105%;
  height: 103%;
`
// 660px
const ingredients = {
	"Hierba de Dragón": {
    	"effects": ["Increase_Strength", "Fortify_Endurance", "Restore_Health", "Increase_Speed"]
	},
	"Raíz de Fénix": {
    	"effects": ["Restore_Health", "Regenerate_Energy", "Increase_Charisma", "Fortify_Luck"]
	},
	"Escama de Wyvern": {
    	"effects": ["Increase_Intelligence", "Fortify_Magic", "Restore_Stamina", "Regenerate_Stamina"]
	},
	"Flor Lunar": {
    	"effects": ["Restore_Stamina", "Increase_Agility", "Regenerate_Health", "Increase_Magic"]
	},
	"Ojo de Basilisco": {
    	"effects": ["Regenerate_Health", "Increase_Speed", "Restore_Magic", "Fortify_Endurance"]
	},
	"Pluma de Grifo": {
    	"effects": ["Restore_Magic", "Fortify_Luck", "Restore_Health", "Regenerate_Energy"]
	},
	"Sangre de Unicornio": {
    	"effects": ["Regenerate_Stamina", "Increase_Charisma", "Fortify_Magic", "Increase_Intelligence"]
	},
	"Hoja de Élfico": {
    	"effects": ["Restore_Endurance", "Fortify_Agility", "Increase_Strength", "Increase_Charisma"]
	},
	"Esencia de Espíritu": {
    	"effects": ["Regenerate_Magic", "Fortify_Intelligence", "Restore_Stamina", "Increase_Luck"]
	},
	"Rocío de Aurora": {
    	"effects": ["Restore_Endurance", "Increase_Luck", "Regenerate_Health", "Fortify_Agility"]
	}
}

export default function CreatePotion(){

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const ingredientNames = Object.keys(ingredients);
  
    const toggleIngredientSelection = (ingredient) => {
        if (selectedIngredients.includes(ingredient)) {
          setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
        } else if (selectedIngredients.length < 2) {
          setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    };
    
    let ingredient1Name = selectedIngredients[0];
    let ingredient1Effects = [];

    if (ingredient1Name) {

        ingredient1Effects = ingredients[ingredient1Name].effects.map((element) => "-" + element);
    }

    let ingredient2Name = selectedIngredients[1];
    let ingredient2Effects = [];
    let combinedArray = [];
    let combinedEffectsArray = [];

    if (ingredient2Name) {

        ingredient2Effects = ingredients[ingredient2Name].effects.map((element) => "-" + element);
        combinedArray = ingredient1Effects.concat(ingredient2Effects);
        // console.log(combinedArray);
        combinedEffectsArray = [...ingredient1Effects, ...ingredient2Effects];
        // const combinedString = combinedArray.join("");

    }
    let canCreatePotion = selectedIngredients.length === 2;

    const [modalVisible, setModalVisible] = useState(false);

    const handleCreatePotion = () => {
        setModalVisible(true);
    }

    return(
        <Container>
            <Header>
                <Title> Alchemy Laboratory </Title>
            </Header>
            <Body style={{backgroundImage: `url("https://via.placeholder.com/500")`}} >
           <PotionBackgroundEpicImage source={require('../assets/potion_background.jpeg')} resizeMode="cover" >
                <View>
                    <SecondTitle style={{color: 'white'}}>Lista de Ingredientes:</SecondTitle>
                    <FlatList
                        data={ingredientNames}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => toggleIngredientSelection(item)}
                            style={{
                            backgroundColor: selectedIngredients.includes(item) ? "lightblue" : "white",
                            }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                        )}
                    />
                    <Ingredients>
                    <Ingredient>
                            <Text>{ingredient1Name} (Ingrediente 1)</Text>
                        <FlatList
                            data={ingredient1Effects}
                            keyExtractor={(item) => item}
                            renderItem={({item}) => (
                            <Text>{item}</Text>
                            )}
                        />
                    </Ingredient>
                    <Ingredient>
                    <Text>{ingredient2Name} (Ingrediente 2)</Text>
                        <FlatList
                            data={ingredient2Effects}
                            keyExtractor={(item) => item}
                            renderItem={({item}) => (
                            <Text>{item}</Text>
                            )}
                        />
                    </Ingredient>
                    </Ingredients>
                    {canCreatePotion && (
                        <Button title="Crear Poción" onPress={handleCreatePotion} />
                    )}
          <Potion></Potion>
                <Modal
                visible={modalVisible}
                >
                <PotionBackgroundEpicImage source={require('../assets/potion_background.jpeg')} resizeMode="cover" >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '50%'}}>
                    <SecondTitle style={{color: 'white'}}>Nombre de la poción:</SecondTitle>
                    <Text style={{color: 'white'}}>{combinedArray}</Text>
                    <SecondTitle style={{color: 'white'}}>Efectos</SecondTitle>
                    <FlatList 
                            data={combinedEffectsArray}
                            keyExtractor={(item) => item}
                            renderItem={({item}) => (
                            <Text  style={{color: 'white'}}>{item}</Text>
                            )}
                        />
                    <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                </View>
                </PotionBackgroundEpicImage>
                </Modal>
                </View>
                </PotionBackgroundEpicImage>
            </Body>
        </Container> 
    )


}