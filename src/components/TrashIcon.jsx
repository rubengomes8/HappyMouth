import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { darkThemeColors } from "../styles/colors";

const TrashIcon = ({onClose}) => {
  return (
    <View>
      <TouchableOpacity onPress={onClose}>
        <Icon
          name="trash"
          size={styles.trashIcon.size}
          color={styles.trashIcon.color}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TrashIcon;

const styles = StyleSheet.create({
  trashIcon: {
    color: darkThemeColors.terciary,
    size: 30,
  },
});
