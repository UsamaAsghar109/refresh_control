import React, { useEffect } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [test, setTest] = React.useState();

  // useEffect(() => {

  //   let today = new Date();
  //   fetch('https://xtriven.com/api/loc_data', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzNjU2MDM1LCJpYXQiOjE2NDM2NTMwMzUsImp0aSI6IjNlZTYwZDU3MjFkNTQwMDViODdiNzkxNWIwNTFkYjYwIiwidXNlcl9pZCI6MjR9.jejRGfJ6jE3TsMF1oBvkmwJc6FaCzFoUJ8WHNZvMhlk',
  //     },
  //     body: JSON.stringify({
  //       timestamp: today,
  //       x1: '1',
  //       y1: '1',
  //       x2: '2',
  //       y2: '2',
  //       x3: '3',
  //       y3: '3',
  //       x4: '4',
  //       y4: '4',
  //       x5: '5',
  //       y5: '5',
  //       x6: '6',
  //       y6: '6',
  //       x7: '7',
  //       y7: '7',
  //       x8: '8',
  //       y8: '8',
  //       x9: '9',
  //       y9: '9',
  //       x10: '10',
  //       y10: '10',
  //     })
  //   })

  //     .then(async (response) => {
  //       let data = await response.json();
  //       console.log(data)
  //       setRefreshing('Response submitted')
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })


  // }, [])

  useEffect(() => {
    setTimeout(() => {
      let value = 100;
      setTest(value);
      console.log(test)
    }, 5000);
  }, [test])

  return (
    <View style={styles.container}>
      <Text>{refreshing}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;