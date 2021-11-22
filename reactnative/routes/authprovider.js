import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return(
        <AuthContext.Provider
            value={{
                user,
                login:() => {
                    const fakeUser = {
                        email: 'bob@bob.com',
                        token: 'fake-token',
                    };
                    setUser(fakeUser);
                    SecureStore.setItemAsync('user', JSON.stringify(fakeUser));
                },
                logout: () => {
                    setUser(null);
                    SecureStore.deleteItemAsync('user')
                }
            }}
        >
            {children}
            
        </AuthContext.Provider>
    );
}