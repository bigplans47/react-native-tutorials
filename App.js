import React, { Component } from 'react';
import { Alert, ScrollView, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Button, Image, TextInput, FlatList, SectionList } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList data={[
//           {key: 'Dan'},
//           {key: 'Ron'},
//           {key: 'Trixy'},
//           {key: 'Misty'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//           {key: 'Trixy'},
//           {key: 'Misty'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//           {key: 'Trixy'},
//           {key: 'Misty'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//           {key: 'Trixy'},
//           {key: 'Misty'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//           {key: 'Trixy'},
//           {key: 'Misty'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'}
//         ]} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// export default class IScrollerDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//     let pic = {
//       uri: 'http://natureandnutrition.com/wp-content/uploads/2015/04/Health-Benefits-of-Bananas-600x600.jpg'
//     };
//     let pic2 = {
//       uri: 'https://www.peta.org/wp-content/uploads/2015/09/Macaca_nigra_self-portrait-768x1063.jpg'
//     };
//     return (
//       <ScrollView>
//         <Text style={{fontSize:96}}>Scroll me plz</Text>
//         <Image source={pic} style={{width: 193, height: 150}}/>
//         <Text style={{fontSize: 96}}>If you like</Text>
//         <Text style={{fontSize: 96}}>Scrolling down</Text>
//         <Text style={{fontSize:96}}>What's the best</Text>
//         <Text style={{fontSize:96}}>Framework around?</Text>
//         <Image source={pic2} style={{width: 193, height: 150}} />
//         <Text style={{fontSize:80}}>React Native</Text>
//       </ScrollView>
//     );
//   }
// }

// export default class Touchables extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button')
//   }
//
//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }
//
//   render() {
//     return(
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.butonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback onPress={this._onPressButton}
//           background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button')
//   }
//
//   render() {
//     return(
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title='Press me'
//           />
//         </View>
//         <View style={styles.buttonContainer} >
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color='#841584'
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title='Ok!'
//             color='#841584'
//           />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// })

// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return(
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder='Type text here to translate to pizza'
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//         <Button
//           onPress={() => {
//             Alert.alert('You tapped the button!');
//           }}
//           title='Press Me'
//         />
//       </View>
//     );
//   }
// }

// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     )
//   }
// }

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{ width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{ width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{ width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, flexDirection: 'row'}}>
//         <View style={{ flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{ flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{ flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// export default class LotsOfStyles extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isShowingText: true};
//
//     //toggle the state every second
//     setInterval(() => {
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }
//
//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>
//         {display}
//       </Text>
//     );
//   }
// }
// //
// export default class BlinkApp extends React.Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', backgroundColor: 'yellow', marginTop: 50}}>
//         <Blink text='I love to blink' />
//         <Blink text='Blinking is fun' />
//         <Blink text='Why not wink?' />
//         <Blink text='Look at me wheee' />
//       </View>
//     );
//   }
// }

// class Greeting extends Component {
//   render() {
//     return (
//       <Text> Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Don' />
//         <Greeting name='Jizanthepus' />
//       </View>
//     );
//   }
// }



// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'http://natureandnutrition.com/wp-content/uploads/2015/04/Health-Benefits-of-Bananas-600x600.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 150}}/>
//     );
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Look I changed something! Open up App.js to start working on your app!</Text>
//         <Button
//           title="Click me"
//         />
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
