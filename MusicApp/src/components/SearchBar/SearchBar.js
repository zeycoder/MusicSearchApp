import React from "react";
import { TextInput, View } from "react-native";
import styles from "./SearchBar.style";

const SearcBar = (props) =>{
    
    return(
        <View style={styles.container}>
            <TextInput placeholder="Arama..." onChangeText={props.onSearch} />
        </View>
    )
}
export default SearcBar;