import React, { Component } from "react"
import { View } from "react-native"
import { ListItem } from "react-native-elements"

export default (ListView = ({ data }) => (
     <View>
          {data.map((item, i) => (
               <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon }}
               />
          ))}
     </View>
))
