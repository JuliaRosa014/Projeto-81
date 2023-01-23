import {createBottomNavigator} from "react navigation/bottom-tabs";
import Feed from "../screens/Feed.js";
import CreatePost from "../screens/CreatePost.js";

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({route})=> ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Feed'){
                        iconName = focused 
                        ? "book"
                        : "book-outline";
                    } else if (route.name === "CreatePost"){
                        iconName = focused ? "create" :"create-outline";
                    }
                    return <Ionicons name = {iconName} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray"
            }}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Criar Post" component={CreatePost}/>
        </Tab.Navigator>
    )
}