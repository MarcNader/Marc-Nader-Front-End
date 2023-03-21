import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  Touchable,
} from 'react-native';
import Modal from 'react-native-modal';
import {fetchData} from '../../Util/http';
import styles from './ModalPop.style';
const ModalPop = ({isVisible}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.Container}>
          <View style={styles.HeaderContainer}>
            <Image
              source={require('../../assets/images/MissionComplete.png')}
            />

            <Text style={styles.Header}>Mission Complete</Text>
            <Text style={styles.SubHeader}>
              Transfer to Jsmine Robert was successful
            </Text>
          </View>

          <TouchableOpacity
            style={styles.CustomFinish}
            onPress={() => {
              isVisible(false);
            }}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPop;
