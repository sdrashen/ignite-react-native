import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2f292b",
    padding: 24
  },
  eventName: {
    color: '#faa443',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#faa443',
    fontSize: 18
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fdfcf3',
    padding: 16,
    fontSize: 22,
    marginRight: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#11aa1a',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 36,
    marginBottom: 36
  },
  emptyListText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
})

