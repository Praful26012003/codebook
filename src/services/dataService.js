const getSession = () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const id = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, id };
}

export const getUser = async () => {
    const { token, id } = getSession();

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${id}`, requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status } //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export const getUserOrders = async () => {
    const { token, id } = getSession();
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${id}`, requestOptions);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status } //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export const createOrders = async (cartList, total, user) => {
    const { token } = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(order)
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status } //eslint-disable-line
    }
    const data = await response.json();
    return data;
}