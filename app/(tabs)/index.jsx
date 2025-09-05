import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from "react-native";

const PlaceHolderImage = require('@/assets/images/background-image.png')

export default function homeScreen () {

    const [selectImage, setSelectImage] = useState(undefined)

    const pickImageAsync =  async function() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowEditing: true,
            quality: 1,
        })
        if(result.canceled == false) {
            console.log(result)
            setSelectImage(result.assets[0].uri)
        }else {
            alert("Você não selecionou uma foto")
        }
    }
    return (
        <View style= {styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={selectImage ? {uri: selectImage}: PlaceHolderImage}/>
            </View>
                <View style={styles.footerContainer}>
                <Button label={'Escolher foto'} theme={'primary'} onPress={pickImageAsync}/>
                <Button label={'Usar esta foto'}/>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    },

    imageContainer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1/3,
    },
 
})