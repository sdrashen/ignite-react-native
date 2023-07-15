import React from 'react'
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native'
import { Dev } from '../../components/Dev'

import { styles } from './style'

export function Home() {

  const devs = ['Penny', 'Sheldon', 'Amy', 'Horward', 'Bernnie', 'Leonard', 'Stuart', 'Luke', 'Batman', 'Flash', 'Diana']

  function handleAddDev() {
    if (devs.includes("Penny")) {
      return Alert.alert("Dev exists", "This dev is already here.")
    }
  }

  function handleDevRemove(name: string) {
    Alert.alert("Remove", `Remove this dev: ${name}?`, [
      {
        text: 'Yes',
        onPress: () => Alert.alert("The dev was sent back to the lobby!")
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>

      <Text
        style={styles.eventDate}
      >For mobile development
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={styles.button} onPress={handleAddDev}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={devs}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Dev
            key={item}
            name={item}
            onRemove={() => handleDevRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>No devs yet. Try making some coffee to attract them!</Text>
        )}
      />
    </View>
  )
}