import { useState } from 'react';

import {
  Container,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
  CenteredContainer } from './styles';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { ActivityIndicator } from 'react-native';

import { products as mockProducts} from '../mocks/products';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';

export const Main = () => {
  const [isTableModalVisible, setTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>(mockProducts);


  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setTableModalVisible(false);
  }

  function handleFinishOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex((cartItem) => cartItem.product._id === product._id);
      const newCartItems = [...prevState];

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex((cartItem) => cartItem.product._id === product._id);
      const newCartItems = [...prevState];

      const item = prevState[itemIndex];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  return (
    <>
      <Container>

        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleFinishOrder}
        />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator size="large" color="#D73035"/>
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories />
            </CategoriesContainer>

            {products.length > 0 ? (
              <MenuContainer>
                <Menu
                  onAddToCart={handleAddToCart}
                  products={products}
                />
              </MenuContainer>
            ) : (
              <CenteredContainer>
                <Empty />
                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        )}

      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => setTableModalVisible(true)}
              disabled={isLoading}
            >
                Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onRemove={handleDecrementCartItem}
              onConfirmOrder={handleFinishOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>

  );
};
