import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';

const CreateRecipeButton = ({ onPress }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={ isDarkMode? darkStyles.roundButton : lightStyles.roundButton}>
        <Icon name="plus" size={25} color="black" alignItems='center' justifyContent='center'/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 16,
    marginRight: 16,
  },
});

export default CreateRecipeButton;
