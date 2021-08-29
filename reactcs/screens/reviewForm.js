import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function ReviewForm({ addReview }) {
  
  return (
    
    <View style={globalStyles.container}>
      <Formik
  
        initialValues={{ title: '', body: '', rating: '',ratingnumber:0}}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
              <AirbnbRating
                count={5}
                 reviews={["1/5","2/5","3/5","4/5","5/5",]}
                defaultRating={0}
                onFinishRating={parseInt('rating')}
                size={20}
                value={props.values.ratingnumber}
                />
            <TextInput
              style={globalStyles.input}
              placeholder='Author Name'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Commnet'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}