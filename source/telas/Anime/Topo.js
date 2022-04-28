import React from "react";

import { Text, Image, StyleSheet } from "react-native";

import topo from '../../../assets/animes/topo.jpg';

export default function topo(){
    return <>
        <Image style={styles.topo} source={topo} />
        <Text style={styles.tituloAnimes}>Animes Favoritos</Text>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%", 
        height: 582/772 * width,    
      },
      tituloAnimes: {
        position: "absolute",
        paddingVertical: 60,
        textAlign: "center",
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 40,
        height: 20,
        paddingBottom: 30,
        paddingTop: 5,
        color: "#fff",
        backgroundColor: "#000"
      },
})