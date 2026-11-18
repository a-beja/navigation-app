import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    children: string;
    color: 'primary' | 'secondary' | 'sec-100' | 'sec-200' | 'tertiary';
}

const CustomButton = ({ children = '', color = 'primary', onPress, onLongPress }: Props) => { 

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        'sec-100': 'bg-secondary-100',
        'sec-200': 'bg-secondary-200',
        tertiary: 'bg-tertiary',
    }[color];


    return (
        <Pressable 
            className={`p-3 rounded-md ${btnColor} active:opacity-90`}
            onPress={ onPress }
            onLongPress={ onLongPress }
        >
            <Text className='text-white text-center'>
            { children }
            </Text>
        </Pressable>
    )
}

export default CustomButton 