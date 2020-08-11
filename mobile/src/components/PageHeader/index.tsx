import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps{
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, description}) => {

  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton 
          style={{
             width: 50, 
             height: 50, 
             alignItems: 'center', 
             justifyContent: 'center',
             position: 'absolute',
             left: -20,
             top: -19,
          }} 
          onPress={handleGoBack}
        >
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image style={{ position: 'absolute', right: 0, top: 2 }} source={logoImg} resizeMode="contain"/>
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {children}
    </View>
  );
}

export default PageHeader;