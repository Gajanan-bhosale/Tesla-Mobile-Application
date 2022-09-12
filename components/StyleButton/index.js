import React from 'react';
import {View,Text,Pressable, backgroundColor} from 'react-native';
import style from './style';

const StyleButton=(props) =>{

    const type =props.type;
    const content = props.content;
    const onPress = props.onPress;

    // const {type, content ,onPress} = props;

    const backgroundColor = type ==='primary' ? '#171A20CC':'white';
    const textColor = type ==='primary' ? 'white' :'black';
    return(
        <View style={style.container}>
            <Pressable 
                style={[style.button ,{backgroundColor:backgroundColor}]}
                onPress={()=>onPress()}>
                    <Text style={[style.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};
export default StyleButton;