import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import successBg from '../../assets/images/success-page.png'
import successIcon from '../../assets/images/icons/success-check-icon.png';

import styles from './styles';

function RegisterSuccess(){

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      
     <ImageBackground 
     resizeMode="contain" 
     source={successBg} 
     style={styles.content}
    >
      <Image source={successIcon} />
      <Text style={styles.title}>Cadastro Salvo!</Text>
      <Text style={styles.description}>
        Tudo certo, seu cadastro está na nossa lista de professores.
        Agora é só ficar de olho no seu WhatsApp.
      </Text>
     </ImageBackground>

     <RectButton 
      style={styles.okButton}
      onPress={() => navigate('Study')}
     >
       <Text style={styles.okButtonText}>Acessar lista</Text>
     </RectButton>

    </View>
  );
}

export default RegisterSuccess;