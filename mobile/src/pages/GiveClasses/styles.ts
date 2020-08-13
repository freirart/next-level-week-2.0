import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F3FE',
  },

  teacherList: {
    marginTop: -40,
  },

  content: {
    marginTop: -24,
    marginHorizontal: 20,
    padding: 35,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  subtitle:{
    height: 30,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6F0',
    marginBottom: 16,
  },

  subtitleText:{
    color: '#52473A',
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
  },

  label: {
    color: '#9C98A6',
    fontFamily:'Poppins_400Regular',
    marginBottom: -3,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  inputBlock: {
    width: '48%',
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

  btnBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1A34F',
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  btnAddContent: {
    fontSize: 30,
    color: '#FFF',
  },

  rmSchedule: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },

  rmScheduleLine: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#5C12A6',
    width: 90,
  },

  rmScheduleText: {
    marginHorizontal: 10,
    color: '#7F25D9',
    fontFamily: 'Archivo_700Bold',
    fontSize: 13,
    lineHeight: 20,
  },

  footer: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: -5,
    marginHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFC',
    borderTopWidth: 1,
    borderTopColor: '#E6E6F0',
    paddingHorizontal: 16,
    paddingVertical: 32,
    marginBottom: 20,
  },

  footerLeftSide: {
    flexDirection: 'row',
  },

  warningIcon: {
    marginRight: 15,
    height: 50,
    width: 40,
  },

  footerText: {
    fontFamily: 'Poppins_400Regular',
    maxWidth: 125,
    color: '#9C98A6',
  },
  
  submit: {
    width: 128,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 8,
    backgroundColor: '#7F25D9',
  },

  submitText: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
  }


});

export default styles;