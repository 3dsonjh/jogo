import { View, StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/Entypo"
import Casa from "./Casa";
import { useState } from "react";

export default function App()
{

    const inicial = [0,0,0,0,0,0,0,0,0];

    const [jogador, setJogador] = useState(1);
    const [tabuleiro, setTabuleiro] = useState(inicial);

    return (
        <View style={css.tela}>
            <View style={css.tabuleiro}>
                <Casa 
                    posicao={0}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                <Casa 
                    posicao={1}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                <Casa 
                    posicao={2}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                
                <Casa 
                    posicao={3}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                <Casa 
                    posicao={4}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                <Casa 
                    posicao={5}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                
                <Casa 
                    posicao={6}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                <Casa 
                    posicao={7}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />
                <Casa 
                    posicao={8}
                    tabuleiro={tabuleiro}
                    gravar={setTabuleiro}
                    turno={jogador} 
                    alternar={setJogador} />

            </View>

            <Text>Agora é a vez do jogador {jogador} </Text>
            <Text>{tabuleiro}</Text>

        </View>
    )
}

const css = StyleSheet.create({
    tela: {
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }, 
    tabuleiro: {
        width: 300,
        height: 300,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    casa: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        

    }
});