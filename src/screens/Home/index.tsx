import { Text, View } from 'react-native'
import { styles } from './style'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        React Native
      </Text>

      <Text
        style={styles.eventDate}
      >For mobile development
      </Text>
    </View>
  )
}