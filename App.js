import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    //toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>
        {display}
      </Text>
    );
  }
}

export default class BlinkApp extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center', backgroundColor: 'yellow', marginTop: 50}}>
        <Blink text='I love to blink2' />
        <Blink text='Blinking is fun' />
        <Blink text='Why not wink?' />
        <Blink text='Look at me wheee' />
      </View>
    );
  }
}

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
