import { Text, View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color: '#e78ed6',
        fontSize: 24,
        fontWeight: 'bold'
      }}>
        React Native
      </Text>

      <Text
        style={{
          color: '#e78ed6',
          fontSize: 20
        }}
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
  }
})


