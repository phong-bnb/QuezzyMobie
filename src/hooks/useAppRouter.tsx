import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../components/utils/Navigation';

const useAppRoute = useRoute<RouteProp<RootStackParamList>>;
export default useAppRoute;
