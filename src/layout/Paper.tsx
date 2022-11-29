import { StyleSheet, Text, View } from 'react-native';

export const Paper = () => {
  return (
    <View style={styles.container}>
        <View style={styles.paper}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet urna neque, in maximus velit egestas a. Cras id consequat purus. Pellentesque commodo sagittis mauris, ac euismod velit tincidunt at. Sed nisl enim, iaculis eu pharetra sit amet, tempus non sem. Quisque sodales dolor ut metus volutpat, eu iaculis nunc suscipit. Mauris gravida quam orci, in pellentesque nisi interdum sit amet. Donec laoreet mi non nibh pellentesque venenatis. Nullam justo felis, iaculis ac lacus vitae, eleifend dictum odio.

Quisque vitae interdum nisi, eget pellentesque nulla. Praesent porta dictum sem. Morbi scelerisque magna quam, vel cursus erat elementum quis. Pellentesque sagittis diam id dignissim ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non erat pulvinar, tincidunt lorem vitae, imperdiet magna. Praesent suscipit leo risus, dignissim interdum est lacinia non. Fusce eget arcu et quam fermentum tristique. Proin imperdiet pretium dolor, a interdum lacus laoreet eget. Cras nec nunc in orci venenatis eleifend sit amet nec velit. Nam vehicula pretium diam, ac tempus ligula congue non.

Nullam commodo urna leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vulputate, purus egestas aliquet tincidunt, nisi diam convallis nisl, a ultricies orci odio nec elit. Nulla eu eleifend elit, a tempus lectus. Sed ac lacus interdum, varius felis quis, posuere massa. Maecenas leo dolor, dictum ut bibendum cursus, egestas ac diam. Suspendisse orci risus, semper tempor purus quis, viverra consequat eros. Aliquam ultricies quis massa et tincidunt. Vestibulum consequat turpis sit amet dapibus rhoncus. Pellentesque cursus lectus ex, sed tristique tortor vulputate in. Nulla nec nisl in ipsum dapibus malesuada. Cras ornare fringilla scelerisque. In non est nunc. Etiam magna est, facilisis tempus volutpat sed, fermentum id lacus. Nam auctor orci in venenatis accumsan.

Suspendisse potenti. Nulla facilisi. Vivamus et elit cursus, pellentesque diam eget, semper ex. Vivamus sollicitudin eros eget nulla ultrices, vitae semper lectus egestas. Nunc auctor scelerisque gravida. Quisque pharetra felis ut turpis posuere, nec blandit urna elementum. Nunc sit amet viverra turpis. Maecenas vestibulum sagittis consequat. Suspendisse pellentesque iaculis vestibulum. Morbi arcu ante, elementum eget sapien at, lacinia ultricies elit. Fusce ac risus vehicula, faucibus nisi convallis, placerat sapien. Fusce consequat turpis nulla, nec molestie dui tempor at. Proin tincidunt nunc non porttitor tristique.

Cras ex velit, rutrum ut eleifend vel, fringilla vel orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Pellentesque at placerat turpis, non pellentesque justo. Cras ultricies vel lacus eget eleifend. Ut rutrum nibh nulla, id fermentum mauris ultricies ac. Morbi ac dolor non ante pretium fringilla. Quisque at leo quis lorem egestas laoreet eu a neque. Duis egestas lorem nulla, sit amet tincidunt diam ultrices vitae. Nunc massa erat, egestas sed nisi et, molestie condimentum urna. Fusce porta ipsum sagittis libero sagittis, tempus lobortis nunc imperdiet. Nullam accumsan ultrices malesuada. Etiam non viverra elit. Nulla eget pulvinar mauris. Morbi non eleifend dolor, at lobortis enim. Nulla molestie libero dolor, et ultrices nisl semper vel.</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        alignSelf: 'stretch',
    },
    paper: {
        marginVertical: 45,
        marginHorizontal: 75
    },
    text: {
        textAlign: 'justify',
        fontSize: 22,
        fontFamily: "Times New Roman",
    },
});