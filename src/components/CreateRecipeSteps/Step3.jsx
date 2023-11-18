import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';

const Step3 = ({
  ingredients,
  onPrevious,
  onSubmit,
  onClose,
  isSubmitButtonDisabled,
}) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <TouchableOpacity onPress={onPrevious}>
            <Text style={isDarkMode ? darkStyles.boldPrimarySmallText : lightStyles.boldPrimarySmallText}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={isSubmitButtonDisabled ? styles.disabledButton : null} onPress={isSubmitButtonDisabled ? null : onSubmit} disabled={isSubmitButtonDisabled} >
            <Text style={isDarkMode ? darkStyles.boldPrimarySmallText : lightStyles.boldPrimarySmallText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredSmallText : lightStyles.boldOnBackgroundCenteredSmallText}>Summary</Text>
      <View>
        <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredSmallText : lightStyles.boldOnBackgroundCenteredSmallText}>Included ingredients</Text>
        <View>
          {ingredients != undefined
            ? ingredients.map((i) =>
              i.isIncluded ? (
                <Text key={i.id} style={isDarkMode ? darkStyles.onBackgroundSmallText : lightStyles.onBackgroundSmallText}>- {i.name}</Text>
              ) : null
            )
            : null}
        </View>
      </View>
      <View>
        <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredSmallText : lightStyles.boldOnBackgroundCenteredSmallText}>Excluded ingredients</Text>
        <View>
          {ingredients != undefined
            ? ingredients.map((i) =>
              i.isExcluded ? (
                <Text key={i.id} style={isDarkMode ? darkStyles.onBackgroundSmallText : lightStyles.onBackgroundSmallText}>- {i.name}</Text>
              ) : null
            )
            : null}
        </View>
      </View>
      <View style={styles.trashIconContainer}>
        <TrashIcon onClose={onClose} />
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trashIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  disabledButton: {
    opacity: 0.5,
  }
});
