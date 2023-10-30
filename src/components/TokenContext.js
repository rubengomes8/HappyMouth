import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const savedToken = await AsyncStorage.getItem("token");
        if (savedToken) {
          setToken(savedToken);
        }
      } catch (error) {
        console.error("Error loading token from AsyncStorage:", error);
      }
    };
    loadToken();
  }, []);

  const saveToken = async (newToken) => {
    try {
      await AsyncStorage.setItem("token", newToken);
      setToken(newToken);
    } catch (error) {
      console.error("Error saving token to AsyncStorage:", error);
    }
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setToken(null);
    } catch (error) {
      console.error("Error removing token from AsyncStorage:", error);
    }
  };

  //   return (
  //     <View>
  //       {token ? (
  //         <View>
  //           <Button title="Logout" onPress={handleLogout} />
  //           {/* Display content for authenticated users */}
  //         </View>
  //       ) : (
  //         <Text>Please log in to access this feature.</Text>
  //       )}
  //     </View>
  //   );

  return (
    <TokenContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};

export default TokenProvider;
