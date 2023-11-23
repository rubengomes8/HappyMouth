import React from "react";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from "../../styles/colors.js";

const User = ({
    username,
}) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <View style={isDarkMode ? darkStyles.userCard : lightStyles.userCard}>
            <Text style={isDarkMode ? darkStyles.onBackgroundBoldBigText : lightStyles.onBackgroundBoldBigText}>@{username}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default User;
