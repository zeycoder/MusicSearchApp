import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import music_data from "./src/data/music-data.json"
import MusicCard from './src/components/MusicCard/MusicCard';
import SearcBar from './src/components/SearchBar/SearchBar';

export default function App() {
  const renderItem = ({ item }) => <MusicCard music={item} />
  const renderSeperator = <View style={styles.line} />

  const [music,setMusic] = useState(music_data)

  const handleSearch = text => {
    const filteredList = music_data.filter(item =>{
      const searcedText = text.toLowerCase();
      const currentText = item.title.toLowerCase();

      return currentText.indexOf(searcedText) > -1 ;
      
  })
  setMusic(filteredList)
  }
  
  return (
    <View style={styles.container}>
      <SearcBar onSearch={handleSearch} />
      <FlatList 
        keyExtractor={item=>item.id} 
        data={music} 
        renderItem={renderItem} 
        ItemSeparatorComponent={renderSeperator}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
