import { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function Casa(props){

    const[jogador,setJogador] = useState(null);

    function jogada(){
        setJogador(props.turno);
        const prox = (props.turno==1)?2:1;
        props.alternar(prox);

        let novo=props.tabuleiro;
        novo[props.posicao] = props.turno;

        props.gravar(novo);
    }

    let icone=null;
    if(jogador==1){
        icone=<Icon name="cross" size={95} />;
    }
    else if (jogador==2){
        icone=<Icon name="circle" size={60} />;
    }

    return(
        <TouchableWithoutFeedback onPress={jogada}>
            <View style={css.casa}>
                {icone}
            </View>
        </TouchableWithoutFeedback>
    )
}

const css = StyleSheet.create({
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