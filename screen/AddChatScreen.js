import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = React.useState("");
  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button
        style={styles.button}
        onPress={createChat}
        title="Create new Chat"
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {},
  button: { backgroundColor: "blue" },
});
