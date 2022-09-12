import React from 'react';
import {View, Text,ImageBackground} from 'react-native';
import style from './style';
import styles from './style';


const SolarItam=(props) =>{
    
    const {name, tagline, image} = props.car;

    return(
        <View style={styles.carContainer}>
            <ImageBackground source={image}
             style={styles.image}/>
            <View style={styles.titles1}>
             <Text style={styles.title2}>{name}</Text>
             <Text style={styles.subtitle1}>{tagline}</Text>
             
            </View>
            <View style={styles.buttonContainer}>
            <StyleButton type="primary" content={"custom order"} onPress={()=>{
                console.warn("custom order")
            }}/>

            <StyleButton type="secondary" content={"Existing Inventor"} onPress={()=>{
                console.warn("Existing Inventor")
            }}/>
            </View>

         </View>
       
    )
}
export default SolarItem;