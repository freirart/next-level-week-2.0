import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#FADC48',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 220,
    marginTop: 40,
  },

  description: {
    marginTop: 20,
    fontFamily: 'Archivo_400Regular',
    color: '#52473A',
    opacity: 0.7,
    fontSize: 15,
    lineHeight: 26,
    maxWidth: 240,
  }

  
});

export default styles;