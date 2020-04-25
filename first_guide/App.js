/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  // StatusBar,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';

import GoalInput from './components/GoalInput';
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [conList, setConList] = useState([]);

  const storeValue = message => {
    // eslint-disable-next-line no-shadow
    setConList(conList => [
      ...conList,
      {id: Math.random().toString(), value: message},
    ]);
  };

  const DeleteValue = goalid => {
    setConList(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalid);
    });
  };

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>LIST MANAGER</Text>
      </View>
      <GoalInput onAddGoal={storeValue} />
      <View style={styles.final}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={conList}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={DeleteValue}
              title={itemData.item.value}
            />
          )}
        />
        <Text style={styles.res}>Thank You</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50,
    backgroundColor: '#d3eff0',
  },

  title: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 30,
  },

  res: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 30,
    marginTop: 40,
  },

  final: {
    marginTop: 20,
    padding: 20,
  },
});
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
