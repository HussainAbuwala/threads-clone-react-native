import * as React from "react";

import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Lottie from "lottie-react-native";
import { ThreadContext } from "../../context/thread-context";
import ThreadItem from "../../components/ThreadsItem";



export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadContext);


  return (<SafeAreaView>
    <ScrollView
     contentContainerStyle={{
      paddingTop: Platform.select({ android: 30 }),
      paddingHorizontal: 10,
    }}

    refreshControl={
      <RefreshControl
        refreshing={false}
        tintColor={"transparent"}
        onRefresh={() => animationRef.current?.play()}

      />
    }
    >
      <Lottie
        ref={animationRef}
        source={require("../../lottie-animations/threads.json")}
        style={{
          width: 90,
          height: 90,
          alignSelf: "center",
        }}
        loop={false}
      />
      {threads.map((thread) => (
        <ThreadItem key={thread.id} thread={thread}/>
      ))}
    </ScrollView>
  </SafeAreaView>
  );
}

