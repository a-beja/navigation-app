import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    children: string;
    color: 'primary' | 'secondary' | 'sec-100' | 'sec-200' | 'tertiary';
    variant: 'contained' | 'text-only';
}

const CustomButton = ({ 
    children = '', 
    color = 'primary', 
    variant = 'contained',
    onPress, 
    onLongPress,
}: Props) => { 

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        'sec-100': 'bg-secondary-100',
        'sec-200': 'bg-secondary-200',
        tertiary: 'bg-tertiary',
    }[color];

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        'sec-100': 'text-secondary-100',
        'sec-200': 'text-secondary-200',
        tertiary: 'text-tertiary',
    }[color];


    if( variant === 'text-only' ){
        return (
            <Pressable 
            className={`p-3`}
            onPress={ onPress }
            onLongPress={ onLongPress }
        >
            <Text className={`text-center ${textColor} font-work-Medium`}>
            { children }
            </Text>
        </Pressable>
        );
    }


    return (
        <Pressable 
            className={`p-3 rounded-md ${btnColor} active:opacity-90`}
            onPress={ onPress }
            onLongPress={ onLongPress }
        >
            <Text className='text-white text-center font-work-Medium'>
            { children }
            </Text>
        </Pressable>
    )
}

export default CustomButton 