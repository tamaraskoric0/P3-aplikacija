import { StyleSheet, Dimensions } from "react-native";

const styles =StyleSheet.create({

    carContainer: {
        width: "100%",
        height: Dimensions.get("window").height,
    
      },
    
      titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
    
      },
    
      title: {
        fontSize: 40,
        fontWeight: "600",
    
      },

      taglineCTA: {
        textDecorationLine: "underline",

      },
    
      subtitle: {
        fontSize: 16,
        color: "black",
    
      },
    
      image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttonsContainer: {
        position: "absolute",
        bottom: 90,
        width: "100%"

      },

});

export default styles;