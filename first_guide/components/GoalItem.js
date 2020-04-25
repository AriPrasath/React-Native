import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.result}>
      <Text>{props.title}</Text>
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        {/* <Text style={styles.box}>DEL</Text> */}
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 25,
    height: 25,
  },

  box: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },

  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 10,
    padding: 10,
    fontSize: 20,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
  },
});

export default GoalItem;
