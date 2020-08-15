import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADC48',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 30,
    fontFamily: 'Archivo_700Bold',
    color: '#52473A',
    fontSize: 42,
  },

  description: {
    textAlign: 'center',
    marginTop: 24,
    color: '#52473A',
    fontSize: 16,
    lineHeight: 36,
    fontFamily: 'Poppins_400Regular',
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#7F25D9',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },

});

export default styles;