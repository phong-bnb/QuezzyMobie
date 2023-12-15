import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const navigate = (routeName: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate({
      name: routeName,
      params,
    } as never);
  }
};
const reset = (routes: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes,
      }),
    );
  }
};

/**
 * The NavigationService contains utilities to help us navigate to different screen from redux or in some other service
 * From the component, it's best to use: this.props.navigation, don't use this service
 */
export default {
  navigate,
  reset,
};
