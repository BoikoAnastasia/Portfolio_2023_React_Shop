export interface AllProductsState {
    data: IAllData[] | [],
    isLoading: boolean,
    isError: string | null,

}

export interface ProductInfoState {
    data: IAllData | null,
    isLoading: boolean,
    isError: string | null,

}


export interface IAllData {
    id: number | null;
    title: string | null;
    price: number | null;
    category: string | null;
    description: string | null;
    image: string | null;
}


export interface ICartUser {
    data: ICartUserData | null,
    isLoading: boolean,
    isError: string | null,
}

export interface ICartUserData {
    id: number,
    userId: number,
    date: string,
    products: ICartUserDataProducts[],
}

export interface ICartUserDataProducts {
    productId: number,
    quantity: number,
}
