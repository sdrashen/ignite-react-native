import { Text, View, StyleSheet } from 'react-native'

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f292b",
    padding: 24
  },
  eventName: {
    color: '#f783aa',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#f783aa',
    fontSize: 18
  }
})


