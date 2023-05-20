import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ExpoFastImage from "expo-fast-image";
import Hyperlink from "react-native-hyperlink";
import SkeletonContent from "react-native-skeleton-content";
import FlashMessage from "react-native-flash-message";
import Carousel from "react-native-reanimated-carousel";

// data

const explore = [
  {
    id: 1,
    user_id: {
      id: 11,
      username: "JeremyMonday",
      lat: 51.5072178,
      long: -0.1275862,
      joined_at: "2022-08-11T10:02:29.598000",
      is_verified: true,
      is_group: false,
      bio: "The London jazz/swing singer with a huge voice that will melt your heart",
      cat_one: "Singer",
      cat_two: "Manager",
      profile_pic: "f21f0889-893b-4640-a668-e88db4741fbc.jpg",
    },
    industry_one: "MUSIC",
    industry_two: "MEDIA",
    industry_three: "BUSINESS",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 1,
        user_id: 11,
        skill_one: "Singer",
        skill_two: "Manager",
        skill_three: "Producer",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 2,
    user_id: {
      id: 25,
      username: "Shivver",
      lat: 51.763366,
      long: -0.22309,
      joined_at: "2022-08-11T10:02:31.802000",
      is_verified: true,
      is_group: false,
      bio: "u",
      cat_one: "DJ",
      cat_two: "u",
      profile_pic: "09fc7ec6-3779-4d5f-b82d-9f8612dae72f.jpg",
    },
    industry_one: "MUSIC",
    industry_two: "BUISNESS",
    industry_three: "ART",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 2,
        user_id: 25,
        skill_one: "DJ",
        skill_two: "",
        skill_three: "",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 3,
    user_id: {
      id: 26,
      username: "ElliottFrampton",
      lat: 51.412626,
      long: 0.077487,
      joined_at: "2022-08-11T10:02:31.947000",
      is_verified: true,
      is_group: false,
      bio: "Connect.Collaborate.Create",
      cat_one: "Music Producer",
      cat_two: "Drummer",
      profile_pic: "511f5a75-e3f8-4e69-9702-92ca0206ce42.jpg",
    },
    industry_one: "MUSIC",
    industry_two: "BUSINESS",
    industry_three: "FASHION",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 3,
        user_id: 26,
        skill_one: "Music Producer",
        skill_two: "Drummer",
        skill_three: "",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 4,
    user_id: {
      id: 29,
      username: "Allygoodman",
      lat: 51.5390261,
      long: -0.1425516,
      joined_at: "2022-08-11T10:02:32.385000",
      is_verified: true,
      is_group: false,
      bio: "New York born, Paris educated, London based\n\nHistory of Art graduate and arts professional",
      cat_one: "Arts Professional",
      cat_two: "Independent Curator",
      profile_pic: "6a8b9ce6-e418-45f7-acdd-74dcccc7e1d1.jpg",
    },
    industry_one: "ART",
    industry_two: "FASHION",
    industry_three: "MEDIA",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 4,
        user_id: 29,
        skill_one: "Arts Professional",
        skill_two: "Independent Curator",
        skill_three: "Culinary Chef",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 5,
    user_id: {
      id: 30,
      username: "Zosia",
      lat: 51.5219526,
      long: -0.2580821,
      joined_at: "2022-08-11T10:02:32.509000",
      is_verified: true,
      is_group: false,
      bio: "I’m an artist based in London. I study at university of the arts London, Central Saint Martins.",
      cat_one: "Fine art",
      cat_two: "Photography",
      profile_pic: "dbcec7dc-5d38-4e9a-b53a-729c5d6a02e9.jpg",
    },
    industry_one: "ART",
    industry_two: "PHOTOGRAPHY",
    industry_three: "FASHION",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 5,
        user_id: 30,
        skill_one: "Fine art",
        skill_two: "Photography",
        skill_three: "",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 6,
    user_id: {
      id: 31,
      username: "Jawadat",
      lat: 51.5072178,
      long: -0.1275862,
      joined_at: "2022-08-11T10:02:32.662000",
      is_verified: true,
      is_group: false,
      bio: "I am a London based photographer and visual artist. \nA very friendly, positive person and professional. \nI quit my health career to purse my hobby and I’m glad I did! ❤️",
      cat_one: "Photography",
      cat_two: "Visual Artist",
      profile_pic: "5493bd29-67a4-411b-b0b7-d8408d594b76.jpg",
    },
    industry_one: "PHOTOGRAPHY",
    industry_two: "",
    industry_three: "",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 6,
        user_id: 31,
        skill_one: "Photography",
        skill_two: "Visual Artist",
        skill_three: "",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 7,
    user_id: {
      id: 32,
      username: "O-DOG",
      lat: 51.5072178,
      long: -0.1275862,
      joined_at: "2022-08-11T10:02:32.795000",
      is_verified: true,
      is_group: false,
      bio: "Creative Director of MDRN",
      cat_one: "Creative Director",
      cat_two: "Graphic Design",
      profile_pic: "520cff8a-ade4-4025-b870-ee6c149df2c8.jpg",
    },
    industry_one: "FASHION",
    industry_two: "MUSIC",
    industry_three: "BUISNESS",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 7,
        user_id: 32,
        skill_one: "Creative Director",
        skill_two: "Graphic Design",
        skill_three: "",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 8,
    user_id: {
      id: 33,
      username: "alexdawsonbanson",
      lat: 51.903761,
      long: -0.196612,
      joined_at: "2022-08-11T10:02:32.939000",
      is_verified: true,
      is_group: false,
      bio: "Hey! I'm Alex, a multi-disciplinary creative based in Hertfordshire/London. I'm interested in a lot of different areas but I mostly do graphic design and make mixed media art. Feel free to drop me a message!",
      cat_one: "multi-disciplinary creative",
      cat_two: "graphic designer",
      profile_pic: "d92b5c50-81d6-48dc-9cff-05bc0b781e3c.jpg",
    },
    industry_one: "FASHION",
    industry_two: "ART",
    industry_three: "OTHER",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 8,
        user_id: 33,
        skill_one: "Multi-Disciplinary Creative",
        skill_two: "Graphic Designer",
        skill_three: "Mixed Media Artist",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 9,
    user_id: {
      id: 34,
      username: "RuthRicardo",
      lat: 51.5072178,
      long: -0.1275862,
      joined_at: "2022-08-11T10:02:33.061000",
      is_verified: true,
      is_group: false,
      bio: "I am smiley, humble, down to earth, straight forward, adventurous, tomboyish and always have a curious soul. \n\nI have a passion for music and modelling and travelling too.",
      cat_one: "Model",
      cat_two: "Singer/Songwriter",
      profile_pic: "7adf70a4-1b1a-4337-9e53-432f79f552ea.jpg",
    },
    industry_one: "FASHION",
    industry_two: "MUSIC",
    industry_three: "BUISNESS",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 9,
        user_id: 34,
        skill_one: "Model",
        skill_two: "Singer/Songwriter",
        skill_three: "",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
  {
    id: 10,
    user_id: {
      id: 35,
      username: "HydroFontaine",
      lat: 51.5072178,
      long: -0.1275862,
      joined_at: "2022-08-11T10:02:33.184000",
      is_verified: true,
      is_group: false,
      bio: "Hydro Fontaine is an Artist, producer and designer born in Barcelona, Spain. His music style is driven by distinctive space melodies and experimental sounds.\n\nInsta - hydrofontaine",
      cat_one: "Recording Artist",
      cat_two: "Record Producer",
      profile_pic: "089e1c0e-3461-41ae-9724-943431211564.jpg",
    },
    industry_one: "MUSIC",
    industry_two: "",
    industry_three: "",
    industry_four: "",
    industry_five: "",
    skills: [
      {
        id: 10,
        user_id: 35,
        skill_one: "Recording Artist",
        skill_two: "Record Producer",
        skill_three: "",
        skill_four: "",
        skill_five: "",
      },
    ],
  },
];

// card component

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const isCarousel = React.useRef(null);

const CarouselCardItem = ({ item, index }) => {
  let image =
    item?.user_id.profile_pic?.indexOf("https") === -1 &&
    item?.user_id.profile_pic !== null &&
    item?.user_id.profile_pic !== ""
      ? `https://mdrn-dev-01.s3.amazonaws.com/media/${item?.user_id.profile_pic}`
      : item?.user_id.profile_pic;
  if (item?.user_id.profile_pic === null || item?.user_id.profile_pic === "") {
    image = null;
  }

  return (
    <View style={styles.container}>
      <SkeletonContent
        isLoading={refreshing}
        containerStyle={{ flex: 1, height: "100%" }}
        layout={[cardLayout]}
      >
        <Carousel
          loop
          width={width}
          height={width / 2}
          // autoPlay={true}
          data={explore}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item, index }) => (
            <View style={{ marginTop: hp(0) }}>
              <View style={[styles.modalTop, { borderWidth: 0 }]}>
                <ExpoFastImage
                  style={[styles.modalBackground]}
                  source={{
                    uri:
                      image !== null && image !== ""
                        ? image
                        : "https://mdrn-dev-01.s3.amazonaws.com/media/3efa428a-0abc-4455-877b-8fcfe67f1a93.png",
                  }}
                  resizeMode="cover"
                />

                <View style={styles.info}>
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginRight: "3%",
                    }}
                  >
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={[
                        styles.modalHeading,
                        {
                          fontWeight: "bold",
                        },
                      ]}
                    >
                      {item.user_id.username}
                    </Text>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={[
                        styles.modalHeading,
                        { fontWeight: "bold", fontSize: 18 },
                      ]}
                    >
                      {item.user_id.cat_one} / {item.user_id.cat_two}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.modalBottom}>
                <Hyperlink linkDefault={true} linkStyle={{ color: "#2980b9" }}>
                  <Text
                    maxFontSizeMultiplier={1.1}
                    style={[
                      styles.bio,
                      {
                        fontSize: item.user_id.bio.length > 256 ? 14 : 16,
                        marginHorizontal:
                          item.user_id.bio.length > 256 ? 0 : 20,
                      },
                    ]}
                  >
                    {item.user_id.bio}
                  </Text>
                </Hyperlink>
                <View style={styles.bottomSegment}>
                  <View style={styles.modalLeft}>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#191818",
                        marginRight: 15,
                      }}
                    >
                      <Text
                        maxFontSizeMultiplier={1.1}
                        style={[styles.modalHeadingTwo, { marginBottom: "2%" }]}
                      >
                        INDUSTRIES
                      </Text>
                    </View>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item?.industry_one}
                    </Text>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item?.industry_two}
                    </Text>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item?.industry_three}
                    </Text>
                  </View>
                  <View style={styles.modalRight}>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#191818",
                        marginRight: 15,
                      }}
                    >
                      <Text
                        maxFontSizeMultiplier={1.1}
                        style={[
                          styles.modalHeadingTwo,
                          {
                            fontWeight: "bold",
                            marginBottom: "2%",
                          },
                        ]}
                      >
                        PROFESSIONS
                      </Text>
                    </View>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item.skills[0].skill_one}
                    </Text>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item.skills[0].skill_two}
                    </Text>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item.skills[0].skill_three}
                    </Text>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item.skills[0].skill_four}
                    </Text>
                    <Text
                      maxFontSizeMultiplier={1.1}
                      style={styles.modalLeftText}
                    >
                      {item.skills[0].skill_five}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignSelf: "center",
                  flexDirection: "row",
                  marginBottom: hp("10%"),
                  marginTop: hp("-8%"),
                  marginRight: wp(5),
                  marginLeft: wp(5),
                  backgroundColor: "white",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    saveUser(item);
                    showMessage({
                      message: `Saved ${item.user_id.username}`,
                      type: "success",
                    });
                  }}
                  style={{
                    marginRight: "20%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    maxFontSizeMultiplier={1.1}
                    style={[styles.buttonText, { color: "#000" }]}
                  >
                    SAVE
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    if (item.user_id.id == user) {
                      props.navigation.jumpTo("Profile", {
                        user: user,
                        id: user,
                        edit: true,
                      });
                    } else {
                      props.navigation.navigate("OtherUserProfile", {
                        id: item.user_id.id,
                        username: item.user_id.username,
                      });
                    }
                  }}
                  style={{
                    marginRight: "20%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    maxFontSizeMultiplier={1.1}
                    style={[
                      styles.buttonText,
                      { color: "#000", marginLeft: "0%" },
                    ]}
                  >
                    VIEW
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={async () => {
                    let arr = [parseInt(user)];
                    if (parseInt(user) > parseInt(item.user_id.id)) {
                      arr[0] = item.user_id.id;
                      arr[1] = user;
                    } else {
                      arr[0] = user;
                      arr[1] = item.user_id.id;
                    }
                    await saveConversation(
                      `${arr[0]}-${arr[1]}`,
                      item.user_id.username
                    );
                    props.navigation.navigate("ConversationsList", {
                      roomId: `${arr[0]}-${arr[1]}`,
                    });
                  }}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text
                    maxFontSizeMultiplier={1.1}
                    style={[styles.buttonText, { color: "#000" }]}
                  >
                    CONTACT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </SkeletonContent>
      <FlashMessage position="top" />
    </View>
  );
};

