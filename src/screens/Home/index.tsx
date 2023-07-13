import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Dev } from '../../components/Dev'

import { styles } from './style'

export function Home() {

  function handleAddDev() {
    console.log('Welcome!')
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

      <Dev />
      <Dev />

    </View>
  )
}