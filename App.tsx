import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList,Button } from "react-native";
import CategoryListItem from "./components/CategoryListItem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [
        { id: 1, name: 'Dụng cụ trượt tuyết' },
        { id: 2, name: 'Quần áo trượt tuyết' },
        { id: 3, name: 'Kính mũ' },
        { id: 4, name: 'Ván' },
        { id: 5, name: 'Gậy' },
        { id: 6, name: 'Giày' },
        { id: 7, name: 'Áo ấm' },
        { id: 8, name: 'Quần áo' },
        { id: 9, name: 'Tất' },
      ],
    };
  }

  render() {
    const {Categories} = this.state;
    return (
          <FlatList 
          data={Categories}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{paddingLeft:16,paddingRight:16}} 
          />
          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
