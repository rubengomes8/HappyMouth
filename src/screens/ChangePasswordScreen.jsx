import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

import PasswordInput from "../components/PasswordInput.jsx";

// themes
import { useTheme } from '../contexts/ThemeContext';
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';
import { changePassword } from "../api/authApi.js";

const ChangePasswordScreen = ({ route }) => {
    
    const { username } = route.params;

    // NAVIGATION
    const navigation = useNavigation();

    const { isDarkMode, toggleTheme } = useTheme();
    const [newPassword, setNewPassword] = useState("");
    const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
    const [isNewPasswordConfirmationVisible, setNewPasswordConfirmationVisible] =
        useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [isOldPasswordVisible, setOldPasswordVisible] = useState(false);

    const passwordsMatch = () => {
        return newPassword == newPasswordConfirmation;
    };

    const isNewPasswordLargeEnough = () => {
        return newPassword.length >= 8;
    };

    const isOldPasswordLargeEnough = () => {
        return oldPassword.length >= 8;
    };

    const isFormValid = () => {
        return passwordsMatch() && isNewPasswordLargeEnough() && isOldPasswordLargeEnough();
    };

    async function handleChangePassword() {
        try {
            console.log("here username " + username);
            registerResponse = await changePassword(username, oldPassword, newPassword);
            if (registerResponse.status == 204) {
                navigation.navigate("Profile");
            }
        } catch (error) {
            console.log("here" + JSON.stringify(error));
            alert("Password change failed");
        }
    }


    return (
        <View style={isDarkMode ? darkStyles.changePasswordScreenView : lightStyles.changePasswordScreenView}>
            <View style={{ margin: 20, marginHorizontal: 35 }}>
                <Text style={isDarkMode ? darkStyles.onBackgroundMediumText : lightStyles.onBackgroundMediumText}>For security purposes the passwords need to have at least 8 characters.</Text>
            </View>
            <PasswordInput
                placeholder="Old password"
                password={oldPassword}
                setPassword={setOldPassword}
                isPasswordVisible={isOldPasswordVisible}
                setPasswordVisible={setOldPasswordVisible}
            />
            <PasswordInput
                placeholder="New password"
                password={newPassword}
                setPassword={setNewPassword}
                isPasswordVisible={isNewPasswordVisible}
                setPasswordVisible={setNewPasswordVisible}
            />
            <PasswordInput
                placeholder="Confirm new password"
                password={newPasswordConfirmation}
                setPassword={setNewPasswordConfirmation}
                isPasswordVisible={isNewPasswordConfirmationVisible}
                setPasswordVisible={setNewPasswordConfirmationVisible}
            />
            {newPasswordConfirmation != "" & !passwordsMatch() ?
                (<Text style={styles.errorText}>Passwords do not match</Text>) :
                null}
            <View style={styles.registerButtonView}>
                <Button
                    title="Change Password"
                    onPress={handleChangePassword}
                    disabled={!isFormValid()}
                />
            </View>
        </View>
    );
}

export default ChangePasswordScreen;

const styles = StyleSheet.create({
    errorText: {
        color: "red",
    },
    registerButtonView: {
        marginTop: 10,
    },
});