import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    {/*Heading*/}
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
        {/*<TouchableOpacity>
          <Image
          source= {require('./assets/hide-icon.png')}
          height={10}
          width={10}
          style={{
                height:25,
                width:25,
          }}
          />
        </TouchableOpacity>*/}
      </View>

      {/* Confirm Password */}
      <View style={styles.fullInputContainer}>
        <Text>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" secureTextEntry />
        {/*<TouchableOpacity>
          <Image
          source= {require('./assets/hide-icon.png')}
          height={10}
          width={10}
          />
        </TouchableOpacity>*/}
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

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
  backgroundColor:'rgb(216, 13, 81)',
  paddingVertical: 10,
  borderRadius: 25,
  marginTop: 100,
  alignItems: 'center',
},
buttonText: {
  color: 'rgb(250, 247, 248)',
  fontWeight: 'bold',
  fontSize: 16,
},
  });
