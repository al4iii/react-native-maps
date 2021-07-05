import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {TouchableOpacity} from "react-native-gesture-handler";

const Secondary = props => {
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Step Two</Text>
                    <Text style={styles.sectionDescription}>
                        Edit <Text style={styles.highlight}>App.js</Text> to change this
                        screen and then come back to see your edits.
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Main')}
                >
                    <Text>
                        Go to Main
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Secondary;

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
});