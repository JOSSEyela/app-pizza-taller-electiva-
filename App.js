import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const UserProfile = () => {
  const userImage =
  "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60"

  const handleMenuPress = () => {
    console.log('Abrir menú');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleMenuPress}
        style={styles.menuIconContainer}>
        <Image
          source={{
            uri:
              'https://st4.depositphotos.com/21557188/23280/v/1600/depositphotos_232807102-stock-illustration-simple-list-menu-icon-transparent.jpg',
          }}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <Image source={{ uri: userImage }} style={styles.userImage} />
      <Text style={styles.foodText}>food</Text>
      <Text style={styles.deliveryText}>Delivery</Text>
      <SearchBar />
      <Text style={styles.categoriesText}>Categories</Text>
      <View style={styles.cuadroContainer}>
        <CuadroWithImage
          imageUrl="https://media.istockphoto.com/id/1413684626/es/foto/pizza-cl%C3%A1sica-de-pepperoni-con-rodajas-cortadas-aisladas-sobre-blanco.jpg?s=612x612&w=0&k=20&c=sRqDuGavS_WukbnmBJpYmowthzEPMWhYOfjLl3HUUts="
          buttonText=">"
          textColor="white"
        />
        <CuadroWithImage
          imageUrl="https://s1.eestatic.com/2021/10/08/ciencia/nutricion/617950702_211132997_1706x960.jpg"
          buttonText=">"
          textColor="white"
        />
        <CuadroWithImage
          imageUrl="https://www.recetasnestlecam.com/sites/default/files/2023-02/plato-receta-cazuela-de-mariscos.jpg"
          buttonText=">"
          textColor="white"
          customText="Seafood"
        />
      </View>
      <View style={styles.duplicatedSectionContainer}>
        <PopularSection />
      </View>
      <View style={styles.animatedRectangle2}>
        <PopularSection2 />
      </View>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/009/538/545/non_2x/magnifying-glass-search-icon-free-vector.jpg"
        }}
        style={styles.lupaIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

const CuadroWithImage = ({ imageUrl, buttonText, textColor, customText }) => {
  return (
    <View style={styles.cuadro}>
      <Image source={{ uri: imageUrl }} style={styles.cuadroImage} />
      <Text style={[styles.pizzaText, { color: textColor }]}>
        {customText || 'Pizza'}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { color: textColor }]}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const PopularSection = ({ showTitle = true }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Rect clicked. Navigating to Details...')}
      style={[styles.popularSection, styles.animatedRectangle]}>
      {showTitle && <Text style={styles.popularText}>Popular</Text>}
      <Image
        source={{
          uri:
          "https://img.freepik.com/vector-gratis/icono-decorativo-clasico-corona-dorada_18591-82025.jpg"
        }}
        style={styles.topOfWeekImage}
      />
      <View style={styles.rectangle}>
        <Text style={styles.topOfWeekText}>Top of the Week</Text>
        <Text style={styles.primaveraPizzaText}>Primavera Pizza</Text>
        <Text style={styles.weightText}>Weight 450 gr</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
        <View style={styles.extraInfoContainer}>
          <Image
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/256/54/54583.png',
            }}
            style={styles.extraInfoIcon}
          />
          <Text style={styles.extraInfoText}>5.0</Text>
        </View>
      </View>
      <Image
        source={{
          uri:
          "https://media.product.which.co.uk/prod/images/original/fab41e2c49cc-leadpepperoni-pizza.jpg"
        }}
        style={styles.popularImage}
      />
    </TouchableOpacity>
  );
};

