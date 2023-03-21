import {View, Text, TouchableOpacity, Button, Image} from 'react-native';
import Modal from 'react-native-modal';
import {fetchData} from '../../Util/http';
import styles from './ModalPop.style';
const ModalPop = ({isVisible}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.Container}>
          {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            I am the modal content!
          </Text> */}

          <Image source={require('../../assets/images/MissionComplete.png')} />

          <Text style={styles.Header}>Mission Complete</Text>
          <Text style={styles.SubHeader}>
            Transfer to Jsmine Robert was successful
          </Text>
          <Button
            title="Hide Modal"
            onPress={() => {
              isVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalPop;
