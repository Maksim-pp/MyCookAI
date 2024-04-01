import  { FC } from 'react'
import { HeadShopList } from 'src/entities/head-pages/shopping-list'
import { ShopList } from 'src/widgets/shop-list'

export const ShopListBlock:FC = () => {
  return (
    <div>
        <HeadShopList />
        <ShopList />
    </div>
  )
}
