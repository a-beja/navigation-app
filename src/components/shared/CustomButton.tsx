import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
    children: string;
    color: 'primary' | 'secondary' | 'sec-100' | 'sec-200' | 'tertiary';
}

const CustomButton = ({ children = '', color = 'primary' }: Props) => { 

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        'sec-100': 'bg-secondary-100',
        'sec-200': 'bg-secondary-200',
        tertiary: 'bg-tertiary',
    }[color];


    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor}`}
        >
            <Text>
            { children }
            </Text>
        </Pressable>
    )
}

export default CustomButton 