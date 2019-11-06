import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function reset(routeName, params, action) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params, action })],
    })
  )
}

function customReset(routeArr) {
  let list_action = []
  routeArr.forEach(element => {
    list_action.push(NavigationActions.navigate({ routeName: element.routeName, params: element.params }))
  });
  _navigator.dispatch(
    StackActions.reset({
      index: routeArr.length - 1,
      actions: list_action,
    })
  )
}

function replace(routeName, params) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    })
  );
}

function pop() {
  _navigator.dispatch(
    NavigationActions.back()
  );
}

export default {
  reset,
  navigate,
  setTopLevelNavigator,
  pop,
  customReset,
  replace
};
