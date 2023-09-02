import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./MusicCard.style";

const MusicCard = ({ music }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: music.imageUrl }} />
            <View style={styles.innerContainer}>
            <Text style={styles.title}>{music.title}</Text>
                
                <View style={styles.info_container}>
                    
                    <View style={styles.artistAndYear}>
                        <Text style={styles.artist}>{music.artist} </Text>
                        <Text style={styles.year}>{music.year} </Text>
                    </View>
                    {music.isSoldOut
                        && (<View style={styles.stock}><Text style={styles.stockText}>Tükendi </Text></View>)
                    }
                </View>
            </View>
        </View>
    )
}

export default MusicCard;