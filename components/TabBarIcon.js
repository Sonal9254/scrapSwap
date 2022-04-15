import { Ionicons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import * as React from "react";


export default function TabBarIcon(props) {
  return (
    <Icon
      containerStyle={{ marginBottom: -3 }}
      name={props.name}
      type={props.type}
      color={props.focused ? '#78BE1F': '#ccc'}
      size={20}
    />
  );
}
