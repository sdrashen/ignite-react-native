import { Text, TextInput, View } from 'react-native'
import { styles } from './style'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>

      <Text
        style={styles.eventDate}
      >For mobile development
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Nome da dev'
        placeholderTextColor='#6b6b6b'
      />

    </View>
  )
}