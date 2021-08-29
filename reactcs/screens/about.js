import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Image }from 'react-native';
import { globalStyles } from '../styles/global';


export default function About(props) {

const pressHandler=()=>{
  props.navigation.navigate('ReviewDetails')
}


const IMAGES = {
  image1: require('../assets/pizza.png'),
  image2: require('../assets/meals.png'),
  image3: require('../assets/potatofries.png'),
  image4: require('../assets/sandwich.png'),
  image5: require('../assets/chicken.png'),
};

const [mealsmenu, setReviews] = useState([
  { title: 'CEO', menu: "Samuel", body: 'Take a dough kneading plate and add all-purpose flour to it. Next, add salt and baking powder in it and sieve the flour once. Then, make a well in the centre and add 1 teaspoon of oil to it. On the other hand, take a little warm water and mix the yeast in it along with 1 teaspoon of sugar. Mix well and keep aside for 10-15 minutes. The yeast will rise in the meantime. Once the yeast has risen, add it to the flour knead the dough nicely using some water. Keep this dough aside for 4-6 hours. Then knead the dough once again. Now, the pizza dough is ready ',image:IMAGES.image1 ,key: '1' },
  { title: 'Vice President', menu: "Geetha", body: 'Wash, peel and chop your vegetables and store in an air tight container in the fridge. By keeping the vegetables in the fridge you minimize nutrient losses. You can also chop meat and keep in a sealed container in the fridge (within its use-by dates). Spending a few minutes doing this the night before makes cooking the next day less stressful.For healthy snacks, wash and portion fruit into containers. These can be grabbed to snack on throughout the day', image:IMAGES.image2 ,key: '2' },
  { title: 'Manager', menu: "Francis", body: 'First, grab 1 extra-large potato, 2 large potatoes or 3 medium potatoes equalling about 315 grams. Rinse well in water and then peel the potato. Now slice the potato in slices having 1 cm thickness.Cut the potatoes in sticks having 1 cm width. Heat oil in a wok or pan over medium or medium-low heat, depending on the heaviness of your pan.',image:IMAGES.image3 , key: '3' },
  { title: 'Chief Technical Manager', menu: "Anamika Sengupta", body: 'Step 1 Slice the veggies Step 2 Make green chutney Step 3 Assemble the sandwich Step 4 Grill the sandwich and serve hot Once you are done with placing the sandwich, spread the grated cheese over it. Grill the sandwich for around 2-3 minutes. Once done, cut into pieces and serve hot. Do try this recipe, rate it and let us know in the comments how it turned out to be.', image:IMAGES.image4 ,key: '4' },
  { title: 'Business Development', menu: "Rania Lampou", body: 'chicken recipe, perfect for occasions like dinner party with friends or a get together with family on festivals like Eid or Diwali. It is the most basic and simple chicken recipe to try at home, cooked in less than an hour! Chicken masala can be paired with some steamed rice or any Indian bread of your choice like roti, naan or hot and piping parathas.', image:IMAGES.image5 ,key: '5' },
  { title: 'Company Secretary', menu: "Sam", body: 'chicken recipe, perfect for occasions like dinner party with friends or a get together with family on festivals like Eid or Diwali. It is the most basic and simple chicken recipe to try at home, cooked in less than an hour! Chicken masala can be paired with some steamed rice or any Indian bread of your choice like roti, naan or hot and piping parathas.', image:IMAGES.image5 ,key: '5' },
  { title: 'President', menu: "DC", body: 'chicken recipe, perfect for occasions like dinner party with friends or a get together with family on festivals like Eid or Diwali. It is the most basic and simple chicken recipe to try at home, cooked in less than an hour! Chicken masala can be paired with some steamed rice or any Indian bread of your choice like roti, naan or hot and piping parathas.', image:IMAGES.image5 ,key: '5' },
]);

return (

  <View style={styles.container}>
  <FlatList style={styles.list}
    contentContainerStyle={styles.listContainer}
    data={mealsmenu}
    horizontal={false}
    numColumns={1}
    keyExtractor= {(item) => {
      return item.id;
    }}
    renderItem={({item}) => {
      return (
        <TouchableOpacity style={styles.card} onPress={() => {
          console.log("VInay")
        }}>
          
          <View style={styles.cardFooter}>
            <View style={{alignItems:"center", justifyContent:"center"}}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.position}>{item.body}</Text>
              <TouchableOpacity style={styles.followButton} onPress={()=> 
                props.navigation.navigate('ReviewDetails',item)
              }>
                <Text style={styles.followButtonText}>{item.menu}</Text>  
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )
    }}/>
</View>

);
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//   },
// });

const styles = StyleSheet.create({
  container:{
    flex:5,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 900,
      height: 10,
    },
    shadowOpacity: 0.90,
    shadowRadius: 9.49,
    elevation: 20,

    marginVertical: 25,
    backgroundColor:"white",
    flexBasis: '96%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 150,
    width: 300,
 
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"red",
    fontWeight:'bold'
  },
  position:{
    fontSize:10,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:10,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});    



// https://snack.expo.dev/@guruparan/navsample
//https://stackoverflow.com/questions/62761253/how-to-use-stacknavigator-with-drawernavigator-reactnavigation-v5-im-using-c