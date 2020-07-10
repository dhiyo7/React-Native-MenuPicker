//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-community/picker';

// state = {
//   country: '',
// };
state = {
  language: 'java',
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Piliho Dewe</Text>

      <View
        style={{
          // The solution: Apply zIndex to any device except Android
          ...(Platform.OS !== 'android' && {
            zIndex: 10,
          }),
        }}>


        <DropDownPicker
          items={[
            {label: 'UKaUKa', value: 'ukauka'},
            {label: 'Gemblong', value: 'gemblong'},
            {label: 'Ya', value: 'ya'},
            {label: 'Kuwuk', value: 'kuwuk'},
            {label: 'Hyah', value: 'hyah'},
            {label: 'Qwerty', value: 'qwerty'},
          ]}
          placeholder="Gyan Pilih"
          containerStyle={{height: 40}}
          style={{backgroundColor: '#ffffff'}}
          dropDownStyle={{backgroundColor: 'white', marginTop:2, marginBottom:80}}
          searchable={true}
          searchablePlaceholder="Search for an item"
          searchablePlaceholderTextColor="gray"
          seachableStyle={{}}
          searchableError={() => <Text>Not Found</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
