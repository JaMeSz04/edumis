import React, { Component } from "react"
import { ScrollView } from "react-native"
import { ListItem } from "react-native-elements"

export default (ListView = ({ data }) => (
     <ScrollView>
          {data.map((item, i) => (
               <ListItem
                    key={i}
                    title={item.title}
                    subtitle={item.subtitle}
                    leftAvatar={{ source: { uri: item.avatar } }}
                    rightIcon={{
                         name: item.absent ? "visibility-off" : "done"
                    }}
               />
          ))}
     </ScrollView>
))
