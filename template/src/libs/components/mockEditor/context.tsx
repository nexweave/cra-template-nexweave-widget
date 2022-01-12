/* eslint-disable no-case-declarations */
import React, { useReducer, createContext, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { widgetData } from '../../../widget/mockData';
interface IProps {
  initialState: object | undefined;
  children: ReactNode;
  // any other props that come into the component
}

type InitialStateType = {};

type UpdateActionType = {
  type: string;
  payload: Record<string,any>;
};

type ActionType = UpdateActionType;

// export const MockEditorContext = createContext({});
export const MockEditorContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: { ...widgetData},
  dispatch: () => null,
});

const reducer = (state: object, action: ActionType) => {
  switch (action.type) {
    case 'update':
      // const { path, value } = action.payload;
      // let updatedState = Object.create({});
      // updatedState[`${path}`] = value;
      // let unflattedNewState = unflatten(updatedState) as Object;
      // let updatedValue = _.merge(state, unflattedNewState);
      console.log('Updaing context data');
      
      return { ...action.payload };
    default:
      throw new Error();
  }
};

export const MockEditorContextProvider = ({
  children,
  initialState = {},
}: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <MockEditorContext.Provider value={{ state, dispatch }}>
      {children}
    </MockEditorContext.Provider>
  );
};

MockEditorContextProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object),
};

MockEditorContextProvider.defaultProps = {
  children: {},
};
