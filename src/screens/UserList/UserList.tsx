import { ListItem } from "@rneui/themed";
import { View, Text, FlatList, RefreshControl, Button } from "react-native";

import { useGetUsersQuery } from "../../store/api/usersApi";

const UserList = ({ navigation }) => {
  const { data, isLoading, refetch } = useGetUsersQuery({});
  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              onPress={() => {
                navigation.navigate("UserInfo", { user: item });
              }}
            >
              <ListItem.Content>
                <ListItem.Title>{`${item.firstName} ${item.lastName}`}</ListItem.Title>
              </ListItem.Content>
              <Button
                title="Edit"
                onPress={() => {
                  navigation.navigate("UserForm", { user: item });
                }}
              />
              <Button title="Delete" />
            </ListItem>
          )}
        />
      )}
    </View>
  );
};

export default UserList;
