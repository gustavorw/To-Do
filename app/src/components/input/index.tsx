import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Colors } from "../../constants/colors";

type Props = {
    value: string,
    onChangeText: (text: string) => void,

}

export default function Input({ value, onChangeText }: Props) {
    const [isEnabled, setIsEnabled] = useState(false);
    function handleToggle() { setIsEnabled(!isEnabled); }
    return (
        <View style={styles.container}>

            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={[
                    styles.input,
                    isEnabled ? styles.enable : styles.disable
                ]}
                onPress={handleToggle}
                editable={isEnabled}
                onFocus={() => setIsEnabled(true)}
                onBlur={() => setIsEnabled(false)}
                placeholder="Adicione uma tarefa"
                placeholderTextColor={Colors.gray300}
            />


        </View>
    )
}