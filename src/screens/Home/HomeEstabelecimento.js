import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Divider,
  HStack,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth";

function HomeEstabelecimento() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const handleNavigateFooter = (page) => {
    navigation.navigate(page);
  };

  return (
    <VStack safeArea flex={1} bg="coolGray.50">
      <ScrollView>
        <HStack h="100px" w="100%">
          <VStack ml={1} mt={2}>
            <Text fontSize="md" color="grayLocal">
              Olá,
            </Text>
            <Text fontSize="lg" fontWeight="bold" mt={1}>
              {user.name}
            </Text>
          </VStack>
          <Box w="100%" mt={2} alignItems="center" flexDirection="column">
            <Avatar bg="amber.500" size="md" source={{ uri: user.imagem }}>
              Usuário
            </Avatar>
          </Box>
        </HStack>
        <BarChartComponent />
        <Divider my={5} />
        <Box w="100%" alignItems="center" justifyContent="center">
          <PieChartComponent />
        </Box>
      </ScrollView>
      <Footer onPressItem={handleNavigateFooter} />
    </VStack>
  );
}

function BarChartComponent() {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <BarChart
      //   style={graphStyle}
      data={data}
      width={screenWidth / 1.1}
      height={300}
      yAxisLabel="R$"
      chartConfig={chartConfig}
      verticalLabelRotation={30}
    />
  );
}

function PieChartComponent() {
  const screenWidth = Dimensions.get("window").width;
  const theme = useTheme();
  const data = [
    {
      name: "Usúarios cadastrados",
      visualizacoes: 30,
      color: theme.colors.grayLocal,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Usuários não cadastrados",
      visualizacoes: 50,
      color: theme.colors.secondaryLocal,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <PieChart
      data={data}
      width={screenWidth / 1.1}
      height={220}
      chartConfig={chartConfig}
      accessor={"visualizacoes"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[10, 10]}
      //   absolute
    />
  );
}

const chartConfig = {
  backgroundGradientFrom: "#e0e0e0",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFF",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(251, 122, 110, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default HomeEstabelecimento;
