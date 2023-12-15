import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../components/utils/Navigation';
import {useNavigation} from '@react-navigation/native';

const useAppNavigation = useNavigation<StackNavigationProp<RootStackParamList>>;
export default useAppNavigation;
