import React from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native"
import { Input, Icon, Button, Image } from "react-native-elements"
import { inject, observer } from "mobx-react"

@inject("authStore")
@observer
export default class LoginScreen extends React.Component {
     componentDidUpdate(props) {
          const { status, getPath } = this.props.authStore
          console.log("check helo")
          if (status.success) {
               console.log("เข้า")
               console.log(getPath())
               this.props.navigation.navigate(getPath())
          }
     }
     render() {
          const {
               username,
               password,
               updateUsername,
               updatePassword,
               status,
               login
          } = this.props.authStore

          return (
               <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
               >
                    <Image
                         source={require("../resources/EduMis.jpg")}
                         style={{ width: 150, height: 150 }}
                    />
                    <Input
                         value={username}
                         onChange={event =>
                              updateUsername(event.nativeEvent.text)
                         }
                         placeholder="Username"
                         errorMessage={status.usernameMsg}
                         inputStyle={{ marginLeft: 16 }}
                         containerStyle={styles.inputContainer}
                         label="ชื่อผู้ใช้งาน"
                         labelStyle={{ marginLeft: 16 }}
                         leftIcon={
                              <Icon
                                   name="perm-identity"
                                   size={24}
                                   color="black"
                              />
                         }
                    />
                    <Input
                         value={password}
                         onChange={event =>
                              updatePassword(event.nativeEvent.text)
                         }
                         placeholder="Password"
                         errorMessage={status.passwordMsg}
                         containerStyle={styles.inputContainer}
                         inputStyle={{ marginLeft: 16 }}
                         secureTextEntry
                         label="รหัสผ่าน"
                         labelStyle={{ marginLeft: 16 }}
                         leftIcon={<Icon name="lock" size={24} color="black" />}
                    />

                    <Button
                         title="ล๊อคอิน"
                         buttonStyle={styles.button}
                         containerStyle={styles.buttonContainer}
                         onPress={() => {
                              login()
                              this.forceUpdate()
                         }}
                    />
               </KeyboardAvoidingView>
          )
     }
}

LoginScreen.navigationOptions = {
     header: null
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 16,
          marginRight: 16
     },
     inputContainer: {
          marginTop: 16
     },
     buttonContainer: {
          borderRadius: 16,
          width: "95%",
          marginLeft: 32,
          marginRight: 32,
          marginTop: 32
     },
     button: { borderRadius: 16, height: 50 }
})
