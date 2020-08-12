import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = ({ post }) => {
    const { user_id } = post;
    const [user, setUser] = useState(false)

    const retrieveUser = (userData) => {
        if (!userData) return;
        setUser(userData);
    }

    const randomDate = () => {
        return new Date(+(new Date()) - Math.floor(Math.random()*10000000000)).toISOString().split('T')[0]
    }

    useEffect(() => {
        fetch(`https://gorest.co.in/public-api/users/${user_id}?access-token=HB-30z0K6Obcpn-jUuEyK4G6mDvDxcNCCM4Q`)
            .then((response) => response.json())
            .then((respData) => retrieveUser(respData.result))
            .catch((error) => console.error(error))
    }, [])

    return (
        <>
            {user && 
            <View style={{marginVertical: 5, alignItems: 'flex-end'}}>
                
            <Text style={styles.userText}>Creado por {user.first_name}, {randomDate()}</Text>
            
            </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    userText: {
        fontSize: 12,
        color: '#888',
        fontFamily: 'comfortaa'
    }
})

export default User;