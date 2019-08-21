import React from "react"
import { ScrollView, View, StyleSheet, Text } from "react-native"
import { Card, ListItem } from "react-native-elements"
import { inject, observer } from "mobx-react"

@inject("notificationStore")
@observer
export default class NotificationScreen extends React.Component {
     componentDidMount() {
          const { fetchAnnouncement } = this.props.notificationStore
          fetchAnnouncement()
     }
     render() {
          const { announcement } = this.props.notificationStore
          if (announcement.length === 0) return <View />
          const announcements = announcement
          const currentAnnouncement = announcements[0]
          announcements.shift()
          return (
               <ScrollView style={styles.container}>
                    <Card
                         containerStyle={styles.cardContainer}
                         title="ประกาศล่าสุด"
                         titleStyle={styles.currentNewsTitle}
                         image={require("../resources/notificationEx.png")}
                    >
                         <Text style={styles.currentNewsText}>
                              {currentAnnouncement.description}
                         </Text>
                         <Text style={styles.dateText}>
                              {currentAnnouncement.time}
                         </Text>
                    </Card>
                    <Text style={styles.prevNews}> ประกาศอื่นๆ </Text>
                    <Card containerStyle={styles.cardContainer}>
                         {announcements.map((u, i) => {
                              return (
                                   <ListItem
                                        containerStyle={styles.listContainer}
                                        key={i}
                                        title={u.title}
                                        titleStyle={styles.prevNewsTitle}
                                        subtitleStyle={{ marginTop: 8 }}
                                        subtitle={contentWrap(
                                             u.description,
                                             u.time
                                        )}
                                   />
                              )
                         })}
                    </Card>
               </ScrollView>
          )
     }
}

//subtitle limiter, to limit word in subtitle (you can remove this if you don't like)
const contentWrap = (description, time) => (
     <View>
          <Text>
               {description.length > 110
                    ? description.substring(0, 110)
                    : description}
          </Text>
          <Text style={styles.listDateText}>{time}</Text>
     </View>
)

NotificationScreen.navigationOptions = {
     title: "ประกาศโรงเรียน"
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: "column",
          marginTop: 16,
          backgroundColor: "#fff",
          marginBottom: 32
     },
     prevNews: {
          marginTop: 32,
          marginLeft: 32,
          fontSize: 24
     },
     currentNewsText: {
          lineHeight: 24,
          fontSize: 16,
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16,
          marginBottom: 16
     },
     dateText: {
          textAlign: "right",
          color: "darkgray",
          marginRight: 16
     },
     listDateText: {
          marginTop: 16,
          color: "darkgray",
          textAlign: "right"
     },
     currentNewsTitle: {
          fontSize: 24,
          fontWeight: "bold"
     },
     prevNewsTitle: {
          fontSize: 16,
          fontWeight: "bold"
     },
     listContainer: {},
     cardContainer: { borderRadius: 16 }
})
