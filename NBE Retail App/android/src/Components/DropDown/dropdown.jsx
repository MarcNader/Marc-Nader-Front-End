import {useState} from 'react';
import {View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './dropdown.styles';

const DropdownComponent = ({data, title}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.dropdownContainer}>
      <View
        style={[
          {backgroundColor: 'white', borderRadius: 10, marginBottom: 20},
          isFocus && {borderColor: 'green', borderWidth: 1.5},
        ]}>
        <Text style={styles.Title}>{title}</Text>
        <Dropdown
          style={[styles.dropdown]}
          activeColor={'orange'}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};
export default DropdownComponent;
