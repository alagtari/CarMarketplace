import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	parent : {
        height : '80%',
        width : '100%',
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 200,
        borderBottomEndRadius : 200,
        overflow : 'hidden',
    },
    child : {
        flex : 1,
        transform : [ { scaleX : 0.5 } ],

        backgroundColor : 'yellow',
        alignItems : 'center',
        justifyContent : 'center'
    }
});

const Test = () => {
	return (
		<View style={styles.parent}>
			<View style={styles.child}>
      		
      		</View>
      	</View>
    );
}

export default Test;