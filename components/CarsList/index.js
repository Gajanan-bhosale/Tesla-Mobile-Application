import React from 'react';
import {View,Text,FlatList, Dimensions}from 'react-native';
import NativeAsyncSQLiteDBStorage from 'react-native/Libraries/Storage/NativeAsyncSQLiteDBStorage';
// import style from './style';
import CarItem from "../CarItem";
import cars from './cars';
import styles from './style';
//import style from './style'

const CarsList=(props) => {
    return(
        <View style ={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'normal'}
            snapToInterval={Dimensions.get('screen').height}
            />
            <View></View>
            {/* <View>
                <TextInput placeHolder="Enter your name"
                style={styles.intertext}/>
                
            </View> */}
            
            {/* <ScrollView snapToInterval={width}
            decelerationRate="fast" horizontal>
                {NativeAsyncSQLiteDBStorage.map((source) =>{
                    <View kwey={source} style={styles.picture}>
                        <Imgae style={styles.image}{...{source}}/>
                    </View>
                })}
            </ScrollView> */}
        </View>
    )
}
export default CarsList;