import React from 'react';
import {ENTRIES1, ENTRIES2} from './static/images';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';


export default class App extends React.Component {

    renderImages = (item) => {
        return (<View>
            <Text>{`Image ${item.id}`}</Text>
            <Image style={styles.image} source={{id: 1, uri: item.uri}}/>
        </View>)
    };

    renderGallery = (item) => {
        return (<FlatList
            keyExtractor={(item, index) => index.toString()}
            data={item % 2 === 0 ? ENTRIES1 : ENTRIES2}
            style={item % 2 === 0 ? styles.imageListEven : styles.imageList}
            renderItem={({item}) => (
                this.renderImages(item)
            )}
            horizontal
            initialNumToRender={5}
        />);
    };


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        this.renderGallery(item)
                    )}
                    initialNumToRender={3}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        backgroundColor: 'transparent',
    },
    cards: {
        flex: 1,
        backgroundColor: 'red',
    },
    imageListEven: {
        margin: 2,
        borderWidth: 1,
        borderColor: 'red',
    },
    imageList: {
        borderWidth: 1,
        borderColor: 'blue',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        width: 120,
        height: 120,
    }
});
