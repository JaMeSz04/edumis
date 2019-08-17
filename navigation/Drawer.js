import React from "react"
import { NavigationActions } from "react-navigation"
import { Text, View, StyleSheet, ImageBackground } from "react-native"

export default class Drawer extends React.Component {
     componentDidMount() {
          this.props.navigation.openDrawer()
     }
     navigateToScreen = route => () => {
          const navigateAction = NavigationActions.navigate({
               routeName: route
          })
          this.props.navigation.dispatch(navigateAction)
     }

     render() {
          return (
               <View style={styles.container}>
                    <View style={styles.headerContainer}>
                         <ImageBackground
                              source={require("../resources/drawerbg.jpeg")}
                              style={{
                                   flex: 1,
                                   width: 280,
                                   justifyContent: "center"
                              }}
                         >
                              <Text style={styles.headerText}>John Doe</Text>
                              <Text style={styles.subHeaderText}>
                                   ครูประจำชั้น ป.3/4
                              </Text>
                         </ImageBackground>
                    </View>
                    <View style={styles.screenContainer}>
                         <View
                              style={[
                                   styles.screenStyle,
                                   this.props.activeItemKey == "ScreenA"
                                        ? styles.activeBackgroundColor
                                        : null
                              ]}
                         >
                              <Text
                                   style={[
                                        styles.screenTextStyle,
                                        this.props.activeItemKey == "ScreenA"
                                             ? styles.selectedTextStyle
                                             : null
                                   ]}
                                   onPress={this.navigateToScreen("ScreenA")}
                              >
                                   Screen A
                              </Text>
                         </View>
                         <View
                              style={[
                                   styles.screenStyle,
                                   this.props.activeItemKey == "ScreenB"
                                        ? styles.activeBackgroundColor
                                        : null
                              ]}
                         >
                              <Text
                                   style={[
                                        styles.screenTextStyle,
                                        this.props.activeItemKey == "ScreenB"
                                             ? styles.selectedTextStyle
                                             : null
                                   ]}
                                   onPress={this.navigateToScreen("ScreenB")}
                              >
                                   Screen B
                              </Text>
                         </View>
                         <View
                              style={[
                                   styles.screenStyle,
                                   this.props.activeItemKey == "ScreenC"
                                        ? styles.activeBackgroundColor
                                        : null
                              ]}
                         >
                              <Text
                                   style={[
                                        styles.screenTextStyle,
                                        this.props.activeItemKey == "ScreenC"
                                             ? styles.selectedTextStyle
                                             : null
                                   ]}
                                   onPress={this.navigateToScreen("ScreenC")}
                              >
                                   Screen C
                              </Text>
                         </View>
                    </View>
               </View>
          )
     }
}

const styles = StyleSheet.create({
     container: {
          alignItems: "center"
     },
     headerContainer: {
          height: 150
     },
     headerText: {
          color: "#fff8f8",
          fontSize: 18,
          marginLeft: 16,
          marginRight: 16
     },
     subHeaderText: {
          color: "#fff8f8",
          fontSize: 14,
          marginLeft: 16,
          marginRight: 16
     },
     screenContainer: {
          paddingTop: 20,
          width: "100%"
     },
     screenStyle: {
          height: 30,
          marginTop: 2,
          flexDirection: "row",
          alignItems: "center",
          width: "100%"
     },
     screenTextStyle: {
          fontSize: 20,
          marginLeft: 20,
          textAlign: "center"
     },
     selectedTextStyle: {
          fontWeight: "bold",
          color: "#00adff"
     },
     activeBackgroundColor: {
          backgroundColor: "grey"
     }
})
