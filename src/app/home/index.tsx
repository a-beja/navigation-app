import CustomButton from '@/components/shared/CustomButton';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>


        <CustomButton color='primary'>Productos</CustomButton>

        {/* <Link className='mb-5' href='/products'>
          Productos{' '}
        </Link>
        <Link className='mb-5' href='/profile'>
          Perfil{' '}
        </Link>
        <Link className='mb-5' href='/settings'>
          Ajustes{' '}
        </Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;