
import { useState } from 'react';
import { View, Text} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import styles from "./dropdown.styles"

const DropdownComponent=({data, title})=> {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  return (
  
      <View style={{marginTop:15, marginStart:25, flexDirection:'column', borderRadius:15}}>
              
              <View style={{backgroundColor:'white', marginEnd:20, borderRadius:12}}>
                  <Text style={{backgroundColor:'white', color:'black', paddingTop:10, paddingBottom:10, marginStart:20}}>{title}
                  </Text>
                  <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
            
  )
}
export default DropdownComponent