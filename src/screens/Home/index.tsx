import React from 'react'
import { Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { Dev } from '../../components/Dev'

import { styles } from './style'

export function Home() {

  const devs = ['Penny', 'Sheldon', 'Amy', 'Horward', 'Bernnie', 'Leonard', 'Stuart', 'Luke', 'Batman', 'Flash', 'Diana']

  function handleAddDev() {
    console.log('Welcome!')
  }

  function handleDevRemove(name: string) {
    console.log(`This dev was successfully removed: ${name}`)
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
          placeholder='Nome'
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={styles.button} onPress={handleAddDev}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {
          devs.map(devs => (
            <Dev
              key={devs}
              name={devs}
              onRemove={() => handleDevRemove("Penny")} />
          ))
        }
      </ScrollView>
    </View>
  )
}