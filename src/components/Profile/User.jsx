import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
} from "react-native";

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
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.roundImage}
                        source={require('../../../assets/images/potato_emoji.png')}
                    />
                </View>
                <View style={styles.usernameContainer}>
                    <Text style={isDarkMode ? darkStyles.onBackgroundBoldBigText : lightStyles.onBackgroundBoldBigText}>@{username}</Text>
                </View>
            </View>
        </View>
    );
};

export default User;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    imageContainer: {
        marginRight: 20,
    },
    roundImage: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    usernameContainer: {
        flex: 1,
    },
});
