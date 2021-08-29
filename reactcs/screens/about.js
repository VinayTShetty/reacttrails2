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
  { title: 'CEO', menu: "Samuel", body: 'A chief executive officer  chief administrator , or just chief executive (CE), is one of a number of corporate executives in charge of managing an organization – especially an independent legal entity such as a company or nonprofit institution. CEOs find roles in a range of organizations, including public and private corporations, non-profit organizations and even some government organizations (notably state-owned enterprises). The CEO of a corporation or company typically reports to the board of directors and is charged with maximizing the value of the business',image:IMAGES.image1 ,key: '1' },
  { title: 'Vice President', menu: "Geetha", body: 'In business, "vice president" refers to hierarchical position that ranges from extremely senior positions directly reporting to C-level executives (in non-financial companies), to junior non-management positions with four to 10 years of experience (in financial companies).In non-financial businesses, vice presidents often report directly to the president or CEO of the company and is a member of the executive management team. Some corporations that use this term may have individuals with the title of vice president responsible for specific business divisions (e.g., vice president for legal, vice president for sales and marketing, vice president for finance, and vice president for human resources).', image:IMAGES.image2 ,key: '2' },
  { title: 'Manager', menu: "Francis", body: 'Management includes the activities of setting the strategy of an organization and coordinating the efforts of its employees (or of volunteers) to accomplish its objectives through the application of available resources, such as financial, natural, technological, and human resources. The term "management" may also refer to those people who manage an organization—managers.',image:IMAGES.image3 , key: '3' },
    { title: 'Chief Technical Manager', menu: "Anamika", body: 'A chief technical officer (CTO), also known as a chief technology officer or chief technologist, is an executive-level position in a company or other entity whose occupation is focused on the scientific and technological issues within an organization.[1]', image:IMAGES.image4 ,key: '4' },
  
    { title: 'Business Development', menu: "Rania Lampou", body: 'A Business Development Company ("BDC") is a form of unregistered closed-end investment company in the United States that invests in small and mid-sized businesses. This form of company was created by Congress in 1980 as amendments to the Investment Company Act of 1940. Publicly filing firms may elect regulation as BDCs if they meet certain requirements of the Investment Company Act.[1]', image:IMAGES.image5 ,key: '5' },
  { title: 'Company Secretary', menu: "Sam", body: 'A Company Secretary (CS) is a senior position in a private sector company or public sector organisation. The title CS is an internationally recognised professional designation given to Company Secretaries. Also known as Compliance Officers, Legal Officers or Chartered Secretaries, it is one of the positions that is a part of the Key Managerial Personne - KMP (which usually includes the CEO & CFO along with it) of any company.', image:IMAGES.image5 ,key: '5' },
  { title: 'President', menu: "DC", body: 'A president is a leader of an organization, company, community, club, trade union, university or other group.[1][2] The relationship between a president and a chief executive officer varies, depending on the structure of the specific organization. In a similar vein to a chief operating officer, the title of corporate president as a separate position (as opposed to being combined with a "C-suite" designation, such as "president and chief executive officer" or "president and chief operating officer") is also loosely defined; the president is usually the legally recognized highest rank of corporate officer, ranking above the various vice presidents (including senior vice president and executive vice president), but on its own generally considered subordinate, in practice, to the CEO. ', image:IMAGES.image5 ,key: '5' },


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
              <TouchableOpacity style={styles.followButton} onPress={()=> 
                props.navigation.navigate('ReviewDetails',item)
              }>
                <Text style={styles.followButtonText}>{item.menu}</Text>  
              </TouchableOpacity>
              <Text style={styles.position}>{item.body}</Text>
              
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