import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [editText, setEditText] = useState('');

  const setAssign = enteredText => {
    setEditText(enteredText);
  };

  return (
    <View style={styles.menu}>
      <TextInput
        style={styles.add}
        placeholder="Enter Message"
        onChangeText={setAssign}
        value={editText}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, editText)} />
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
    width: '80%',
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default GoalInput;
