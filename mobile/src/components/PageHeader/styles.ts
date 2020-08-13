import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#FADC48',
  },

  topBar: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 29,
    maxWidth: 220,
    marginVertical: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  description: {
    marginTop: -20,
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#52473A',
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 24,
    maxWidth: 260,
  },
  
});

export default styles;