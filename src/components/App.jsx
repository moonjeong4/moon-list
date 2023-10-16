import { useEffect, useState } from 'react';
import Form from './Form';
import Logo from './Logo';
import List from './List';
// import Stats from './Stats';
import { getItems } from '../services/apiItems';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [items, setItems] = useState([]);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  // function handleDeleteItem(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }

  // function handleToggleItem(id) {
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? { ...item, checked: !item.checked } : item,
  //     ),
  //   );
  // }

  // function handleClearItems() {
  //   const confirmed = window.confirm(
  //     'Are you sure you want to clear the list?',
  //   );
  //   if (confirmed) setItems([]);
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="h-screen bg-sky-950">
        <Logo />
        <Form />
        <List />
        {/* <Stats /> */}
      </div>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 1500,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#fff',
            color: '#374151',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
