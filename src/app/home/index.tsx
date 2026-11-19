import CustomButton from '@/components/shared/CustomButton';
import { router } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>

        <CustomButton color='primary' variant='contained' onPress={ () => router.push('/products')}>
          Productos
        </CustomButton>

        <CustomButton color='secondary' variant='text-only' onPress={ () => router.push('/products')}>
          Productos
        </CustomButton>

        
        {/* <Link className='mb-5' href='/settings'> Ajustes{' '} </Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;