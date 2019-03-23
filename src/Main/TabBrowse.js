import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { LinearGradient, Font  } from 'expo';
import { Avatar, SearchBar } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity,
         SafeAreaView,
         Dimensions,
         ScrollView, 
         StyleSheet, 
         View, 
         Text, 
         ImageBackground, 
         StatusBar, } from 'react-native';

         // Relative Imports
import Category from 'src/components/Category';

const { height, width } = Dimensions.get('window');


export default class Example extends Component {
  
  state = {
    search: '',
  };

  onCategoryitemClick(item) {
    /* Handle onclick event of press on "Category" */
    
  }

  updateSearch = search => {
    /* Seach bar Functionality */
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    const itemsCategory = [
      { name: 'Deserts', uri: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
      { name: 'Appetizers', uri: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      { name: 'Meals', uri: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'},
      { name: 'Breakfast', uri: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
      { name: 'Dinner', uri: 'https://images.unsplash.com/photo-1534070189982-818bb5622474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
      { name: 'Sandwich', uri: 'https://images.unsplash.com/photo-1502725592220-bcf20e5035c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
    ];

    const newResipes = [
      { title: 'Pasta is on the Menu!', description: "- Air Fryer", imageUri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
      { title: 'Let\'s Make Fries.', description: "- Air Fryer", imageUri: 'https://images.unsplash.com/photo-1530805948738-95aa20739233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
      { title: 'Cooking Jerky!', description: "- Food Dehydrator", imageUri: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'},
      { title: 'Making Amazing Tofu!', description: "- Robotic Cooker", imageUri: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80'},
    ]


    return (
      <SafeAreaView style={{ backgroundColor: '#f2f2f2', flex: 1, marginBottom: 3}}>
      <ScrollView scrollEventThrottle={16}>
          <StatusBar backgroundColor="#FF4C4C" barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: '#f2f2f2', paddingTop: 5, marginBottom: 10 }}>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start', marginTop: 5}}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: width - (width * 0.23), marginTop: 5, paddingRight: 10}}>
                      <Feather style={{marginLeft: 10,}} name="menu" size={32} color="black" />
                      <SearchBar
                          placeholder="Search Here..."
                          platform='ios'
                          placeholderTextColor={'rgba(149,156,160,0.8)'}
                          borderRadius={40}
                          onChangeText={() => {}}
                          onClear={() => {}}
                          onCancel={() => {}}
                          cancelButtonTitle={''}
                          leftIconContainerStyle={{
                              marginLeft: 15,
                              marginRight: 5,
                          }}
                          inputStyle={{
                              fontSize: 16,
                              marginLeft: 5,
                              backgroundColor: 'transparent',
                              color: 'rgba(29,31,32,1)'
                          }}
                          containerStyle={{
                              marginLeft: 5,
                              paddingRight: 0,
                              backgroundColor: 'transparent',
                              borderTopWidth: 0,
                              borderBottomWidth: 0
                          }}
                          onChangeText={this.updateSearch}
                          value={search}
                        />
                        <Avatar
                          rounded
                          size={'medium'}
                          marginTop={5}
                          source={{uri: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait-512.png',}}/>
                    </View>
                <View style={{flexDirection: 'row', marginTop: 0}}>
                  <Text style={{ fontSize: 28, fontFamily: "Rubik-Medium", marginLeft: 20, color: '#151515' }}>New Recipes</Text>
                </View>
                  <Text style={{ fontSize: 16, fontFamily: "Rubik-Light", marginLeft: 20, color: '#5B5B5B' }}>Friday 28, 2019</Text>
              </View>
                <View style={{ height: height - (height * 0.65), marginTop: 20, marginBottom:10 }}>
                
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        decelerationRate={5}
                        snapToInterval={width - (width * 0.10)}
                        snapToAlignment={"center"}>
                         {newResipes.map((item, key) => {
                            return (
                              <Category
                                key={key}
                                imageUri={{uri: item.imageUri}}
                                content_user_views="7.8k Views"
                                content_user_likes="352"
                                title={item.title}
                                description="- Air Fryer"/>
                            );
                          })}
                    </ScrollView>
                </View>
            </View>
            <View style={{ backgroundColor: '#f2f2f2', flex: 1, paddingTop: 5, marginBottom: 1 }}>
                <Text style={{ fontSize: 24, fontFamily: "Rubik-Medium", paddingHorizontal: 20, color: '#151515' }}>Recipes</Text>
            </View>
          <FlatGrid
            itemDimension={130}
            items={itemsCategory}
            style={styles.gridView}
            renderItem={({ item, index }) => (
              <View>
                <TouchableOpacity activeOpacity = { .5 } onPress={ (item) => this.onCategoryitemClick(item) }>
                  <ImageBackground
                      borderTopLeftRadius={8}
                      borderTopRightRadius={8}
                      style={[styles.itemContainer, { backgroundColor: 'rgba(0,0,0,0.0)', resizeMode: 'cover' }]}
                      source={{uri: item.uri}}>
                      <LinearGradient
                          colors={['transparent', 'rgba(0,0,0,0.7)']}
                          style={{
                              justifyContent: 'flex-end',
                              position: 'relative',
                              left: 0,
                              right: 0,
                              top: 0,
                              height: (240 * 0.40),
                          }}>
                          <View style={{alignItems: 'center'}}>
                            <Text style={styles.itemName}>{item.name}</Text>
                          </View>
                          </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
                </View>
            )}
          />
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1, width: null,
    height: height - (height * 0.60),
    resizeMode: 'cover',
    justifyContent: 'flex-end'
    
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
});