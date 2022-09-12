import { StyleSheet,Dimensions } from "react-native";

const style =StyleSheet.create({
    carContainer:{
        width:'100%',
        height: Dimensions.get("screen").height,
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
      title:{
        fontSize:40,
        fontWeight:'500'
    
      },
      subtitle:{
        fontSize:16,
        color:'#5c5e62'
      },
      image:{
        height:'100%',
        width:'100%',
        position:'absolute',
        resizeMode:'cover',
    
      },
      buttonContainer:{
          position :"absolute",
          bottom:50,
          width:'100%',
      }
});
export default style;