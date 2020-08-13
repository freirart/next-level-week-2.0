import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputBlock: {
    position: 'relative',
  },

  label: {
    marginTop: 5,
    color: '#9C98A6',
    fontFamily: 'Poppins_400Regular'
  },

  input: {
    height: 54,
    backgroundColor: '#F8F8FC',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputTime: {
    height: 54,
    backgroundColor: '#F8F8FC',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  textarea: {
    textAlignVertical: "top",
    height: 108,
    backgroundColor: '#F8F8FC',
    borderRadius: 8,
    padding: 16,
    marginTop: 4,
    marginBottom: 16,
  }
  
});

export default styles;