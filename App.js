import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView,Recompensa} from 'react-native';

export default function App(){
return(
<View  style={estilo.container}>
<Text  style={estilo.titulo}> PROCURADOS </Text>
<Text  style={estilo.frase}>BANDID0S PERIGOSOS</Text>
<ScrollView style={estilo.fotos}>
<Image style={estilo.img} source={require("./assets/ROBERTO_TORTO.jpg")}/>
<Text  style={estilo.legenda}>Robertinho Mandrake</Text>
<Text  style={estilo.recompensa}>Recompensa avaliada em : R$ 100.0000,00</Text>
<Image style={estilo.img} source={require("./assets/gordinho")}/>
<Text  style={estilo.legenda}> LEITÃO </Text>
<Text  style={estilo.recompensa}>Recompensa avaliada em : R$ 20.0000,00</Text>
<Image style={estilo.img} source={require("./assets/PABLO_TORTO.jpg")}/>
<Text  style={estilo.legenda}> ESCOBAR </Text>
<Text  style={estilo.recompensa}>Recompensa avaliada em : R$ 300.0000,00</Text>
<Image style={estilo.img} source={require("./assets/marcola.jfif")}/>
<Text  style={estilo.legenda}> MARCOLA </Text>
<Text  style={estilo.recompensa}>Recompensa avaliada em : R$ 1.50000,00</Text>
<Image style={estilo.img} source={require("./assets/lula.jfif")}/>
<Text  style={estilo.legenda}> LULINDO </Text>
<Text  style={estilo.recompensa}>Recompensa avaliada em :  Pão com Mortandela</Text>
<Image style={estilo.img} source={require("./assets/bonoro.jfif")}/>
<Text  style={estilo.legenda}> BONORO </Text>
<Text  style={estilo.recompensa}>Recompensa avaliada em:  Leite Condensado</Text>
</ScrollView>
</View>

);
} 

const estilo = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#000000',

},


titulo: {
textAlign:'center',
fontSize:50,
marginTop: 50,
marginBottom:20,
fontWeight:'bold',
fontFamily:'Impact',
color:'#FF0000',

},

frase:{
fontSize:15,
marginBottom:20,
textAlign:'CENTER',
fontWeight:980,
color:'#FFFFF0'
},

img:{
 width:300,
 height:200,
 marginLeft:15,
 borderRadius:86,  

},

legenda:{
textAlign:'center',
fontSize:15,
fontFamily:'fantasy',
marginTop:10,
marginBottom:10,
color:'#FFFFF0'
},

fotos:{
alignItems:'center'
},

recompensa:{

textAlign:'center',
fontSize:15,
fontFamily:'fantasy',
marginTop:2,
marginBottom:10,
color:'#FFFF00'

},






});
