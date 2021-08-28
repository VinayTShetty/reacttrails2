import React, { useState } from 'react';
import { StyleSheet, View, Text,Image,FlatList,
  TouchableOpacity,Modal, Button ,Dimensions,TextInput,TouchableWithoutFeedback, Keyboard} from 'react-native';
import { globalStyles,images } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Card from '../shared/card';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ReviewForm from './reviewForm';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
export default function ReviewDetails({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);




  const [reviews, setReviews] = useState([
    // { author: 'Vinay', comment: 'lorem ipsum',rating:'2', key: '1' },
    // { author: 'Vinay 1', comment: 'lorem ipsum',rating:'2', key: '2' },
    
  ]);
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  return (
    <View style={globalStyles.container}>
    <Modal  visible={modalOpen}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.modalContent}>
    <MaterialIcons 
    name='close'
    size={50} 
    style={{...styles.modalToggle, ...styles.modalClose}} 
           onPress={() => setModalOpen(false)} 
         />
    <ReviewForm addReview={addReview} />
    </View>
    </TouchableWithoutFeedback>
    </Modal>
    <View style={styles.card}>
    <Text style={styles.paragraph}>{navigation.getParam('menu')}</Text>
    <Image  style={styles.userImage}source={navigation.getParam('image')}/>
    <Text style={styles.description}>{navigation.getParam('body')}</Text>
    <TouchableOpacity onPress={() =>setModalOpen(true)}>
    <View style={styles.iconcontainer} >
    <AntDesign name="heart" size={24} color="red" />
    <FontAwesome name="pencil" size={24} color="blue" />
    </View>
    </TouchableOpacity>    
    </View>
    
    <Text style={styles.comments}>Comments</Text>
    <FlatList data={reviews} renderItem={({ item }) => (
      <TouchableOpacity >
        <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
          <Text style={globalStyles.titleText}>{ item.body }</Text>
          <View style={styles.rating}>
          <Image source={images.ratings[2]} />
        </View>
        </Card>
      </TouchableOpacity>
    )} />
  </View>
   
  );
}




const styles = StyleSheet.create({
  userImage:{
    height: 120,
    width: 300,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  paragraph: {
    marginBottom:1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  description: {
    marginBottom:10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10
  },
  ratingstar: {
    
  },
  iconcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
    flexDirection:'row',
    alignItems:'center'

  },
  comments: {
    marginTop:10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  modalContent: {
    flex: 1,
  }, viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
},
modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "30%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -90 }],
    height: 350,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
},
textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
},
modalToggle: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  borderWidth: 1,
  borderColor: '#f2f2f2',
  padding: 10,
  borderRadius: 10,
  alignSelf: 'center',
},
modalClose: {
  marginTop: 10,
  marginBottom: 20,
},
modalContent: {
  flex: 1,
},
rating: {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 10,
  marginTop: 16,
  borderTopWidth: 1,
  borderTopColor: '#eee',
  alignItems: 'center',
}
});




/**
 * Star rating link
 * https://www.npmjs.com/package/react-native-ratings
 */