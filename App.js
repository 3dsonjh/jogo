import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Casa from "./Casa";

export default function App()
{

  let jogada=0;

  function clique(){
    console.log("entrou");
    if(jogada==0){
      jogada=1;
    }
  }

  return (
    <View style={css.tela}>
      <View style={css.tabuleiro}>
        <Casa />
        <Casa />
        <Casa />
        <Casa />
        <Casa />
        <Casa />
        <Casa />
        <Casa />
        <Casa />
      </View>
    </View>
  )
}
const css = StyleSheet.create({
  tela : {  
    borderColor: "red",
    borderWidth: 15,
    borderStyle: "solid",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tabuleiro : {
    width: 300,
    height: 300,
    backgroundColor: "gray",
    flexWrap: "wrap"
  },
  casa : {
    height: 100,
    width: 100,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});