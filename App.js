import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
    {/*Heading*/}
    <ScrollView>
    <Text style={styles.heading}>Register</Text>

    <View style={styles.nameRow}>
        {/* First Name */}
        <View style={styles.inputContainer}>
          <Text>First Name</Text>
          <TextInput style={styles.input} placeholder="Enter first name" />
        </View>

        {/* Last Name */}
        <View style={styles.inputContainer}>
          <Text>Last Name</Text>
          <TextInput style={styles.input} placeholder="Enter last name" />
        </View>
      </View>


      {/* Email */}
      <View style={styles.fullInputContainer}>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" keyboardType="email-address" />
      </View>

      {/* Password */}
      <View style={styles.fullInputContainer}>
        <Text>Password</Text>
        <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
        
      </View>

      {/* Confirm Password */}
      <View style={styles.fullInputContainer}>
        <Text>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry />

      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/*Here Counter */}
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>Counter: {count}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => setCount(count + 1)}/>
            <Button 
            title="-"
            onPress={() => {
              if (count > 0) setCount (count - 1);

              
            }}
            />
        </View>
      </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 100,
  paddingHorizontal: 20,
},
heading: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 40,
},
nameRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
inputContainer: {
  flex: 1,
  marginHorizontal: 5,
},
fullInputContainer: {
  marginTop: 20,
},
password:{
  flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5,
    paddingHorizontal: 10,
  flexDirection: 'row',
  marginTop: 20,
},
input: {
  flex:'1',
  borderWidth: 1,
  borderColor: 'rgb(147, 143, 143)',
  borderRadius: 6,
  padding: 10,
  marginTop: 5,
},
button: {
  backgroundColor:'rgb(162, 28, 48)',
  paddingVertical: 10,
  borderRadius: 25,
  marginTop: 50,
  alignItems: 'center',
},
buttonText: {
  color: 'rgb(250, 247, 248)',
  fontWeight: 'bold',
  fontSize: 16,
},
counterBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 5,
  },

 });
