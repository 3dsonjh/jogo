import { StyleSheet, View } from "react-native"

export default function App()
{
  return (
    <View style={css.tela}>
      <View style={css.tabuleiro}>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
        <View style={css.casa}></View>
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
    borderWidth: 1
  }
});