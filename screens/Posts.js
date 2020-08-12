import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right, List, ListItem } from 'native-base';
import User from '../components/User';


const fetchUserData = () => {
    console.log('holis?')
    return <Text>holis?</Text>;
}

const PostScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://gorest.co.in/public-api/posts?access-token=HB-30z0K6Obcpn-jUuEyK4G6mDvDxcNCCM4Q')
            .then((response) => response.json())
            .then((json) => setData(json.result))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <View style={{ flex: 1, margin: 10 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <List>
                            <ListItem>
                                <Body>
                                    <View style={{ marginVertical: 5 }}>
                                        <Text 
                                        numberOfLines={2}>
                                        <Text style={{ fontSize: 17, fontFamily: 'comforta-bold', color: '#888' }}>{item.id}. </Text><Text style={{ fontSize: 15, fontFamily: 'comforta-bold' }}>{item.title}</Text>
                                        </Text>
                                    </View>
                                    <Text numberOfLines={6} style={{ fontSize: 12, fontFamily: 'comfortaa' }}>{item.body}</Text>
                                    <User post={item} />
                                </Body>
                            </ListItem>
                        </List>
                    )}
                />
            )}
        </View>
    )
}

export default PostScreen;