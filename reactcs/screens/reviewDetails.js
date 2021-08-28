import React, { useState } from 'react';
import { StyleSheet, View, Text,Image,FlatList,TouchableOpacity,Modal, Button ,Dimensions,TextInput} from 'react-native';
import { globalStyles } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Card from '../shared/card';
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width } = Dimensions.get("window");
export default function ReviewDetails({navigation}) {
  const [authorname, setAuthorName] = useState("");
  const [comment, setComment] = useState("");
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
};
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Demo, Vinay of Demo Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '4' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '5' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '6' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '7' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '8' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '9' },
  ]);


  return (
    <View style={globalStyles.container}>
    <Modal  visible={modalOpen}
    transparent={true}
    >
    <View style={styles.viewWrapper}>
    <View style={styles.modalView}>
    <Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 5 }}
/>
        <TextInput placeholder="Author name" 
                   value={authorname} style={styles.textInput} 
                   onChangeText={(value) => setInputValue(value)} />
                   <TextInput placeholder="Comment" 
                   value={comment} style={styles.textInput} 
                   onChangeText={(value) => setComment(value)} />

        {/** This button is responsible to close the modal */}
        <Button title="Close" onPress={() =>setModalOpen(false)} />
    </View>
</View>
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
      <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
        <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
          <Text style={globalStyles.titleText}>{ item.body }</Text>
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
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -90 }],
    height: 180,
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
});