import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6F0',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: '#52473A',
    fontFamily:'Poppins_400Regular',
    marginBottom: -3,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  inputBlock: {
    width: '48%',
  },

  input: {
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: '#7F25D9',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  default: {
    height: 120,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 30,
  },

  defaultText: {
    margin: 5,
    opacity: 0.7,
    maxWidth: 400,
    fontFamily:'Poppins_400Regular',
    color: '#52473A',
  },

  content: {
    marginTop: -24,
    marginHorizontal: 20,
    borderRadius: 8,
  },
});

export default styles;