const PopularSection2 = ({ showTitle = true }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('Rect clicked. Navigating to Details...')}
      style={[styles.popularSection2, styles.animatedRectangle2]}>
      {showTitle && <Text style={styles.popularText2}></Text>}
      <Image
        source={{
          uri:
          "https://img.freepik.com/vector-gratis/icono-decorativo-clasico-corona-dorada_18591-82025.jpg"
        }}
        style={styles.topOfWeekImage2}
      />
      <View style={styles.rectangle2}>
        <Text style={styles.topOfWeekText2}>Top of the Week</Text>
        <Text style={styles.primaveraPizzaText2}>Primavera Pizza</Text>
        <Text style={styles.weightText2}>Weight 450 gr</Text>
        <TouchableOpacity style={styles.plusButton2}>
          <Text style={styles.plusButtonText2}>+</Text>
        </TouchableOpacity>
        <View style={styles.extraInfoContainer2}>
          <Image
            source={{
              uri:
              "https://media.product.which.co.uk/prod/images/original/fab41e2c49cc-leadpepperoni-pizza.jpg"
            }}
            style={styles.extraInfoIcon2}
          />
          <Text style={styles.extraInfoText2}>5.0</Text>
        </View>
      </View>
      <Image
        source={{
          uri:
          "https://media.product.which.co.uk/prod/images/original/fab41e2c49cc-leadpepperoni-pizza.jpg"
        }}
        style={styles.popularImage2}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  menuIconContainer: {
    position: 'absolute',
    top: 68,
    left: 331,
    padding: 6,
  },

  menuIcon: {
    width: 24,
    height: 24,
  },

  userImage: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 60,
    left: 20,
    borderRadius: 100,
  },

  foodText: {
    width: 51,
    height: 30,
    position: 'absolute',
    top: 120,
    left: 20,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },

  deliveryText: {
    width: 159,
    height: 70,
    position: 'absolute',
    top: 145,
    left: 20,
    fontFamily: 'Montserrat',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 39,
    letterSpacing: 0,
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: 'black',
    borderRadius: 5,
    padding: 5,
  },

  searchBarContainer: {
    position: 'absolute',
    top: 264,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  lupaIcon: {
    width: 50,
    height: 50,
    top: -55,
    left: -20,
  },

  searchInput: {
    flex: 1,
    width: 30,
    height: 17,
    top: -55,
    left: -25,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: 'black',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 5,
  },

  categoriesText: {
    width: 91,
    height: 20,
    position: 'absolute',
    top: 295,
    left: 20,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 11,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'black',
    borderRadius: 5,
    padding: 5,
  },

  cuadroContainer: {
    flexDirection: 'row',
    marginTop: 10,
    top: 70,
  },

  cuadro: {
    width: 105,
    height: 177,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    borderRadius: 25,
    marginTop: -100,
  },

  cuadroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    top: -1
  },

  pizzaText: {
    top: -45,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'transparent',
    padding: 9,
    borderRadius: 100,
    marginTop: -60,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },

  popularSection: {
    marginTop: 20,
    top: 50,
  },
  popularText: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: -190,
    fontFamily: 'Montserrat',
    marginBottom: -20,
    top: 20,
  },
  rectangle: {
    width: 347,
    height: 150,
    left: -150,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 25,
    zIndex: 1,
    top: 20,
  },
  animatedRectangle: {
    animationTimingFunction: 'ease-out',
    animationDuration: 300,
  },
  plusButton: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    backgroundColor: 'yellow',
    width: 75,
    height: 45,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    top: 103,
  },
  plusButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  topOfWeekImage: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 73,
    left: -145,
    zIndex: 1,
  },
  topOfWeekText: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: 20,
    top: 20,
    fontFamily: 'Montserrat',
  },
  primaveraPizzaText: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: 20,
    top: 50,
    fontFamily: 'Montserrat',
  },
  weightText: {
    fontSize: 14,
    position: 'absolute',
    left: 20,
    top: 80,
    fontFamily: 'Montserrat',
  },
  popularImage: {
    width: 347,
    height: 150,
    position: 'absolute',
    marginTop: 30,
    borderRadius: 100,
    zIndex: 1,
    top: 20,
  },

  extraInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 2,
    left: 90,
  },
  extraInfoIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  extraInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  popularSection2: {
    marginTop: 20,
  },
  popularText2: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: -190,
    fontFamily: 'Montserrat',
    marginBottom: -20,
    top: 230,
  },
  rectangle2: {
    width: 347,
    height: 150,
    left: -150,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 25,
    zIndex: 1,
    top: 240,
  },
  animatedRectangle2: {
    animationTimingFunction: 'ease-out',
    animationDuration: 300,
  },
  plusButton2: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    backgroundColor: 'yellow',
    width: 75,
    height: 45,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    top: 240,
  },
  plusButtonText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  topOfWeekImage2: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 293,
    left: -145,
    zIndex: 1,
  },
  topOfWeekText2: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: 20,
    top: 20,
    fontFamily: 'Montserrat',
  },
  primaveraPizzaText2: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    left: 20,
    top: 50,
    fontFamily: 'Montserrat',
  },
  weightText2: {
    fontSize: 14,
    position: 'absolute',
    left: 20,
    top: 80,
    fontFamily: 'Montserrat',
  },
  popularImage2: {
    width: 347,
    height: 150,
    position: 'absolute',
    marginTop: 30,
    borderRadius: 100,
    zIndex: 1,
    top: 240,
  },

  extraInfoContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 2,
    left: 90,
  },
  extraInfoIcon2: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  extraInfoText2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;