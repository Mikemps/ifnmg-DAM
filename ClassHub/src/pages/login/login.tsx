import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { themes } from "../../global/themes";
import { style } from "./styles";
import Logo from "../../../assets/logo.png";
import IconApple from "../../../assets/Apple.png";
import IconGmail from "../../../assets/logos_google-gmail.png";

export default function Login() {
  const [pressionadoGmail, setPressionadoGmail] = useState<boolean>(false);
  const [pressionadoApple, setPressionadoApple] = useState<boolean>(false);

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
      </View>

      <View style={style.boxBotton1}>
        <TouchableOpacity
          style={[
            style.button1,
            { backgroundColor: pressionadoGmail ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoGmail(true)}
          onPressOut={() => setPressionadoGmail(false)}
        >
          <Image
            source={IconGmail}
            style={{ width: 30, height: 23, marginRight: 10, left: 5 }}
            resizeMode="contain"
          />
          <Text style={style.textButton1}>Entrar com Gmail</Text>
        </TouchableOpacity>
      </View>

      <View style={style.boxBotton2}>
        <TouchableOpacity
          style={[
            style.button2,
            { backgroundColor: pressionadoApple ? themes.colors.primary : themes.colors.secondary },
          ]}
          onPressIn={() => setPressionadoApple(true)}
          onPressOut={() => setPressionadoApple(false)}
        >
          <Image
            source={IconApple}
            style={{ width: 30, height: 28, marginRight: 10, left: 5 }}
            resizeMode="contain"
          />
          <Text style={style.textButton2}>Entrar com ID Apple</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}