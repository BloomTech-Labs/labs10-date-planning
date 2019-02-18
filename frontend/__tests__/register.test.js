import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import { ApolloConsumer } from 'react-apollo';
import Register, { FIREBASE_SIGNUP } from '../components/Register';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

function type(wrapper, name, value) {
    wrapper.find(`input[name="${name}"]`).simulate('change', {
      target: { name, value },
    });
  }
  
  const simulateuser = fakeUser();
  const mocks = [
    // signup mock mutation according to wesbos
    {
      request: {
        query: FIREBASE_SIGNUP,
        variables: {
          name: simulateuser.name,
          email: simulateuser.email,
          password: 'jon',
        },
      },
      result: {
        data: {
          signup: {
            __typename: 'User',
            id: 'abc123',
            email: simulateuser.email,
            name: simulateuser.name,
          },
        },
      },
    },
    // current user query mock according to wesbos
    {
      request: { query: CURRENT_USER_QUERY },
      result: { data: { simulateuser } },
    },
  ];
  
  describe('<Register/>', () => {
    it('renders and matches snapshot', async () => {
      const wrapper = mount(
        <MockedProvider>
          <Register />
        </MockedProvider>
      );
      expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
    });
  
    it('calls the mutation properly', async () => {
      let apolloClient;
      const wrapper = mount(
        <MockedProvider mocks={mocks}>
          <ApolloConsumer>
            {client => {
              apolloClient = client;
              return <Register />;
            }}
          </ApolloConsumer>
        </MockedProvider>
      );
      await wait();
      wrapper.update();
      type(wrapper, 'name', simulateuser.name);
      type(wrapper, 'email', simulateuser.email);
      type(wrapper, 'password', 'jon');
      wrapper.update();
      wrapper.find('form').simulate('submit');
      await wait();
      // query the user out of the apollo client
      const user = await apolloClient.query({ query: CURRENT_USER_QUERY });
      expect(user.data.simulateuser).toMatchObject(simulateuser);
    });
  });