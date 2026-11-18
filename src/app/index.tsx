import { Redirect } from 'expo-router';


const App = () => {

  return <Redirect href='/home' />

  // return (
  //   <View className="flex-1 items-center justify-center bg-white">
  //     <Text className="text-blue-500 font-work-medium">
  //       Welcome to Nativewind!
  //     </Text>

  //     <Text className='text-primary font-work-medium'>Hola Mundo</Text>

  //     <Link href='/products'>Productos</Link>

  //   </View>
  // )
}

export default App;