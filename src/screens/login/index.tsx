import React from "react"
import { View, Text, TextInput, KeyboardAvoidingView} from "react-native"
import { Zocial, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Button from "../../components/Button";


export default function Login() {
    async function handleSignIn() {
        console.log("Login");
       
   }
    return (
      <View>
        <KeyboardAvoidingView>
          <Text>Login</Text>
          <View>
          <Zocial name="email" size={24} color="black" />
          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
        />
          </View>


          <View>
          <MaterialCommunityIcons name="account-key" size={24} color="black" />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
        />
          </View>

          <Button title="Login" type="green" onPress={handleSignIn} />
          <Button title="Cadastre-se" type="purple" onPress={handleSignIn} />

        </KeyboardAvoidingView>
      </View>
    );
  }