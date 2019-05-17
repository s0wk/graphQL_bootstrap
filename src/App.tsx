import React from 'react';

import ApolloClient from "apollo-boost";
import { ApolloProvider, QueryResult } from "react-apollo";

import TodosContextProvider from './TodosContextProvider/TodosConsumerProvider'
import { TodosContextConsumer } from './TodosContextProvider/TodosContext';

import './App.css';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjfitlb222zju01860wc988f6'
});

// {!loading && <TodosList todos={data.todos} />}
// {!loading && <TodosFooter />}

const TodosConsumer: React.FC = () => {
  return (
    <TodosContextConsumer>
      { ({ getTodos, activeTodo }) => {

        const response = async () => await getTodos;
        const asdf = response().then(res => console.log(res))

        const { loading, data } = asdf as any

        console.log('loading', data)

        return (
          <>
            <span/>
          </>
        )
      }}
    </TodosContextConsumer>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider
        client={client}
      >
        <TodosContextProvider>
          <h3>Todos</h3>
          <TodosConsumer />
        </TodosContextProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
