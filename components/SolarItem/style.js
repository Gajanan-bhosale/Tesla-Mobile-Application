import { StyleSheet,Dimensions } from "react-native";

const style =StyleSheet.create({
    solarContainer:{
        width:'100%',
        height: Dimensions.get("screen").height,
      },
      title1:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
      title2:{
        fontSize:40,
        fontWeight:'500'
    
      },
      subtitle1:{
        fontSize:16,
        color:'#5c5e62'
      },
      image:{
        height:'100%',
        width:'100%',
        position:'absolute',
        resizeMode:'cover',
    
      },
      buttonContainer1:{
          position :"absolute",
          bottom:50,
          width:'100%',
      }
});
export default style;