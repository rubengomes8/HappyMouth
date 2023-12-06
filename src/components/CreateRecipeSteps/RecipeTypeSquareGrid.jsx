import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from '../../styles/colors';

const RecipeTypeSquareGrid = ({ data, onSelectSquare }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    
    const [selectedSquare, setSelectedSquare] = useState(data.filter(rt => rt.chosen)[0].id);

    const handleSelect = (item) => {
        setSelectedSquare(item.id);
        onSelectSquare(item.id);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={
                isDarkMode ? 
                [darkStyles.recipeTypeTouchableSquare, { backgroundColor: selectedSquare === item.id ? darkThemeColors.primary : darkThemeColors.surface }] : 
                [lightStyles.recipeTypeTouchableSquare, { backgroundColor: selectedSquare === item.id ? lightThemeColors.primary : lightThemeColors.surface }]}
            onPress={() => handleSelect(item)}
        >
            <Text style={isDarkMode ? darkStyles.boldOnSurfaceBigText : lightStyles.boldOnSurfaceBigText}>{item.type.toUpperCase()}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            contentContainerStyle={{alignContent:"center", alignItems: "center"}}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.type.toString()}
            numColumns={2}
        />
    );
};

export default RecipeTypeSquareGrid;