// styles

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "GilroyBold",
    marginLeft: 3,
    color: "#fff",
    alignSelf: "center",
    fontSize: 13.65,
  },
  modalLeftText: {
    color: "#000",
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 5,
    fontFamily: "Gilroy",
  },
  modalRightText: {
    color: "#000",
    fontSize: 19,
    alignSelf: "center",
    marginTop: 0,
    fontFamily: "Avenir-Heavy",
  },
  modalHeading: {
    color: "#fff",
    fontSize: 26,
    alignSelf: "flex-start",
    marginTop: 3,
    fontWeight: "bold",
    marginLeft: "5%",
    letterSpacing: 0,
    fontFamily: "GilroyBold",
    textShadowColor: "#000",
    textShadowRadius: 3,
  },
  modalHeadingTwo: {
    color: "#000",
    fontSize: 16,
    alignSelf: "flex-start",
    marginTop: 5,
    fontWeight: "bold",
    letterSpacing: 0,
    fontFamily: "GilroyBold",
  },
  modalLeft: {
    flex: 1,
    marginLeft: "-3.5%",
    borderRightColor: "#fff",
  },
  modalRight: {
    flex: 1,
    marginRight: "-8%",
  },
  modalTop: {
    height: hp(30),
    width: wp(90),
    alignSelf: "center",
  },
  bio: {
    fontFamily: "Gilroy",
    fontSize: 16.5,
    padding: 2,
    marginBottom: "10%",
    marginTop: hp("1%"),
    backgroundColor: "#f7faf8",
    marginLeft: 8.5,
    backgroundColor: "white",
  },
  bottomSegment: {
    flexDirection: "row",
    alignSelf: "center",
    width: 304,
    height: "50%",
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    marginTop: -25,
  },
  newButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "23%",
    marginRight: "13%",
  },
  newButtonText: {
    fontSize: 16,
    fontFamily: "GilroyBold",
    alignSelf: "center",
    marginBottom: "-1%",
  },
  modalBottom: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: "#352525",
    justifyContent: "flex-start",
    alignSelf: "center",
    backgroundColor: "#f7faf8",
    marginLeft: 1,
    width: wp(90),
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: hp("55%"),
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,

    backgroundColor: "white",
  },
  modalBackground: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalStyle: {
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: hp("4%"),
    marginBottom: hp("2%"),
  },

  info: {
    marginTop: hp("-10%"),
  },
  exploreText: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "flex-start",
    textShadowColor: "#000",
    textShadowRadius: 3,
  },
  exploreBackground: {
    width: wp("95%"),
    height: hp("38%"),
    marginBottom: "3%",
  },
  content: {
    borderWidth: 1,
    borderColor: "#e52525",
    backgroundColor: "#f7faf8",
    width: "95%",
    height: "75%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  modalProfileImage: {
    height: 85,
    width: 85,
    borderRadius: 42,
    alignSelf: "flex-start",
    marginLeft: "4%",
  },
  modalText: {
    color: "#000",
    fontSize: 12,
    alignSelf: "center",
    marginTop: 5,
    fontFamily: "Gilroy",
  },
  modalInfo: {
    color: "#242424",
    fontSize: 18,
    alignSelf: "center",
    marginTop: 5,
    fontFamily: "Gilroy",
  },

  followContainer: {
    width: 60,
    borderRadius: 15,
    alignSelf: "center",
    margin: "2%",
    marginTop: "5%",
    backgroundColor: "#4daa22",
    alignItems: "center",
  },
  follow: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    marginBottom: "20%",
    flex: 1,
  },
  textBox: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: "10%",
  },
  imageBox: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  item: {
    backgroundColor: "#191818",
    flex: 1,
    margin: "5%",
    borderRadius: 10,
    padding: 10,
  },
  itemText: {
    color: "#000",
    fontFamily: "Helvetica-Light",
    fontSize: 16,
    alignSelf: "center",
    marginTop: "3%",
  },
  headingStyle: {
    color: "#000",
    fontFamily: "Helvetica-Light",
    fontSize: 24,
    alignSelf: "center",
    marginTop: "3%",
  },
  imageList: {
    marginBottom: 10,
    height: hp(100),
  },
  footer: {
    marginTop: hp(80),
    height: "110%",
    width: "110%",
    marginRight: "5%",
    marginLeft: "-5%",
    position: "absolute",
  },
  buttonContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 180,
    marginBottom: 0,
    marginTop: -107,
  },
  selector: {
    flexDirection: "row",
    justifyContent: "center",
  },
  searchBar: {
    height: 60,
    flexDirection: "row",
    width: 351,
    margin: 1,
    marginLeft: 4,
    color: "white",
    borderRadius: 14,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    justifyContent: "center",
  },
  topRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  midRow: {
    flexDirection: "row",
  },
  botRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  img1: {
    width: 115,
    height: 115,
    margin: 2,
    borderRadius: 15,
  },
  img2: {
    width: 115,
    height: 115,
    margin: 2,
    borderRadius: 15,
  },
  img3: {
    width: 115,
    height: 115,
    margin: 2,
    borderRadius: 15,
  },
  input: {
    width: "85%",
    height: "80%",
    margin: 10,
    padding: 10,
    marginLeft: 4,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Helvetica Neue",
    alignSelf: "center",
  },
  iconStyle: {
    fontSize: 24,
    height: 22,
    color: "white",
    alignSelf: "center",
  },
  profileImage: {
    alignSelf: "center",
    height: 110,
    width: 110,
    borderRadius: 65,

    marginBottom: -20,
  },
  navContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  navElement: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  textStyle: {
    color: "#fff",
    fontFamily: "Helvetica-Light",
  },
});

export default CarouselCardItem;
